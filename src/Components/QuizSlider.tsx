import React from 'react';
import Slider from "react-slick";
import SliderItem from './SliderItem';

const QuizSlider: React.FC = () => {

   const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      variableWidth: true,
      afterChange: function(index : number) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };

  return (
    <div>
         
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <SliderItem/>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
  )
}

export default QuizSlider