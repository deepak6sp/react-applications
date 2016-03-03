import React,{Component} from "react";
import ReactDom from "react-dom";
import AppDispatcher from "./dispatcher/Dispatcher";


class App extends Component{
	render(){
		return(
			<div>
				  <h1>Example Domain</h1>
				    <p>This domain is established to be used for illustrative examples in documents. You may use this
				    domain in examples without prior coordination or asking for permission.</p>
				    <p><a href="http://www.iana.org/domains/example">More information...</a></p>
			</div>
		);
	}

}

ReactDom.render(<App />,document.getElementById("myApp"));