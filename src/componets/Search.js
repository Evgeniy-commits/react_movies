import './Search.css';
import React from 'react';

class Search extends React.Component
{
    state = 
        {
            search:""
        }
    handleKey = (event) =>
    {
        if (event.key === 'Enter')
        {
            this.props.searchMovie(this.state.search, this.state.type);
        }
    }
    handleFilter = (event) =>
    {
        console.log(event);
        this.setState
(
		() => ({ type:		event.target.dataset.type }),
		() => ({ search:	this.props.searchMovie(this.state.search, this.state.type) })
)
        // this.setState
        // (
        //     () => ({type: event.target.dataset.type}),
        //     () => ({ search: this.props.searchMovie(this.state.search, this.state.type)})
        // )
    }
    render()
    {
        return(
            <>
            <div className='search'>
                <input type='search'
                       placeholder='Поиск'
                       value={this.state.search}
                       onChange={(e) => this.setState({search: e.target.value})} 
                       onKeyUp={this.handleKey}
                />
                <button className='btn'
                        onClick=
                        {
                            () => this.props.searchMovie(this.state.search, this.state.type)
                        }
                        >
                        &#128269;
                </button>
            </div>
            <div className='radio'>
                <input type='radio' 
                       name='type'
                       id='radio-all'
                       data-type='all'
                       checked={this.state.type === 'all'}
                       onChange={this.handleFilter}
                />
                <label htmlFor='radio-all'>All</label>

                <input type='radio' 
                       name='type'
                       id='radio-movie'
                       data-type='movie'
                       checked={this.state.type === 'movie'}
                       onChange={this.handleFilter}
                />
                <label htmlFor='radio-movie'>Movie</label>

                <input type='radio' 
                       name='type'
                       id='radio-series'
                       data-type='series'
                       checked={this.state.type === 'series'}
                       onChange={this.handleFilter}
                />
                <label htmlFor='radio-series'>Series</label>

                <input type='radio' 
                       name='type'
                       id='radio-game'
                       data-type='game'
                       checked={this.state.type === 'game'}
                       onChange={this.handleFilter}
                />
                <label htmlFor='radio-game'>Game</label>
                
            </div>
            </>
            
        )
    }
}
export default Search;