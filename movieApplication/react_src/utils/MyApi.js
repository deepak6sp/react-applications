import MyActions from '../actions/Actions';

module.exports = {
	searchMovies : function(movie){
			$.ajax({
				  url: "http://www.omdbapi.com/?s="+movie.title,
				  dataType: "json",
				  cache:false,
				  success:function(result){
				  	MyActions.receiveMovies(result.Search);
				  }.bind(this),
				  error:function(xhr,status,err){
				  	console.log(err);
				  }.bind(this)

			});
	}
}