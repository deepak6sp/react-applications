import React,{Component} from "react";
import ReactDom from "react-dom";

class Search extends Component{
	onSubmit(e){
		e.preventDefault();
		let searchTerm = $("#searchTerm").val();
		
		this.props.onFormSubmit(searchTerm);
	}
	render(){
		return(
			<form onSubmit={this.onSubmit.bind(this)}>
				<div className="row">
					<div className="col-md-4">
						<fieldset className="form-group">
							<input type="text" className="form-control" placeholder="Search github profiles by name" id="searchTerm"/>
						</fieldset>
					</div>
				</div>
			</form>

		);
	}
}

export default Search