import React,{Component} from 'react';
import {connect} from 'react-redux';


export class About extends Component {

 render(){
   console.log("coming from the store", this.props.username)
    return (
          <div><center>


                 <h1>My name is {this.props.username}. I am the creator of this store.</h1>
                 </center>
            </div>
     )
}
}

const mapStateToprops = (state) => ({
  username: state.usernames.username
})


export default connect(mapStateToprops)(About)
