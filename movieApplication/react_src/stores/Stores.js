import MyDispatcher from "../dispatcher/Dispatcher";
import MyConstants from "../constants/Constants";
import MyActions from '../actions/Actions';
var EventEmitter  =  require('events').EventEmitter;
import assign from 'Object-assign';
import MyApi from '../utils/MyApi';

let CHANGE_EVENT = 'change';

let _movies = [];
let selected = '';

let MyStore = assign({},EventEmitter.prototype,{

	emitChange :  function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener :  function(callback){
		this.on('change',callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change',callback);
	},
	receiveMovies: function(movies){
		_movies = movies;	
	},
	getMovies:function(){
		return _movies;
	}
});

MyDispatcher.register(function(payload){
	let action = payload.action;
	switch(action.actionType){
		case MyConstants.SEARCH_MOVIES: ;
										MyApi.searchMovies(action.movie);
										MyStore.emit(CHANGE_EVENT);
										break;
		case MyConstants.RECEIVE_MOVIES:MyStore.receiveMovies(action.rmovie);
										MyStore.emit(CHANGE_EVENT);
										break;

	}
	return true;
});


export default MyStore