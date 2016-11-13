import React, {Component} from 'react';
import SimpleSlider from './components/slickCarousel.jsx';
import FrontContainer from './components/frontPageContainer.js';

class FrontPage extends Component{

	render(){
		return(
			<div>
				<SimpleSlider/>
				<FrontContainer onClick={this.props.pageFunctions[1]}/>
			</div>
			);
	}

}
export default FrontPage;