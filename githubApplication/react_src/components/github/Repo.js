import React,{Component} from "react";
import ReactDom from "react-dom";

class Repo extends Component {

	

	render(){
		var repoList = 	<ul className="list-group">
							  <li className="list-group-item">Cras justo odio</li>
							  <li className="list-group-item">Dapibus ac facilisis in</li>
							  <li className="list-group-item">Morbi leo risus</li>
							  <li className="list-group-item">Porta ac consectetur ac</li>
							  <li className="list-group-item">Vestibulum at eros</li>
						</ul>;
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