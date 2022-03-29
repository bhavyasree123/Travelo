import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaWalking } from "react-icons/fa";
import { GiMountainCave } from "react-icons/gi";
import moment from "moment";

export default function Hiking() {
  // const [price, setPrice] = useState("");
  return (
    <Section id="sectionContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="hiking"
          />
        </div>

        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1623945619536-63f2cd1bad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="hiking"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1444405406630-ac78b6e0b1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80"
            alt="hiking"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1559680343-d8ac0cec3859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
            alt="hiking"
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
            Hiking is a long, vigorous walk, usually on trails or footpaths in
            the countryside. Walking for pleasure developed in Europe during the
            eighteenth century. Religious pilgrimages have existed much longer
            but they involve walking long distances for a spiritual purpose
            associated with specific religions.
          </p>
        </div>

        <br></br>
        <br></br>
        <div className="content">
          <h1 className="title"> About the activity </h1>
          <p className="para">
            Day 1 - Adventure Activities Day<br></br>
            <br></br>
            1.Reach campsite in Manali on your own.<br></br>
            2.Drop your bags at the campsite and enjoy the activities arranged
            for you at the camp.<br></br>
            3.The guide will take you for hiking which will take around 1.5
            hours.<br></br>
            4.In the evening, you will be served tea and snacks, followed by a
            singing and dancing activity around the bonfire.<br></br>
            5.Dinner and overnight in the riverside camp with attached washroom.
            <br></br>
            <br></br> <br></br>
            Day 2 - Rafting, Paragliding and Return<br></br>
            <br></br>
            1.After breakfast this morning, you will be reaching at the starting
            point of your rafting this morning in Kullu.<br></br>
            2.After safety instructions and gear check, you will begin your
            rafting expedition on the river which is 7 km long and takes about
            35 to 45 minutes to complete.<br></br>
            3.Next, go to the site where paragliding begins to start another
            adventure (can be arranged at an additional cost).<br></br>
            4.Fly high above the valley and observe the Beas river and Kullu
            Valley at their scenic best.<br></br>
            5.Reach Manali Camps and pack up your bags.<br></br>
            6.You will be checking out of the camps to bring the experience to
            an end.<br></br>
          </p>
        </div>
        <div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Things to Carry</h1>
            <p className="para">
              1.Thrillophilia voucher (can present mobile voucher)<br></br>{" "}
              2.Valid ID proof for each member<br></br> 3.Personal toiletries
              and medication (if any)<br></br> 4.Warm and comfortable clothes
              <br></br> 5.Slippers and comfortable shoes <br></br>6.Water
              bottles, backpack, energy bars/snacks, etc.<br></br>
              7.Mosquito & insect repellent<br></br> 8.Sunscreen lotion<br></br>{" "}
              9.Sunglasses<br></br>
              10.Binoculars <br></br>11.Camera <br></br>12.Flashlight (with
              spare batteries)<br></br>
            </p>
          </div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Accommodation</h1>
            <p className="para">
              Trekking <FaWalking /> , Climbing <GiMountainCave />
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
