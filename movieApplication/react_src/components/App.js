import React from 'react';
import MyActions from '../actions/Actions';
import MyStore from '../stores/Stores';
import Search from './Search';
import ReceiveMovies from './receiveMovies';

function getAppState(){
	return {
		movies:MyStore.getMovies()
	}
}

//alert("aasdasds"+MyStore.getMovies());
var  MovieApp = React.createClass ({
	getInitialState:function() {
	    return getAppState();
	},
	componentDidMount:function() {
		MyStore.addChangeListener(this._onChange);	      
	},
	componentWillUnmount:function() {
		MyStore.removeChangeListener(this._onChange);	      
	},
	_onChange:function(){
		this.setState(getAppState());
	},
    render() {
        return <div>
        			<h1>Welcome to my movie finder</h1>
        			<Search />
        			<ReceiveMovies Movies={this.state.movies}/>
        	</div>;
    }
});

export default MovieApp