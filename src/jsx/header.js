import React, {Component} from 'react';

import FrontPage from './frontPage/frontPage.js';
import AboutPage from './about/aboutPage.js';
import TeamPage from './teamPage/teamPage.js';
import ContactPage from './contactPage/contactPage.js';

class Header extends Component{
	

	 constructor(){
	    super();
	    this.state = {selected: 0};
	    this.selectHome=this.selectHome.bind(this);
	    this.selectAbout=this.selectAbout.bind(this);
	    this.selectTeamProf=this.selectTeamProf.bind(this);
	    this.selectContact = this.selectContact.bind(this);


	    this.reRenderStates = this.reRenderStates.bind(this);
	  }

	  selectHome(){
	    this.setState({selected: 0});
	  }

	  selectAbout(){
	    this.setState({selected: 1});
	  }

	  selectTeamProf(){
	    this.setState({selected: 2});
	  }

	  selectContact(){
	  	this.setState({selected: 3});
	  }

	  reRenderStates(){
	    switch(this.state.selected){
	      case 0: return <FrontPage/>
	      case 1: return <AboutPage/>
	      case 2: return <TeamPage/>
	      case 3: return <ContactPage/>
	    }
	  }

	

	render(){
		return (
		<div>	
			<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
	        	<div className="container">
					<a href = "#">
						<div className="navbar-header" onClick={this.selectHome}>
			                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			                    <span className="sr-only">Toggle navigation</span>
			                    <span className="icon-bar"></span>
			                    <span className="icon-bar"></span>
			                    <span className="icon-bar"></span>
			                </button>
			                <div className="navbar-brand" >Formula Electric</div>
			            </div>
			        </a>
			        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			                <ul className="nav navbar-nav navbar-right">
		                        <li onClick={this.selectAbout}>
	                        		<a href="#">About</a>
	                        	</li>
		                    	<li onClick={this.selectTeamProf}>
		                    		<a href="#">Team</a>		                    		
	                    		</li>
			                    
			                    <li onClick={this.selectContact}>
			                        <a href="#">Contact</a>
			                    </li>
			                    <li className="dropdown">
			                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pictures <b className="caret"></b></a>
			                        <ul className="dropdown-menu">
			                            <li>
			                                <a href="portfolio-1-col.html">1 Column Portfolio</a>
			                            </li>
			                            <li>
			                                <a href="portfolio-2-col.html">2 Column Portfolio</a>
			                            </li>
			                            <li>
			                                <a href="portfolio-3-col.html">3 Column Portfolio</a>
			                            </li>
			                            <li>
			                                <a href="portfolio-4-col.html">4 Column Portfolio</a>
			                            </li>
			                            <li>
			                                <a href="portfolio-item.html">Single Portfolio Item</a>
			                            </li>
			                        </ul>
			                    </li>
			                    <li className="dropdown">
			                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog <b className="caret"></b></a>
			                        <ul className="dropdown-menu">
			                            <li>
			                                <a href="blog-home-1.html">Blog Home 1</a>
			                            </li>
			                            <li>
			                                <a href="blog-home-2.html">Blog Home 2</a>
			                            </li>
			                            <li>
			                                <a href="blog-post.html">Blog Post</a>
			                            </li>
			                        </ul>
			                    </li>
			                    <li className="dropdown">
			                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Archives <b className="caret"></b></a>
			                        <ul className="dropdown-menu">
			                            <li>
			                                <a href="full-width.html">January</a>
			                            </li>
			                            <li>
			                                <a href="full-width.html">February</a>
			                            </li>
			                            <li>
			                                <a href="full-width.html">March</a>
			                            </li>
			                            <li>
			                                <a href="full-width.html">April</a>
			                            </li>
			                            <li>
			                                <a href="full-width.html">May</a>
			                            </li>
			                            <li>
			                                <a href="full-width.html">June</a>
			                            </li>
			                            <li>
			                                <a href="full-width.html">July</a>
			                            </li>
			                            <li>
			                                <a href="full-width.html">August</a>
			                            </li>
			                            <li>
			                                <a href="full-width.html">September</a>
			                            </li>
			                            <li>
			                                <a href="full-width.html">October</a>
			                            </li>
			                            <li>
			                                <a href="full-width.html">November</a>
			                            </li>
			                            <li>
			                                <a href="full-width.html">December</a>
			                            </li>
			                        </ul>
			                    </li>
			                </ul>
		            	</div> 
		        	</div> 
	        	</nav>
	        	{this.reRenderStates()}
    		</div>  

		);
	}
}

export default Header;