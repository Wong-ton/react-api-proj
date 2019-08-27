import React from 'react';
import '../App.css';

class Edit extends React.Component {
    
    state = {
        id: "",
        name: "",
        email: "",
        password: "",
        new_password: "",
        confirm_password: "",
        message: "",
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = async (e) => {
        e.preventDefault();

        const editCall = await this.edit(this.state);
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

    edit = async (data) => {
        try {
          const editResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${this.props.id}/edit`, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(data),
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json"
            }
          })
          console.log(editResponse, "this is editResponse!!!!!")
    
          const parsedResponse = await editResponse.json();
          this.setState({
            ...parsedResponse.data,
          })
          return parsedResponse;
        } catch(err){
          console.log(err)
        }
      }

    delete = async () => {
        try {
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${this.props.id}`, {
                method: "DELETE",
                credentials: "include",
            })
            this.setState({
                message: "Your account has been deleted."
            })
            this.props.history.push("/users/Register")
        }
        catch(err){
        console.log(err)
        }
    }

    render(){
        return(
            <div className="edit">
                <h2>Edit User Details</h2>
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
                <br/>
                <button onClick={this.delete}>Delete Account</button>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default Edit;