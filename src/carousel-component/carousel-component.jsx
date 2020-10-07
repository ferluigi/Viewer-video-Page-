import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import './carousel-styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const Carousel = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
      <div className="carousel">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={3500}
        >
          <div data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
          <div data-src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" />
          <div data-src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
        
        </AutoplaySlider>
      </div>
    );
}
export default Carousel;
