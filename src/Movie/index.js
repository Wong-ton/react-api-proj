import React, { Component } from 'react';
import TrendingMovies from '../Trending/movies';

class Movie extends Component {
    state = {
        movie: {}
    }

    async componentDidMount() {
        const id = this.props.match.params.id
        console.log(this.props.match.params)
        console.log(this.props.match.params.id)
        const req = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=76b7eb9d74b21ff2bf120a4499967ac6`)
        const movie = await req.json()
        console.log(movie)
        this.setState({
            movie
        })
    }
    render() {
        return(
        
            <div className="flickFlexBox">
              <img src={`https://image.tmdb.org/t/p/w342/${this.state.movie.poster_path}`} />
              <div className="flickDetails">
                <p><h1>{this.state.movie.title}</h1></p>
                <p>{this.state.movie.genre}</p>
                <p>{this.state.movie.overview}</p>
              </div>
            </div>
        )
    }
}   

export default Movie