import React,{Component} from "react";
import ReactDom from "react-dom";
import AppDispatcher from "./dispatcher/Dispatcher";
import MovieApp from "./components/App.js";


class App extends Component{
	render(){
		return(
			<div>
				 	<MovieApp /> 
			</div>
		);
	}

}

ReactDom.render(<App />,document.getElementById("myApp"));