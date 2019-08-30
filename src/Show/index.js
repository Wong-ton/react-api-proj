import React, { Component } from 'react';

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
        this.setState({
            movie
        })
    }
    render() {
        return(
            <div>
                {this.state.movie.title}
                <img src={`https://image.tmdb.org/t/p/w185/${this.state.movie.poster_path}`} />
            </div>
        )
    }
}   

export default Movie