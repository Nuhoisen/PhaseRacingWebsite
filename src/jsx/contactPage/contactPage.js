import React, { Component } from 'react';
import Footer from '../Footer/footer.js';


class ContactPage extends Component {
	
	render(){
		return(
			<div className="container">
		        <div className="row">
		            <div className="col-lg-12">
		                <h1 className="page-header">Contact
		                </h1>
		                <ol className="breadcrumb">
		                    <li><a href="index.html">Home</a>
		                    </li>
		                    <li className="active">Contact</li>
		                </ol>
		            </div>
		        </div>
		        
		        <div className="row">
		            <div className="col-md-8">
		                <iframe width="100%" height="400px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
		            </div>
		            <div className="col-md-4">
		                <h3>Contact Details</h3>
		                <p>
		                    Dustin Henderson<br/>
		                    Oregon Tech<br/>
		                    Klamath Falls, Oregon 97601<br/>
		                </p>
		                <p><i className="fa fa-phone"></i> 
		                    <abbr title="Phone">P</abbr>: (123) 420-Blaz</p>
		                <p><i className="fa fa-envelope-o"></i> 
		                    <abbr title="Email">E</abbr>: <a href="oitphaseracing@gmail.com">oitphaseracing@gmail.com</a>
		                </p>
		                <p><i className="fa fa-clock-o"></i> 
		                    <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM</p>
		                <ul className="list-unstyled list-inline list-social-icons">
		                    <li>
		                        <a href="#"><i className="fa fa-facebook-square fa-2x"></i></a>
		                    </li>
		                    <li>
		                        <a href="#"><i className="fa fa-linkedin-square fa-2x"></i></a>
		                    </li>
		                    <li>
		                        <a href="#"><i className="fa fa-twitter-square fa-2x"></i></a>
		                    </li>
		                    <li>
		                        <a href="#"><i className="fa fa-google-plus-square fa-2x"></i></a>
		                    </li>
		                </ul>
		            </div>
		        </div>
		        
		        <div className="row">
		            <div className="col-md-8">
		                <h3>Send us a Message</h3>
		                <form name="sentMessage" id="contactForm"  action="mailto:kellyhonsing@gmail.com" method="post" enctype="text/plain" >
		                    <div className="control-group form-group">
		                        <div className="controls">
		                            <label>Full Name:</label>
		                            <input type="text" className="form-control" name="name" id="name" required data-validation-required-message="Please enter your name."/>
		                            <p className="help-block"></p>
		                        </div>
		                    </div>
		                    <div className="control-group form-group">
		                        <div className="controls">
		                            <label>Phone Number:</label>
		                            <input type="tel" className="form-control" name="phone" id="phone" required data-validation-required-message="Please enter your phone number."/>
		                        </div>
		                    </div>
		                    <div className="control-group form-group">
		                        <div className="controls">
		                            <label>Email Address:</label>
		                            <input type="email" className="form-control" name="email" id="email" required data-validation-required-message="Please enter your email address."/>
		                        </div>
		                    </div>
		                    <div className="control-group form-group">
		                        <div className="controls">
		                            <label>Message:</label>
		                            <textarea rows="10" cols="100" className="form-control" name="message" id="message" required data-validation-required-message="Please enter your message" maxLength="999" ></textarea>
		                        </div>
		                    </div>
		                    <div id="success"></div>
		                    <button type="submit" className="btn btn-primary">Send Message</button>
		                </form>
		            </div>

		        </div>

		        <hr></hr>
		        <Footer/>
		    </div>	
		);

	}
}
export default ContactPage;