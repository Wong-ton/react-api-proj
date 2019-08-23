import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    
    state = {
        name: "",
        email: "",
        password: "",
        message: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = async (e) => {
        e.preventDefault();
        // const data = new FormData();
        // data.append("name", this.state.name);
        // data.append("email", this.state.email);
        // data.append("password", this.state.password);

        const registerCall = await this.props.register(this.state)
            if (registerCall.status.success){
            // this.props.history.push("/profile")
                this.setState({
                    message: "Account created."
                })
            } else {
                this.setState({
                    message: "** This e-mail already exists. **"
                })
            }
    }

    render(){
        return(
            <div className="Register">
                <form onSubmit={this.submitHandler}>
                    <h2>Register</h2>
                    <br/>
                    <label>
                        <input 
                            type="text" 
                            name="name"
                            value={this.state.name}
                            placeholder="Enter Name" 
                            onChange={this.changeHandler} 
                        />
                    </label><br/>
                    <label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            placeholder="Enter E-mail"
                            onChange={this.changeHandler} 
                        />
                    </label><br/>
                    <label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            placeholder="Enter Password"
                            onChange={this.changeHandler} 
                        />
                    </label><br/>
                    <button 
                        type="submit">
                            Submit
                    </button>
                    <p>{this.state.message}</p>
                    <p>Already have an account? <Link to="/login">Sign In</Link></p>
                </form>
            </div>
        )
    }
}

export default Register;