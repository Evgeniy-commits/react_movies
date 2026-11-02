import './Main.css';
import React from 'react';
import MovieList from '../componets/MovieList';
import Preloader from '../componets/Preloader';
import Search from '../componets/Search';

class Main extends React.Component
{
    state = 
    {
         movies:[]
    }

    componentDidMount()
    {
        fetch('https://www.omdbapi.com/?s=Terminator&apikey=4f3893ed')
            .then(response => response.json())
            .then(data => this.setState({movies:data.Search}));
    }
    searchMovie = (str, type = 'all') =>
    {
        console.log(`str:${str};\t type:${type}`);
        // fetch(`https://www.omdbapi.com/?s=${str}${type !== 'all' ? `&type = ${type}` : ''}&apikey=4f3893ed`)
        //     .then(response => response.json())
        //     .then(data => this.setState({movies:data.Search}));
        fetch
(
	`https://www.omdbapi.com/?s=${str}${type !== 'all' ? `&type=${type}` : ''}&apikey=94dbc433`
)
	.then(response => response.json())
	.then(data => this.setState({ movies: data.Search }));
    }
    render()
    {        
        return(      
            <div className='main'>
            <Search searchMovie = { this.searchMovie }/>
                {                   
                    this.state.movies == null ? <h1>Nothing</h1> : 
                    this.state.movies.length == 0 ? <Preloader /> :
                    <MovieList movies = { this.state.movies } />
                }
            </div>          
        )
    }
}

export default Main;