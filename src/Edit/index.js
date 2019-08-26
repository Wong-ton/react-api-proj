import React from 'react';
import '../App.css';

class Edit extends React.Component {
    
    state = {
        name: "",
        email: "",
        password: "",
        new_password: "",
        confirm_password: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = async (e) => {
        e.preventDefault();

        const editCall = await this.props.edit(this.state);
            if (editCall.status.success){
                this.setState({
                    message: "User details updated."
                })
            } else {
                this.setState({
                    message: "Passwords do not match."
                })
            }

    }

    render(){
        return(
            <div className="Edit">
                <h2>Edit User Details</h2>
                <p>User ID: {this.props.id}</p>
                <p>Name: {this.props.name}</p>
                <p>E-mail: {this.props.email}</p>
                <br/>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="New Name"
                        onChange={this.changeHandler}
                    /><br/>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Old Password"
                        onChange={this.changeHandler}
                    /><br/>
                    <input
                        type="password"
                        name="new_password"
                        value={this.state.new_password}
                        placeholder="New Password"
                        onChange={this.changeHandler}
                    /><br/>
                    <input
                        type="password"
                        name="confirm_password"
                        value={this.state.confirm_password}
                        placeholder="Confirm New Password"
                        onChange={this.changeHandler}
                    /><br/>
                    <button type="submit">
                        Submit Changes
                    </button>
                </form>
                <hr/>
                <button type="onClick">Logout</button>
            </div>
        )
    }
}

export default Edit;