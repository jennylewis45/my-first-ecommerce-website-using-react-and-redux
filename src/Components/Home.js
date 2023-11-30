import React from 'react';
import './style.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../images/img.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img10 from '../images/img10.jpg'
import img0 from '../images/img0.jpg'
import img66 from '../images/img66.jpg'
import shoe1 from '../images/shoe1.jpg'
import shoe2 from '../images/shoe2.webp'
import shoe3 from '../images/shoe3.jpg'
import shoe4 from '../images/shoe4.jpg'
import shoe5 from '../images/shoe5.jpg'













const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed as needed
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      <Slider {...sliderSettings}>
        {/* Slides go here */}
        <div>
          <img
            src={img}
            alt="Product 1"
          />
        </div>
        <div>
          <img
            src={img}
            alt="Product 2"
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Product 3"
          />
        </div>
        <div>
          <img
            src={img4}
            alt="Product 4"
          />
        </div>
        <div>
          <img
            src={img5}
            alt="Product 5"
          />
        </div>
      </Slider>

     

      <section className="additional-images">
  <h2>Explore Our T-Shirts Collection</h2>
  <div className="image-grid">
    <img
      src={img7}
      alt="Image 1"
      className="image"
    />
    <img
      src={img10}
      alt="Image 2"
      className="image"
    />
    <img
      src={img0}
      alt="Image 3"
      className="image"
    />
    <img
      src={img6}
      alt="Image 4"
      className="image"
    />
     <img
      src={img66}
      alt="Image 4"
      className="image"
    />
  </div>
</section>

<br /><br />

<section className="additional-images">
  <h2>Explore Our Shoes Collection</h2>
  <div className="image-grid">
    <img
      src={shoe1}
      alt="Image 1"
      className="image"
    />
    <img
      src={shoe2}
      alt="Image 2"
      className="image"
    />
    <img
      src={shoe3}
      alt="Image 3"
      className="image"
    />
    <img
      src={shoe4}
      alt="Image 4"
      className="image"
    />
     <img
      src={shoe5}
      alt="Image 4"
      className="image"
    />
  </div>
</section>

      
      
    </div>
  );
};

export default Home;
