import React from 'react';

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

    render(){
        return(
            <div>
            <h2>Trending Movies</h2>
            <ol>
                {console.log(this.state.trendingMovies)}
                {this.state.trendingMovies.map((m, i) => {
                    return(
                        <div key={i}>
                        <li>
                            {m.original_title}
                            <ul>{m.overview}</ul>
                        </li>
                        </div>
                    )
                })}
            </ol>
            </div>
        )
    }
}

export default TrendingMovies;