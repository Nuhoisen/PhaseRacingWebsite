import React, { Component } from 'react';
import Footer from '../Footer/footer.js';


class SubHeaderRef extends Component {
	
	render(){
		return(
			<div className="row">
	            <div className="col-lg-12">
	                <h1 className="page-header"> {this.props.currentPage}
	                </h1>
	                <ol className="breadcrumb">
	                    <li ><a href="#" onClick={this.props.onClick}>Home</a>
	                    </li>
	                    <li className="active">{this.props.currentPage}</li>
	                </ol>
	            </div>
	        </div>
		);
	}


}

export default SubHeaderRef;