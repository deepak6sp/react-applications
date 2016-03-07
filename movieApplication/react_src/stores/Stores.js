import MyDispatcher from "../dispatcher/Dispatcher";
import MyConstants from "../constants/Constants";
import MyActions from '../actions/Actions';
var EventEmitter  =  require('events').EventEmitter;
import assign from 'Object-assign';
import MyApi from '../utils/MyApi';

let CHANGE_EVENT = 'change';

let movies = new Array();
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
	}

});

MyDispatcher.register(function(payload){
	let action = payload.action;

	switch(action.actionType){

	}
	return true;
});


export default MyStore