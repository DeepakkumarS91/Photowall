import React,{Component} from 'react';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route,Link} from 'react-router-dom';
import {removePost} from '../redux/actions';
import Single from './Single';



class Main extends Component{
    constructor(){
        super()
                   
        }


    render(){
        console.log(this.props);
                return (
             <div>
             <h1><Link to="/">Deepak`s photoWALL</Link></h1>

                  <Route exact path="/" render={()=>      
                <div>
                  
                  <Photowall {...this.props}/>
                </div>}   />   

            
                   <Route path="/AddPhoto" render={({history})=>(
                   <AddPhoto {
                   ...this.props} 
                   /> )}/>
                  
                   <Route path="/single/:id" render={(params)=>(
                   <Single {...this.props} {...params}/>
                )}/>

                  
                   
               </div>
             );
            }
}

export default Main