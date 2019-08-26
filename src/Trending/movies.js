import React from 'react';
import '../App.css';

class TrendingMovies extends React.Component {

    state = {
        trendingMovies: [],
    }

    componentDidMount(){
        this.getMovies();
    }

    getMovies() {
        fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=76b7eb9d74b21ff2bf120a4499967ac6")
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.setState({ trendingMovies: data.results })
          })
      }

    getOneMovie = async (movie) => {
        // const favMovies = ['299534', "504608", '449562'] // call to the database to get all the users fav movies
        // const allUserMovies = await Promise.all(favMovies.map(async (i) => {
        //     const reqMovie = await fetch(`https://api.themoviedb.org/3/movie/${i}?api_key=76b7eb9d74b21ff2bf120a4499967ac6`)
        //     const movie = await reqMovie.json()
        //     return movie
        // }))

        // const reqMovie = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=76b7eb9d74b21ff2bf120a4499967ac6`)
        // const movies = await reqMovie.json()
        // console.log(movies)
        console.log(movie)
    }

    render(){
        this.getOneMovie('299534')
        return(
            <div className="flexContainer">
            <h1>Trending Movies</h1>
            <p><h3><a href="/trending/shows">Go To Trending Shows</a></h3></p>
            <ol>
                {console.log(this.state.trendingMovies)}
                {this.state.trendingMovies.map((m, i) => {
                    return(
                        <div className="flickContainer">
                            <img src={`https://image.tmdb.org/t/p/w185/${m.poster_path}`} />
                            <li key={i}>
                            <h4>{m.original_title}</h4>
                            {/* <br/>{m.overview} */}
                            </li>
                        <button onClick={() => this.getOneMovie(m)}>Add</button>
                        </div>  
                    )
                })}
            </ol>
            </div>
        )
    }
}

export default TrendingMovies;