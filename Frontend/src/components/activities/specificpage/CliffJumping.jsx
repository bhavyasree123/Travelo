import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaShower } from "react-icons/fa";
import { FaToilet } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { FaWineGlassAlt } from "react-icons/fa";
import { AiOutlineAreaChart } from "react-icons/ai";

import moment from "moment";

export default function CliffJumping() {
  // const [price, setPrice] = useState("");
  return (
    <Section id="sectionContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1497470888337-ded683b67494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="cliffjumping"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1500795894050-02f2a3c64487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="cliffjumping"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1596648140488-06518008ab66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80"
            alt="cliffjumping"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1625427229409-2b6ecda65951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="cliffjumping"
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
            Offering 180-degree-views of the tourquise ganga river, this luxury
            campsite is one of its kind in Rishikesh. Immerse yourself in the
            swimming pool and rejuvenate yourself with stunning views of
            Garhwali Himalayas. The campsite also features a restaurant that
            serves lip-smacking and hygienic delicacies in the buffet system.
            Once you arrive at the camp, a traditional drink is ready for your
            welcome. After some briefing by the guide, lunch will be served.
            Take some rest here to boost your energy level high and head for
            various activities like riverside trails, trekking, cliff jumping.
            In the evening on returning to the campsite enjoy a crackling
            bonfire with a healthy meal. Explore the flora and fauna with a
            guided nature walk early morning, and head out for your thrilling
            rafting adventure!
          </p>
        </div>

        <br></br>
        <br></br>
        <div className="content">
          <h1 className="title"> Amenties </h1>
          <p className="para">
            Shower <FaShower /> , Toilet <FaToilet /> , Covered Area
            <AiOutlineAreaChart /> , Drinking Water <FaWineGlassAlt />
          </p>
        </div>
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
