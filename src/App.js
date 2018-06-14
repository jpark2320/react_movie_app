import React, { Component } from 'react'
import './App.css'
import Movie from './Movie'
import Loader from './Loader'

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillMount() -> render() -> componentDidMount()

  state = {}

  componentDidMount() {
    this._getMovies()
  }

  _renderMovies = () => {
    // The map() returns [<Movie props />, <Movie props />, ... ]
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres} 
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(e => console.log(e))
  }

  render() {
    const { movies } = this.state // Add "this.state" to all "movies" test
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : <Loader />}
      </div>
    )
  }
}

export default App