import React, {Component} from 'react';
import SimpleSlider from './components/slickCarousel.jsx';
import FrontContainer from './components/frontPageContainer.js';

class FrontPage extends Component{

	render(){
		return(
			<div>
				<SimpleSlider pageFunctions={this.props.pageFunctions}/>
				<FrontContainer pageFunctions={this.props.pageFunctions}/>
			</div>
			);
	}

}
export default FrontPage;