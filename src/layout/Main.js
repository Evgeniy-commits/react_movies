import './Main.css';
import React from 'react';
import MovieList from '../componets/MovieList';
import Preloader from '../componets/Preloader';

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
    render()
    {        
        return(
            <div className='main'>
                {
                    this.state.movies.length == 0 ? <Preloader /> :
                    <MovieList movies = { this.state.movies } />
                }
            </div>
        )
    }
}

export default Main;