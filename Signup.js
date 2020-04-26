import React, { Component } from 'react';
import axios from 'axios'

class Signup extends Component {

    state = {
        name: "",
        password: "",
        email: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/user/users", this.state)
        .then(res => console.log("successfully posted data to backend", res.data))
        .catch(err => console.log("unable to post data", err))
       // console.log(this.state)
    }

    render() {
        
       const { name, password, email } = this.state
        return (
            <div class="container"><center>
                <form onSubmit={this.handleSubmit}>
                <h1>Create An Account:</h1>
                <label for="name"><b>Name:</b></label>
                <input type="text" placeholder="Enter Name" name="name" value={name} required onChange={this.handleChange} />
                <br />
                <label for="psw"><b>Password:</b></label>

                <input type="password" placeholder="Enter Password" name="password" value={password} required onChange={this.handleChange} />
                <br />
                <label for="email"><b>Email:</b></label>

                <input type="email" placeholder="Email" value={email} name="email" required onChange={this.handleChange} />
                <br />
                <button type="submit" className="signupbtn">Sign Up</button>
                </form>
            </center>




            </div>


        )
    }

}

export default Signup;
