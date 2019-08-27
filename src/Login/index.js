import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {

    state = {
        id: "",
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
                console.log(this.state)
                this.setState({
                    message: "Logged in successfully."
                })
                this.props.history.push("/users/Profile")
                
            } else {
                this.setState({
                    message: "** Email or Password is incorrect. **"
                })
            }

    }

    render(){
        return(
            <div className="login">
                <form onSubmit={this.submitHandler}>
                    <h2>Login</h2>
                    <br/>
                    E-mail Address<br/>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        placeholder="Enter E-mail"
                        onChange={this.changeHandler} 
                    /><br/>
                    Password<br/>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Enter Password"
                        onChange={this.changeHandler} 
                    /><br/><br/>
                    <button type="submit">
                            Submit
                    </button>
                <p>{this.state.message}</p>
                <p>Not a member? <Link to="/users/register">Register now</Link></p>
                </form>
            </div>
        )
    }
}

export default Login;