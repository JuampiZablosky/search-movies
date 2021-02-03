import React, { useState } from 'react'
import { Title } from '../components/Title.js'
import { SearchForm } from '../components/SearchForm.js'
import { MoviesList } from '../components/MoviesList'

export function Home () {

    const [ resultados, setResults ] = useState([])
    const [ usedSearch, setUsedSearch] = useState(false)

    let _handleResults = (results) => {
        setResults({results})
        setUsedSearch(true)
        //console.log(resultados)
    }
  
    const _renderResults = () => {
    return resultados.results.length !== 0 
      ? <MoviesList movies={resultados}/>
      : <p>Sorry! Results not found</p>
    }
    
    return(
        <div>
            <Title>Search Movies</Title>
            <div className="SearchForm-wrapper">
                <SearchForm onResults={_handleResults}/>
            </div>
            {
            usedSearch
            ? _renderResults()
            : <small>Use the form to search a movie</small>
            }
        </div>
    )
    
}
