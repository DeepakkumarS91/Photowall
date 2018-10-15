import React, {Component} from 'react';
class List extends Component{
    render(){
        return <ol>{this.props.name.map((names,index) => <li key={index}>{names}</li>)}</ol>
    }
}
export default List