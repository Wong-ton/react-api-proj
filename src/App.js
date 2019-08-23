import React from 'react';
import './App.css';
import Register from './Register';
import Login from './Login';
import Edit from './Edit';

class App extends React.Component {

  state = {
    id: "",
    name: "",
    email: "",
    trendingMovies: [],
  }

  componentDidMount(){
    
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=76b7eb9d74b21ff2bf120a4499967ac6")
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ trendingMovies: data.results.trendingMovies }) 
      })
  }

  logIn = async (data) => {
    try {
      const loginResponse = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
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
       body: JSON.stringify(data),
       headers: {
         "Content-Type": "application/json"
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
  

  edit = async (data) => {
    try {
      const editResponse = await fetch(`http://localhost:8000/users/${this.state.id}`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(data),
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

  render(){
    return (
      <div className="App">
        REACT
        <hr/>
        <Register register={this.register}/>
        <hr/>
        <Login login={this.logIn}/>
        <hr/>
        <Edit edit={this.edit} name={this.state.name} email={this.state.email} />

      </div>
    );
  }
}

export default App;
