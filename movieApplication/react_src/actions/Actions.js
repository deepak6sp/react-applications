import MyDispatcher from "../dispatcher/Dispatcher";
import MyConstants from "../constants/Constants";



var MyActions = {
	searchMovies: function(movie){		
		MyDispatcher.handleViewAction({
			actionType:MyConstants.SEARCH_MOVIES,
			movie:movie
		});
	},
	receiveMovies:function(rmovie){	

		MyDispatcher.handleViewAction({
			actionType:MyConstants.RECEIVE_MOVIES,
			rmovie:rmovie
		});
	}

};

export default MyActions