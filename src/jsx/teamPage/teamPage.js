import React, { Component } from 'react';
import Footer from '../Footer/footer.js';
import SubHeader from '../subHeaderRef/subHeaderDiv.js';

class TeamPage extends Component {
	
	render(){
		return(
		 		<div className="container">
				    
		 			<SubHeader currentPage="Our Team" onClick={this.props.pageFunctions[0]} />
				
				    <div className="row">
				        <div className="col-lg-12">
				            <img className="img-responsive" src="./teamImages/teamPhoto.jpg" alt=""></img>
				        </div>
				    </div>
				   
				    <div className="row">
				        <div className="col-lg-12">
				            <h2 className="page-header">Team Members</h2>
				        </div>
				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="./teamImages/dustinH.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Dustin Henderson<br/>
				                    <small>Job Title: Team Director<br/></small>
				                    <small>Major: Electrical Engineering<br/></small>
				                    </h3>
				                    <ul className="list-inline">
				                        <li><a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
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
				                       
				                    </ul>
				                </div>
				            </div>
				        </div>
				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="./teamImages/peterB.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Peter Baily<br/>
				                    <small>Job Title: Team Treasurer<br/></small>
				                    <small>Major: Electrical Engineering<br/></small>
				                   
				                    </h3>
				                    
				                    <ul className="list-inline">
				                        <li><a href="https://www.linkedin.com/in/peter-bayley-3b0509a2?authType=NAME_SEARCH&authToken=egAE&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A365550324%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1478397844688%2Ctas%3Apeter"><i className="fa fa-2x fa-linkedin-square"></i></a>
				                        </li>
				                       
				                    </ul>
				                </div>
				            </div>
				        </div>
				        
				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="./teamImages/santiagoE.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Santiago Lugo<br/>
				                    <small>Job Title: Fiber Optics Lead/Torque Vectoring<br/></small>
				                    <small>Major: Computer Engineering<br/></small>
				                   
				                    </h3>
				                    <ul className="list-inline">
				                      
				                        <li><a href="https://www.linkedin.com/in/santiago-estrada-533848128?authType=NAME_SEARCH&authToken=zK4k&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A527621367%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1478397953006%2Ctas%3Asantiago%20es"><i className="fa fa-2x fa-linkedin-square"></i></a>
				                        </li>
				                       
				                    </ul>
				                </div>
				            </div>
				        </div>

				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="./teamImages/chrisS.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Chris Souza<br/>
				                    <small>Job Title: Torque Vectoring Lead<br/></small>
				                    <small>Major: Computer Engineering<br/></small>
				                    </h3>
				                    <ul className="list-inline">
				                       
				                        <li><a href="https://www.linkedin.com/in/christopher-souza-b7a12679?authType=NAME_SEARCH&authToken=QndS&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A277998862%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1478397990590%2Ctas%3Achri"><i className="fa fa-2x fa-linkedin-square"></i></a>
				                        </li>
				                   
				                    </ul>
				                </div>
				            </div>
				        </div>

				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="./teamImages/kellyH.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Kelly Honsinger<br/>
				                    <small>Job Title: Website Architect/Torque Vectoring<br/></small>
				                    <small>Major: Computer Engineering/Embedded Systems<br/></small>
				                    </h3>
				                    <ul className="list-inline">
				                        
				                        <li><a href="https://www.linkedin.com/in/kelly-honsinger-665893108?authType=NAME_SEARCH&authToken=SxQs&locale=en_US&srchid=4560529731478397911403&srchindex=1&srchtotal=3&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A4560529731478397911403%2CVSRPtargetId%3A456052973%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH"><i className="fa fa-2x fa-linkedin-square"></i></a>
				                        </li>
				                        
				                    </ul>
				                </div>
				            </div>
				        </div>


				        <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="./teamImages/shaunR.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Shaun Rasmussen<br/>
				                    <small>Job Title: Lap Timer Architect<br/></small>
				                    <small>Major: Software Engineering<br/></small>
				                    </h3>
				                    <ul className="list-inline">
				                        
				                        <li><a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
				                        </li>
				                       
				                    </ul>
				                </div>
				            </div>
				        </div>

				         <div className="col-md-4 text-center">
				            <div className="thumbnail">
				                <img className="img-responsive" src="./teamImages/kevinP.jpg" alt=""></img>
				                <div className="caption">
				                    <h3>Kevin Pingtong<br/>
				                    <small>Job Title: Director<br/></small>
				                    <small>Major: Electrical Engineering<br/></small>
				                    </h3>
				                    <ul className="list-inline">
				                        
				                        <li><a href="#"><i className="fa fa-2x fa-linkedin-square"></i></a>
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