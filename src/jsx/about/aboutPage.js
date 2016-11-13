import React, {Component} from 'react';
import Footer from '../Footer/footer.js';
import SubHeader from '../subHeaderRef/subHeaderDiv.js';

class AboutPage extends Component{
    render(){
    	return(
    		 <div className="container" id = "aboutPage">
				<SubHeader currentPage = "About" onClick={this.props.pageFunctions[0]} />
				
		        <div className="row">
		            <div className="col-md-6">
		                <img className="img-responsive" src="./aboutImages/qualcommCar.jpg" alt=""></img>
		            </div>
		            <div className="col-md-6">
		                <h2>OIT Electric FSAE! </h2>
		                <p>Formula Electric is a Student oriented Racing event. It puts the top engineering schools across the country against each other in one large competition. <a href="http://www.oit.edu/">OIT</a> is jumping on board this year and starting their own Electric formula team.  Comprised of the best students from multiple departments, OIT looks to clean the competition this year! </p>
		                
		            </div>
		        </div>
		        
		      	
		        <hr></hr>
		        <Footer/>
		    </div>
		);
    }
}
export default AboutPage;