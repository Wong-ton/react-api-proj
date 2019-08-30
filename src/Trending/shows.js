import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class TrendingShows extends React.Component {

    state = {
        trendingShows: [],
        page: 1
    }

    componentDidMount(){
        this.getShows();
    }

    getShows() {
        fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=76b7eb9d74b21ff2bf120a4499967ac6&page=${this.state.page}`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.setState({ trendingShows: data.results })
          })
      }

    previousPage = () => {
        if(this.state.page > 1 ) {
            this.setState({
                page: this.state.page - 1
            }, () => this.getShows())
        }
    }

    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        }, () => this.getShows())
    }

    getOneShow = async (show) => {
        // const favMovies = ['299534', "504608", '449562'] // call to the database to get all the users fav movies
        // const allUserMovies = await Promise.all(favMovies.map(async (i) => {
        //     const reqMovie = await fetch(`https://api.themoviedb.org/3/movie/${i}?api_key=76b7eb9d74b21ff2bf120a4499967ac6`)
        //     const movie = await reqMovie.json()
        //     return movie
        // }))

        // const reqMovie = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=76b7eb9d74b21ff2bf120a4499967ac6`)
        // const movies = await reqMovie.json()
        // console.log(movies)
        console.log(show)
    }

    render(){
        return(
            <div className="flexContainer">
                <h1>Trending Shows</h1>

                <br/><h3><a className="goTo" href="/trending/movies">Go To Trending Movies</a></h3>
                
                    {console.log(this.state.trendingShows)}
                    {this.state.trendingShows.map((s, i) => {
                        return(
                            <div key={i} className="flickContainer">
                                <br/>
                                <li>
                                  <Link to={`/show/${s.id}`}>
                                  <img src={`https://image.tmdb.org/t/p/w185/${s.poster_path}`} />
                                  <h4 className="flickTitle">{s.name}</h4>
                                  </Link>
                                  <button className="fave" onClick={() => this.getOneShow(s)}>Add To Favorites</button>
                                <br/><br/>
                                </li>
                            </div>  
                        )
                    })}
                <br/><br/>
                <button className="pages" onClick={() => this.previousPage()} disabled={this.state.page <= 1}>Previous</button>
                <button className="pages" onClick={() => this.nextPage()}>Next</button>
                <br/><br/>
            </div>
        )
    }
}

export default TrendingShows;