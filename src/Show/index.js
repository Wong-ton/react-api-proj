import React, { Component } from 'react';

class Show extends Component {
    state = {
        show: {}
    }

    async componentDidMount() {
        const id = this.props.match.params.id
        console.log(this.props.match.params)
        console.log(this.props.match.params.id)
        const req = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=76b7eb9d74b21ff2bf120a4499967ac6`)
        const show = await req.json()
        this.setState({
            show
        })
    }
    render() {
        return(
            
            <div className="flickFlexBox">
              <img src={`https://image.tmdb.org/t/p/w342/${this.state.show.poster_path}`} />
              <div className="flickDetails">
                <p><h1>{this.state.show.name}</h1></p>
                <p>{this.state.show.overview}</p>
              </div>
            </div>
        )
    }
}   

export default Show;