import React, {Component} from 'react';
import Footer from '../Footer/footer.js';
import SubHeader from '../subHeaderRef/subHeaderDiv.js';

class Contributors extends Component{
    render(){
    	return(
    		 <div className="container">
				<SubHeader currentPage="Giving our thanks" onClick={this.props.pageFunctions[0]} />
		        <div className="row">
		            <div className="col-md-4 col-sm-6">
	                    <img className="img-responsive" src="/teamImages/kevinP.jpg" alt=""></img>
   		            </div>
		            <div className="col-md-5">
		                <h3>Special Thanks to Kevin Pingtong!</h3>
		                	<p>Our director, Kevin Pintong, is the basis for the existence of our program. We applaud him for his hard work and great contributions.</p>
		            </div>
		        </div>
		        <hr></hr>
		        <div className="row">
		            
		            <div className="col-md-5">
		                <h3>Special Thanks to Eve Klough!</h3>
			                <p>Eve Klough, Assoiciate professor in the EE department, has been essential to our success. She has worked hard with our Space Vector Modulation team to help nail out the biggest difficulties.</p>
		            </div>
		        </div>
		        <div className="row">
		            <div className="col-md-5">
		                <h3>Special Thanks to Cody Bulkley!</h3>
		                	<p>Cody Bulkley, Oregon Tech Alumus, has been a key factor to our success.  </p>
		            </div>
		        </div>
		        <hr></hr>
		        <Footer/>
		    </div>
		);
    }
}
export default Contributors;