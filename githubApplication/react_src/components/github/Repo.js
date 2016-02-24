import React,{Component} from "react";
import ReactDom from "react-dom";

class Repo extends Component {

	

	render(){
		var repoList = 	this.props.repos.map(function(repo){
							return(<ul className="list-group">
										  <li className="list-group-item">{repo.name}</li>
										  <li className="list-group-item">Last Updated:{repo.updated_at}</li>
									</ul>
							);
						});
		return(
				<div className="panel panel-default">
				  <div className="panel-heading">User Repositories</div>
				  <div className="panel-body">
				  	<div className="row">
				  		<div className="col-md-4">
					  		{repoList}
				  		</div>
				  	</div>
				    
				  </div>
				</div>
		);
	}
}

export default Repo