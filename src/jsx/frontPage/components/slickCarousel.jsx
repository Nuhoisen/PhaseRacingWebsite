var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {

 
    
    var settings = {

      accessibility:true,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true
    };

    return (
      <Slider {...settings}>
          <div  className="esriDiv">
            Our Sponsors
          </div>
        
        <div className="carDiv">
             See Whats In Store This Year
        </div>
        <div><h3>3</h3></div>
      </Slider>
    );
  }
});
export default SimpleSlider;