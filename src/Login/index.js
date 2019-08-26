import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    state = {
        email: "",
        password: "",
        message: "",
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = async (e) => {
        e.preventDefault();
        const loginCall = await this.props.login(this.state);
            if (loginCall.status.success){
                this.props.history.push("/profile")
                this.setState({
                    message: "Logged in successfully."
                })
                redirec
            } else {
                this.setState({
                    message: "** Email or Password is incorrect. **"
                })
            }

    }

    render(){
        return(
            <div className="Login">
                <form onSubmit={this.submitHandler}>
                    <h2>Login</h2>
                    <br/>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        placeholder="Your E-mail"
                        onChange={this.changeHandler} 
                    /><br/>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Your Password"
                        onChange={this.changeHandler} 
                    /><br/>
                    <button type="submit">
                            Submit
                    </button>
                <p>{this.state.message}</p>
                <p>Not a member? <Link to="/register">Register now</Link></p>
                </form>
                <br/><button href="/logout">Logout</button>
            </div>
        )
    }
}

export default Login;