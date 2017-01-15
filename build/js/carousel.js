import React, {Component} from 'react';

class Carousel extends Component{
	
	render(){
		var pornHubImageURL='http://newscult.com/wp-content/uploads/2016/03/pornhub-logo.jpg';
		var pornHubBanner={backgroundImage:'url('+ pornHubImageURL +')'}
		var carImageURL= 'http://i41.tinypic.com/2mq7ww4.jpg';
		var carBanner={backgroundImage:'url('+ carImageURL+')'}

		return(
			
			    <header id="myCarousel" className="carousel slide">
			        <ol className="carousel-indicators">
			            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
			            <li data-target="#myCarousel" data-slide-to="1"></li>
			            <li data-target="#myCarousel" data-slide-to="2"></li>
			        </ol>

			        <div className="carousel-inner">
			            <div className="item active">
			                <div className="fill" style={carBanner}></div>
			                <div className="carousel-caption">
			                    <h2>  See Whats In Store This Year</h2>
			                </div>
			            </div>
			            <div className="item" >
			                <a href="http://www.mountaindew.com/">
			                <div className="fill" style={pornHubBanner}></div>
			                <div className="carousel-caption">
			                    <h2><font color="white">Our Sponsors </font></h2>
			                </div>
			                </a>
			            </div>
			            <div className="item">
			                <a href=""></a>
			               <div className="carousel-caption">
			                     <h2><font color="Blue">Team Members </font></h2>
			                </div>
			            </div>
			        </div>

			        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
			            <span className="icon-prev"></span>
			        </a>
			        <a className="right carousel-control" href="#myCarousel" data-slide="next">
			            <span className="icon-next"></span>
			        </a>
		    </header>
		
		);
	}

}
export default Carousel;