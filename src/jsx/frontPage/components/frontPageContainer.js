import React, {Component} from 'react';
import Footer from '../../Footer/footer.js';
class FrontContatiner extends Component{
    
    constructor(props){
        super(props);
        this.updateAbout = this.updateAbout.bind(this);
    }

    updateAbout(){

    }

    render(){
        return(
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Welcome to Formula Electric
                        </h1>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><i className="fa fa-fw fa-check"></i> Want to join!</h4>
                            </div>
                            <div className="panel-body">
                                <p>Potential Team Member Info Here</p>
                                <a href="#" onClick = {this.props.pageFunctions[1]} className="btn btn-default">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><i className="fa fa-fw fa-gift"></i> Free &amp; Open Source</h4>
                            </div>
                            <div className="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?</p>
                                <a href="#" className="btn btn-default">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4><i className="fa fa-fw fa-compass"></i> Easy to Use</h4>
                            </div>
                            <div className="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?</p>
                                <a href="#" className="btn btn-default">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="sponsorHeader">
                    <div className="col-lg-12">
                        <h2 className="page-header">Thanks To Our Sponsors</h2>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <a href="http://grided.epri.com/">
                            <img className="img-responsive img-portfolio img-hover" src="http://grided.epri.com/Images/GridEd_930x300.jpg" alt=""></img>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <a href="http://www.altium.com/">
                            <img className="img-responsive img-portfolio img-hover" src="http://www.altium.com/resources/images/media-release/altium_logo.jpg" alt=""></img>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <a href="portfolio-item.html">
                            <img className="img-responsive img-portfolio img-hover" src="https://mran.revolutionanalytics.com/assets/img/MSFT_logo_rgb_C-Gray.3b156229.png" alt=""></img>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <a href="portfolio-item.html">
                            <img className="img-responsive img-portfolio img-hover" src="http://placehold.it/700x450" alt=""></img>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <a href="portfolio-item.html">
                            <img className="img-responsive img-portfolio img-hover" src="http://placehold.it/700x450" alt=""></img>
                        </a>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <a href="portfolio-item.html">
                            <img className="img-responsive img-portfolio img-hover" src="http://placehold.it/700x450" alt=""></img>
                        </a>
                    </div>
                </div>

                {/*<div className="row">
                    <div className="col-lg-12">
                        <h2 className="page-header">Modern Business Features</h2>
                    </div>
                    <div className="col-md-6">
                        <p>The Modern Business template by Start Bootstrap includes:</p>
                        <ul>
                            <li><strong>Bootstrap v3.3.7</strong>
                            </li>
                            <li>jQuery v1.11.1</li>
                            <li>Font Awesome v4.2.0</li>
                            <li>Working PHP contact form with validation</li>
                            <li>Unstyled page elements for easy customization</li>
                            <li>17 HTML pages</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-responsive" src="http://placehold.it/700x450" alt=""></img>
                    </div>
                </div>

                <hr></hr>

                <div className="well">
                    <div className="row">
                        <div className="col-md-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
                        </div>
                        <div className="col-md-4">
                            <a className="btn btn-lg btn-default btn-block" href="#">Call to Action</a>
                        </div>
                    </div>
                </div>*/}

                <hr></hr>
                <Footer/>
            </div>
        );
    }
}
export default FrontContatiner;