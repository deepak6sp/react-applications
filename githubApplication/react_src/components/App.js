import React,{Component} from "react";
import ReactDom from "react-dom";
import Profile from "./github/Profile.js";

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			userName: "deepak6sp",
			userData: [],
			userrRepos:[],
			perPage:5
		}
	}
	getUserData(){
		$.ajax({
			url: "https://api.github.com/users/"+this.state.userName,
			dataType : "json",
			cache:false,
			success : function(result){
				this.setState({userData : result});
				console.log(JSON.stringify(result));
			}.bind(this),
			error : function(xhr,status,err){
				alert(err);
			}.bind(this)
		});
	}

	componentDidMount() {
	 	this.getUserData();     
	}

	render(){
		var udata = this.state.userData;
		return (
			<div><Profile profile={this.state.userData} /></div>


		);
	}
}

App.PropTypes = {
	clientId : React.PropTypes.string,
	clientSecret : React.PropTypes.string
};

App.defaultProps = {
	clientId :'6f726613fcff4def9996',
	clientSecret : '3d8e8e88cefba24a34109618acfd5d78436dcda9'
	
}



export default App