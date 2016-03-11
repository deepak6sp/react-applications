import React from 'react';
import MyActions from '../actions/Actions';
import MyStore from '../stores/Stores';
import MovieApp from './App';


class ReceiveMovies extends React.Component {

    render() {
    	console.log("movies"+JSON.stringify(this.props.Movies));
    	var movie_list = this.props.Movies.map(function(element,index){
    		//console.log("movies_list"+JSON.stringify(element.Title));
    		return <div className="row">
    					<div className="col-xs-6">
    						<div className="row">
    							<div className="col-xs-12">
    								{element.Title}
    							</div>
    						</div>
    						<div className="row">
								<div className="col-xs-12">
								    <a href="#" className="thumbnail">
								      <img src={element.Poster}/>
								    </a>
								</div>
							</div>
						</div>
					</div>
    	});
        return (
        	<div>your results: {movie_list}</div>
        );
    }
}

export default ReceiveMovies