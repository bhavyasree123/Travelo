import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaHotel } from "react-icons/fa";

import moment from "moment";

export default function MountainBiking() {
  // const [price, setPrice] = useState("");
  return (
    <Section id="sectionContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1548360046-aedb7ed40838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="biking"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1518215676614-b999b8bf7432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
            alt="biking"
          />
        </div>

        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1559680343-d8ac0cec3859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
            alt="biking"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1511264568880-afe3b1951e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="biking"
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
            Mountain biking is a sport of riding bicycles off-road, often over
            rough terrain, usually using specially designed mountain bikes.
            Mountain bikes share similarities with other bikes but incorporate
            features designed to enhance durability and performance in rough
            terrain, such as air or coil-sprung shocks used as suspension,
            larger and wider wheels and tires, stronger frame materials, and
            mechanically or hydraulically actuated disc brakes. Mountain biking
            can generally be broken down into five distinct categories: cross
            country, trail riding, all mountain (also referred to as "Enduro"),
            downhill, and free ride.
          </p>
        </div>

        <br></br>
        <br></br>
        <div className="content">
          <h1 className="title"> About the activity </h1>
          <p className="para">
            Day 1 - Benefits you'll get from Mountain Biking<br></br>
            <br></br>
            1. Whole-body muscle work out
            <br></br>
            2.(Joint health)Whether you ride at high-intensity or low-intensity,
            any time spent on your bike could take inches off your waistline.
            You can burn 600-800 calories an hour while riding, more if you’re
            at high-intensity. <br></br>
            3.As well as working out your muscles you’ll be using all of your
            joints, keeping them working better for longer. <br></br>
            4.In the evening, you will be served tea and snacks, followed by a
            singing and dancing activity around the bonfire.<br></br>
            5.( Bigger, better appetite)Mountain biking will increase your
            appetite, and with the calories you’ve burned, you can safely serve
            up an extra-large portion – just remember to eat your greens.
            <br></br>
            <br></br>
          </p>
        </div>
        <div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Things we provide</h1>
            <p className="para">
              1. Spare tubes (Two) ,<br></br> 2. Patch kit <br></br> 3. Tire
              pump <br></br> 4. Multi-tool <br></br> 5. Tire lever <br></br>6.
              Chain lube <br></br> 7. Lip balm ,Sunscreen <br></br>8. Packable
              rain jacket <br></br>9. First-aid kit<br></br>
              10. Derailleur hanger<br></br> 11. Master link <br></br>12.
              Chainring bolt
              <br></br> 13. Zip-ties <br></br>14. Spare spoke with nipple
              <br></br> 15. Small but bright headlight <br></br>16. Tool roll or
              pouch
            </p>
          </div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Accommodation</h1>
            <p className="para">
              Hotel <FaHotel />
            </p>
          </div>
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
