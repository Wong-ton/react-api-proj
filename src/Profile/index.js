import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {

    state = {
        id: 1,
        name: "",
        email: "",
    }

    logOut = async () => {
        try {
          await fetch("http://localhost:8000/users/logout")
          localStorage.clear()
          this.props.history.push("/users/login")
        }
        catch(err){
        console.log(err)
        }
      }

    render(){
        return(
            <div className="profile">
                <h4>Name: {this.props.name}</h4>
                <h4>E-mail: {this.props.email}</h4>
                <button onClick={this.logOut}>Logout</button>
                <Link to={`/users/${this.props.id}/edit`}>
                <button type="button">Edit Account</button>
                </Link>
            </div>
        )
    } 
}

export default Profile;