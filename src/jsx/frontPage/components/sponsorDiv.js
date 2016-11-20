import React,{Component} from 'react';

class SponsorDiv extends Component{
               
    render(){
        return(
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
        );
    }
}

export default SponsorDiv;