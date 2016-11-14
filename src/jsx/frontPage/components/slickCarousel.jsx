var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {

 
    
    var settings = {

      accessibility:true,
      autoplay: true,
      autoplaySpeed: 60000,
      dots: true,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true
    };

    return (
      <Slider {...settings}>
          <div  className="esriDiv">
            Our Sponsors
          </div>
        
        <div className="carDiv" onClick={this.props.pageFunctions[4]}>
             See Whats In Store This Year
        </div>
        <a href="https://electrek.co/2016/06/14/all-new-cars-mandated-electric-germany-2030/">   
          <div className="germanNews">
               Germany Mandates Electric Cars!
          </div>
        </a>

    </Slider>
    );
  }
});
export default SimpleSlider;