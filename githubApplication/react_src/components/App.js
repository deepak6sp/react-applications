import React,{Component} from "react";
import ReactDom from "react-dom";
import Navbar from "./Navbar.js";
import Search from "./Search.js";
import Profile from "./github/Profile.js";
import Repo from "./github/Repo.js";

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			userName: "deepak6sp",
			userData: [],
			userRepos:[],
			perPage:5
		}
	}
	getUserData(){
		$.ajax({
			url: "https://api.github.com/users/"+this.state.userName+"?client_id="+this.props.clientId+"&client_secret="+this.props.clientSecret,
			dataType : "json",
			cache:false,
			success : function(result){
				this.setState({userData : result});
			}.bind(this),
			error : function(xhr,status,err){
				alert(err);
			}.bind(this)
		});
	}

	getUserRepos(){
		$.ajax({
			url: "https://api.github.com/users/"+this.state.userName+"/repos?client_id="+this.props.clientId+"&client_secret="+this.props.clientSecret,
			dataType : "json",
			cache:false,
			success : function(result){
				this.setState({userRepos : result});
			}.bind(this),
			error : function(xhr,status,err){
				alert(err);
			}.bind(this)
		});
	}

	componentDidMount() {
	 	this.getUserData(); 
	 	this.getUserRepos();    
	}

	handleSubmit(username){
		this.setState({userName : username},function(){
			this.getUserData(); 
	 		this.getUserRepos();
		});
	}

	render(){
		return (
				<div>
					<Navbar />
					<Search onFormSubmit={this.handleSubmit.bind(this)}/>
					<Profile profile={this.state.userData} />
					<Repo repos={this.state.userRepos} />
				</div>
				

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