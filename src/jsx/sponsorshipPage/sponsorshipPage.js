import React, {Component} from 'react';
import Footer from '../Footer/footer.js';
import SubHeader from '../subHeaderRef/subHeaderDiv.js';
import SponsorshipDiv from '../frontPage/components/sponsorDiv.js';

class Sponsorships extends Component{
    render(){
    	return(
		<div className="container" id="aboutPage">
    		<SponsorshipDiv/>	
    		<hr></hr>
    		<Footer/>
		</div>
		);
	}
}
export default Sponsorships;