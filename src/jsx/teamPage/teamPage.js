import React, { Component } from 'react';
import Footer from '../Footer/footer.js';

class TeamPage extends Component {
	
	render(){
		return(
		 		<div className="container">
				    <div className="row">
				        <div className="col-lg-12">
				            <h1 className="page-header">
				            	Our Team
			            	</h1>
				            <ol className="breadcrumb">
				                <li><a href="index.html">Home</a></li>
				                <li className="active">Team</li>
				            </ol>
				        </div>
				    </div>
				    
				    <div className="row">
				        <div className="col-lg-12">
				            <img className="img-responsive" src="http://www.oitracing.com/wp-content/uploads/2014/10/DSC_01301.jpg" alt=""></img>
				        </div>
				    </div>
				   
				    <div className="row">
				        <div className="col-lg-12">
				            <h2 className="page-header">Team Members</h2>
				        </div>
				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="http://risescholarshipfoundation.org/wp-content/uploads/2013/07/Dustin-Henderson-Large-2-290x217.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Dustin Henderson<br/>
				                    <small>Job Title: Team Director<br/></small>
				                    <small>Major: Electrical Engineering<br/></small>
				                    </h3>
				                    <ul className="list-inline">
				                        <li><a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
				                        </li>
				                        <li><a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
				                        </li>
				                    </ul>
				                </div>
				            </div>
				        </div>
				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="http://risescholarshipfoundation.org/wp-content/uploads/2013/07/Dustin-Henderson-Large-2-290x217.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Aaron Mueller<br/>
				                    <small>Job Title: Mechanical Lead<br/></small>
				                    <small>Major: Mechanical Engineering<br/></small>
				                    </h3>
				                    <ul className="list-inline">
				                        <li><a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
				                        </li>
				                        <li><a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
				                        </li>
				                    </ul>
				                </div>
				            </div>
				        </div>
				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="http://risescholarshipfoundation.org/wp-content/uploads/2013/07/Dustin-Henderson-Large-2-290x217.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Peter Baily<br/>
				                    <small>Job Title: Team Treasurer<br/></small>
				                    <small>Major: Electrical Engineering<br/></small>
				                   
				                    </h3>
				                    
				                    <ul className="list-inline">
				                        <li><a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
				                        </li>
				                        <li><a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
				                        </li>
				                    </ul>
				                </div>
				            </div>
				        </div>
				        
				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="http://risescholarshipfoundation.org/wp-content/uploads/2013/07/Dustin-Henderson-Large-2-290x217.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Santiago Lugo<br/>
				                    <small>Job Title: Sleeper Agent<br/></small>
				                    <small>Major: Computer Engineering<br/></small>
				                   
				                    </h3>
				                    <ul className="list-inline">
				                      
				                        <li><a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
				                        </li>
				                        <li><a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
				                        </li>
				                    </ul>
				                </div>
				            </div>
				        </div>

				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="http://risescholarshipfoundation.org/wp-content/uploads/2013/07/Dustin-Henderson-Large-2-290x217.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Chris Souza<br/>
				                    <small>Job Title: Torque Vectoring Engineer<br/></small>
				                    <small>Major: Computer Engineering<br/></small>
				                    </h3>
				                    <ul className="list-inline">
				                       
				                        <li><a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
				                        </li>
				                        <li><a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
				                        </li>
				                    </ul>
				                </div>
				            </div>
				        </div>
				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="http://risescholarshipfoundation.org/wp-content/uploads/2013/07/Dustin-Henderson-Large-2-290x217.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Eric Storey<br/>
				                    <small>Job Title: CAN Bus Specialist<br/></small>
				                    <small>Major: Electrical Engineering<br/></small>
				                   
				                    </h3>
				                    <ul className="list-inline">
				                        
				                        <li><a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
				                        </li>
				                        <li><a href="#"><i className="fa fa-2x fa-twitter-square"></i></a>
				                        </li>
				                    </ul>
				                </div>
				            </div>
				        </div>
				    </div>
				    
				    <hr></hr>

				    <Footer/>
				</div>
			);
	}
}
export default TeamPage;