import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie'

export class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.object
    }

    render () {
        const { movies } = this.props
        console.log(movies)
        return (
            <div className="MoviesList">
                {
                    movies.results.map(movie => {
                        return (
                            <div key={movie.imdbID} className="MoviesList-item">
                                <Movie
                                id={movie.imdbID}
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}
                                />  
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}