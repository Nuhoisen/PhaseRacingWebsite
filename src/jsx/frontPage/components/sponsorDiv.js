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
                        <img className="img-responsive img-portfolio img-hover" src="/images/sponsorPhotos/GridEd.jpg" alt=""></img>
                    </a>
                </div>
                <div className="col-md-4 col-sm-6">
                    <a href="http://www.altium.com/">
                        <img className="img-responsive img-portfolio img-hover" src="/images/sponsorPhotos/altium.jpg" alt=""></img>
                    </a>
                </div>
                <div className="col-md-4 col-sm-6">
                    <a href="https://www.microsoft.com/en-us/">
                        <img className="img-responsive img-portfolio img-hover" src="/images/sponsorPhotos/microsoft.png" alt=""></img>
                    </a>
                </div>
                
            </div>
        );
    }
}

export default SponsorDiv;