import React from 'react';

class Login extends React.Component {

    state = {
        email: "",
        password: "",
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = async (e) => {
        e.preventDefault();
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
            </div>
        )
    }
}