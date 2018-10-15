import React, {Component} from 'react';


class AddPhoto extends Component{

    constructor(){
    super()
    this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
    event.preventDefault();
    const ImageLink=event.target.elements.link.value;
    const Description=event.target.elements.description.value;
    const post={
        id: Number(new Date()),
        imageLink:ImageLink,
        description:Description
    }
    if(ImageLink&&Description){
       this.props.addPost(post),
       this.props.history.push('/')
    }
    }

    render(){
    return(
    <div> 
        <div className="form">
        <form onSubmit={this.handleSubmit}>
        <input type="textfield" placeholder="Link" name="link"/>
        <input type="textfield" placeholder="Description" name="description"/>
        <button>Post</button>
        </form>
    </div>
    </div>
    );
    }
}

export default AddPhoto