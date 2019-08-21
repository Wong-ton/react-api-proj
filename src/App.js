import React from 'react';
import './App.css';
import Register from './Register';

class App extends React.Component {

  state = {
    name: "",
    email: ""
  }

  
  logIn = async (loginInfo) => {
    try {
      const loginResponse = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const parsedResponse = await loginResponse.json();
      this.setState({
        ...parsedResponse.data,
      })
      return parsedResponse
    
    } catch(err){
      console.log(err)
    }
  }


  register = async (data) => {
    try {
     const registerResponse = await fetch("http://localhost:8000/users/register", {
       method: "POST",
       credentials: "include",
       body: data,
       headers: {
         "enctype": "multipart/form-data"
       }
     }
    )

    const parsedResponse = await registerResponse.json();
    this.setState({
      ...parsedResponse.data,
    })
    return parsedResponse;

    } catch(err){
      console.log(err)
    }
  }
     

  render(){
    return (
      <div className="App">
        This is REACT
        <hr/>
        <Register register={this.register}/>
        <hr/>
        <Login />
      </div>
    );
  }
}

export default App;
