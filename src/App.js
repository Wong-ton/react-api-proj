import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import { routes } from './NavBar/routes';
import Register from './Register';
import Login from './Login';
import Edit from './Edit';
import Profile from './Profile'
import TrendingMovies from './Trending/movies';
import TrendingShows from './Trending/shows';
import Movie from './Movie';
import Show from './Show';

class App extends React.Component {

  state = {
    id: "",
    name: "",
    email: "",
  }

  logIn = async (data) => {
    try {
      const logInResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const parsedResponse = await logInResponse.json();
      localStorage.setItem("movie_user", JSON.stringify(parsedResponse.data))
      this.setState({
        ...parsedResponse.data,
        loggedIn: true,
      })
      console.log(parsedResponse)
      return parsedResponse
    
    } catch(err){
      console.log(err)
    }
  }

  register = async (data) => {
    try {
     const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/register`, {
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
      const editResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${this.state.id}/edit`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(editResponse, "this is editResponse!!")

      const parsedResponse = await editResponse.json();
      this.setState({
        ...parsedResponse.data,
      })
      return parsedResponse;
    } catch(err){
      console.log(err)
    }
  }

  updateUser = (user) => {
    this.setState({
      id: user.id,
      name: user.name,
      email: user.email,
    })
  }

  render(){
    return (
      <div>
        <NavBar routes={routes}/>
          <Switch>
            <Route exact path="/trending/shows" render={(props) => <TrendingShows {...props} shows={this.state.trendingMovies}/> }/>
            <Route exact path="/trending/movies" render={(props) => <TrendingMovies {...props} movies={this.state.trendingMovies}/> }/>
            <Route exact path="/users/register" render={(props) => <Register {...props} register={this.register}/> }/>
            <Route exact path="/users/login" render={(props) => <Login {...props} login={this.logIn} logout={this.logOut}/> }/>
            <Route exact path="/users/profile" render={(props) => <Profile {...props} name={this.state.name} email={this.state.email} id={this.state.id}/> }/>
            <Route exact path={"/users/:id/edit"} render={(props) => <Edit {...props} name={this.state.name} email={this.state.email} id={this.state.id} updateUser={this.updateUser}/> }/>
            <Route exact path={"/movie/:id"} render={props => <Movie {...props}/>} />
            <Route exact path={"/show/:id"} render={props => <Show {...props}/>} />
            <Route exact path={"/"} render={props => <TrendingMovies {...props} movies={this.state.trendingMovies}/> }/>
            <Route component={My404} />
          </Switch>
      </div>
    );
  }
}


const My404 = () => {
  return(
    <div>
      <h1>ERROR 404: It seems you're lost..</h1>
      <h3><a href="/trending/movies">Back to Home Page</a></h3>
    </div>
  )
}

export default App;
