import './Main.css';
import React from 'react';
import MovieList from '../componets/MovieList';

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
                <MovieList movies = { this.state.movies } />
            </div>
        )
    }
}

export default Main;