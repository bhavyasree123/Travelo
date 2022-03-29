import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaWalking } from "react-icons/fa";
import { GiMountainCave } from "react-icons/gi";
import moment from "moment";

export default function ZipLining() {
  // const [price, setPrice] = useState("");
  return (
    <Section id="sectionContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://www.choicehotels.com/cms/images/choice-hotels/pace/hero-explore-zip-lining-locations-ziplining/hero-explore-zip-lining-locations-ziplining.jpg"
            alt="ziplining"
          />
        </div>

        <div className="image">
          <img
            src="https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.newyorkupstate.com/home/nyup-media/width2048/img/outdoors/photo/2015/06/13/zip-lining-at-hunter-mountain-in-the-catskills-7d227ecd15cd18be.jpg"
            alt="ziplining"
          />
        </div>
        <div className="image">
          <img
            src="https://traveler.marriott.com/wp-content/uploads/2018/02/zipline.jpg"
            alt="ziplining"
          />
        </div>
      </Carousel>
      {/* Content start */}
      <div className="background">
        <div className="content">
          <br></br>
          <br></br>
          <h1 className="title"> Description</h1>
          <p className="para">
            A zip-line, zip line, zip-wire, or flying fox is a pulley suspended
            on a cable, usually made of stainless steel, mounted on a slope. It
            is designed to enable cargo or a person propelled by gravity to
            travel from the top to the bottom of the inclined cable by holding
            on to, or being attached to, the freely moving pulley. It has been
            described as essentially a Tyrolean traverse that engages gravity to
            assist its speed of movement. Its use is not confined to adventure
            sport, recreation, or tourism, although modern-day usage tends to
            favor those meanings.
          </p>
        </div>

        <br></br>
        <br></br>
      </div>
      {/* Content End */}
      <br></br>
      <br></br>
      {/* Booking */}

      <div className="container">
        <h1>Select Camping Dates</h1>
        <h4>Check In {moment(new Date()).format("MMMM Do YYYY")} </h4>

        <h4>Check Out {moment(new Date()).format("MMMM Do YYYY")}</h4>
      </div>
      {/* Booking End */}
    </Section>
  );
}

const Section = styled.section`

 
  .carousel {
    display: flex;
    justify-content: center;
    
  }
  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    // background: #595f5f;
  }
 
  .carousel .carousel-status{
    display:none;
  }

  .carousel .thumb {
    display: none;
  }

  .carousel .slider {
    background-size: cover;
    height: 80vh;
    border-radius: 25px;
  }
  .carousel .slide img {
    max-height: 100%;
    // width: auto;
  }
  .image {
    // height: 100%;
    // width: auto;
  }
  .background {
    background-color:;
    border-radius: 15px;
  }

  .content {
    display: grid;
    gap: 3rem;
    padding: 0 3rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #8338ec14;

    // background-image: url("https://t4.ftcdn.net/jpg/03/10/16/27/360_F_310162798_6hWbaSFgDtWp4AhhaKPlTgAZUDL1c4UY.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    border-radius: 1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
    }
    .title {
      text-transform: uppercase;
      justify-content: center;
      color: black;
      font-family:'Lato',sans-serif;
      font-weight:bold;
      
    }
    .para {
      margin: 30px;
      // text-indent: 50px;
      text-align: justify;
      letter-spacing: 0.7px;
      color: black;
      font-family: 'Lato', sans-serif;
      line-height:1.5rem;
    }
  }

  .container {
    // Booking styling
    text-align:center;
  }


  //Responsive
  @media all and (max-width: 1024px) {
    .carousel .slide img {
     width:auto;
    }
    @media all and (max-width:425px) {
      .carousel .slider {
       height: 35vh;
      }
      .carousel .slide img {
        max-height: 100%;
        width: 100%;
      }
      .content .para{
        // letter-spacing: 1px;

      }
      @media all and (max-width:375px) {
        .carousel .slider {
      height: 30vh;
        
        }
        .carousel .slide img {
          max-height: 100%;
          width: 100%;
        }
        @media all and (max-width:320px) {
          .carousel .slider {
        height: 25vh;
          
          }
          .carousel .slide img {
            max-height: 100%;
            width: 100%;
          }
`;
