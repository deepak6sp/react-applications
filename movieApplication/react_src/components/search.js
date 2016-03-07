import React from 'react';
import MyActions from '../actions/Actions';
import MyStore from '../stores/Stores';


class Search extends React.Component {
	handleSubmit(e){
		e.preventDefault();
		alert(document.getElementById("movieName").value);

	}
    render() {
        return <form onSubmit = {this.handleSubmit}>
			  <fieldset className="form-group">
			    <label for="exampleInputEmail1">Enter movie name</label>
			    <input type="text" ref="title" className="form-control" id="movieName" placeholder="Enter movie name" />
			  </fieldset>
			  <button className="btn btn-primary">Submit</button>
			  </form>
    }
}

export default Search