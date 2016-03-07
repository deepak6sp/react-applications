import React from 'react';
import MyActions from '../actions/Actions';
import MyStore from '../stores/Stores';
import Search from './Search';


class MovieApp extends React.Component {
    render() {
        return <div>
        			<h1>Welcome to my movie finder</h1>
        			<Search />
        	</div>;
    }
}

export default MovieApp