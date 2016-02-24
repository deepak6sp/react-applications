import React,{Component} from "react";
import ReactDom from "react-dom";

class Profile extends Component {
	render(){
		return(
				<div className="panel panel-default">
				  <div className="panel-heading">{this.props.profile.name}</div>
				  <div className="panel-body">
				  	<div className="row">
				  		<div className="col-md-4">
					  		<div className="row">
					  			<div className="col-md-12">
				  					<img src={this.props.profile.avatar_url} />
				  				</div>
				  			</div>
				  			

				  		</div>
				  		<div className="col-md-8">
				  			<div className="row">
					  			<div className="col-md-12">
				  					{this.props.profile.location}
				  				</div>
				  			</div>
				  			<div className="row">
					  			<div className="col-md-12">
				  					{this.props.profile.email}
				  				</div>
				  			</div>
				  		</div>
				  	</div>
				    
				  </div>
				</div>
		);
	}
}

export default Profile