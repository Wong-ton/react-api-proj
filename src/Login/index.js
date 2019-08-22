import React from 'react';

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
        const data = new FormData();
        data.append("email", this.state.email);
        data.append("password", this.state.password);

        const loginCall = await this.props.login(data);
            if (loginCall.status.success){
                // this.props.history.push("/profile")
                this.setState({
                    message: "Logged in successfully"
                })
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
                    Login
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
                    <button 
                        type="submit">
                            Submit
                    </button>
                </form>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Login;