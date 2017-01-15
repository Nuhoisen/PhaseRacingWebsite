import React, {Component} from 'react';

class Header extends Component{
	render(){
		return (
		<div>	
			<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
	        	<div className="container">
					<div className="navbar-header">
		                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		                    <span className="sr-only">Toggle navigation</span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                    <span className="icon-bar"></span>
		                </button>
		                <a className="navbar-brand" href="index.html">Formula Electric</a>
		            </div>
			        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			                <ul className="nav navbar-nav navbar-right">
			                    <li>
			                        <a href="about.html">About</a>
			                    </li>
			                    <li>
			                        <a href="TeamProfile.html">Team</a>
			                    </li>
			                    <li>
			                        <a href="contact.html">Contact</a>
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
    		</div>  	
		);
	}
}

export default Header;