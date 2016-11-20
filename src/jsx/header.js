import React, {Component} from 'react';

import FrontPage from './frontPage/frontPage.js';
import AboutPage from './about/aboutPage.js';
import TeamPage from './teamPage/teamPage.js';
import ContactPage from './contactPage/contactPage.js';
import PicturePage from './photoPage/picturePage.js';
import ContributorPage from './contributors/contributors.js';
import SponsorshipPage from './sponsorshipPage/sponsorshipPage.js';


class Header extends Component{
	

	 constructor(){
	    super();
	    this.state={selected: 0};
	    this.selectHome=this.selectHome.bind(this);
	    this.selectAbout=this.selectAbout.bind(this);
	    this.selectTeamProf=this.selectTeamProf.bind(this);
	    this.selectContact=this.selectContact.bind(this);
	    this.selectPicture=this.selectPicture.bind(this);
	    this.selectContributors=this.selectContributors.bind(this);
	    this.selectSponsors=this.selectSponsors.bind(this);
	    this.reRenderStates=this.reRenderStates.bind(this);
	    this.arrayOfFunctions=[
	    this.selectHome,
	    this.selectAbout,
	    this.selectTeamProf,
	    this.selectContact,
	    this.selectPicture,
	    this.selectContributors
	    ];


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

	  selectPicture(){
	  	this.setState({selected: 4});
	  }

	  selectContributors(){
	  	this.setState({selected: 5});
	  }

	  selectSponsors(){
	  	this.setState({selected: 6});
	  }

	  reRenderStates(){
	    switch(this.state.selected){
	      case 0: return <FrontPage pageFunctions={this.arrayOfFunctions}/>
	      case 1: return <AboutPage pageFunctions={this.arrayOfFunctions}/>
	      case 2: return <TeamPage pageFunctions={this.arrayOfFunctions}/>
	      case 3: return <ContactPage pageFunctions={this.arrayOfFunctions}/>
	      case 4: return <PicturePage pageFunctions={this.arrayOfFunctions}/>
	      case 5: return <ContributorPage pageFunctions={this.arrayOfFunctions}/>
	      case 6: return <SponsorshipPage />
	      default:  return <FrontPage pageFunctions={this.arrayOfFunctions}/>
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
			                    <li onClick={this.selectPicture}>	{/*className="dropdown"*/}
			                        <a href="#" >Projects</a> {/*className="dropdown-toggle" data-toggle="dropdown"  <b className="caret"></b> */}
			                        {/*<ul className="dropdown-menu">
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
			                        </ul>*/}
			                    </li>
			                    {/*<li className="dropdown">
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
			                    </li>*/}
			                    <li className="dropdown">
			                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Our Contributors <b className="caret"></b></a>
			                         <ul className="dropdown-menu">
			                            <li onClick={this.selectSponsors}>
			                                <a href="#">Our Sponsors</a>
			                            </li>
			                            <li onClick={this.selectContributors}>
			                                <a href="#">Special Thanks</a>
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