import React from 'react';
import MyActions from '../actions/Actions';
import MyStore from '../stores/Stores';


class Search extends React.Component {
	handleSubmit(e){
		e.preventDefault();
		var movieTitle = document.getElementById("movieName").value;
		let movie = {
			"title":movieTitle
		}
		
		MyActions.searchMovies(movie);

	}
    render() {
        return <form onSubmit = {this.handleSubmit}>
			  <fieldset className="form-group">
			    <input type="text" ref="title" className="form-control" id="movieName" placeholder="Enter movie name" />
			  </fieldset>
			  <button className="btn btn-primary col-xs-12">Submit</button>
			  </form>
    }
}

export default Search