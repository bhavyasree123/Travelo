import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import {Gi3DGlasses  } from "react-icons/gi";
import "react-datepicker/dist/react-datepicker.css";

export default function Exhibition() {
  return (
    <Section id="sectionContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2021/12/03080126/9cd685c2-502e-11ec-b4f2-deefa8af42fb_1638092778486-1568x882.jpg"
            alt="exhibition"
          />
        </div>
        <div className="image">
          <img
            src="https://imgmedia.lbb.in/media/2019/12/5e05c38f0a9ea7689cac6ecc_1577436047804.JPG"
            alt="exhibition"
          />
        </div>
        <div className="image">
          <img
            src="https://www.thedivineindia.com/img/trade-fair.jpg"
            alt="exhibition"
          />
        </div>
        <div className="image">
          <img
            src="https://cdn.i-scmp.com/sites/default/files/styles/og_twitter_scmp_analysis/public/d8/images/methode/2019/05/21/73b26fd8-7b8f-11e9-8126-9d0e63452fe9_image_hires_151809.jpg?itok=FIEMSQb1&v=1558423097"
            alt="exhibition"
          />
        </div>
      </Carousel>
      {/* Content start */}
      <div className="background">
        <div className="content">
          <br></br>
          <br></br>
          <h1 className="title"> Description :-</h1>
          <p className="para">
            Trade shows are temporary events in different recurring intervals
            where new products and services are presented. The number of trade
            fairs is steadily increasing worldwide; therefore it is important
            for exhibitors and visitors to get a quick overview and find the
            right trade shows for themselves. With this platform, Sima Media
            offers a fast and detailed way to search for exhibitions by name,
            venue, date, industry and services. A wide range of trade fair
            suppliers can be found in our exhibition service provider database.
            In addition, we provide the booking of exhibition hotels and
            information on a wide range of attractions in many major
            international exhibition cities.
          </p>
        </div>

        <br></br>
        <br></br>
        <div className="content">
          <h1 className="title"> About the activity : - </h1>
          <p className="para">
          On the website TradeFairDates people can see a list of fairs and exhibitions from all over the world which are sorted by the exhibiting companiesâ€™ industries and fields of activity. With more than 420 exhibition sectors being listed in this outline, you will get an overview of the most important dates and venues. Especially today, fairs are an essential tool for product presentation. Due to the growing diversity and the increasing need for explanations of products, nowadays a fair has a multifunctional character that goes beyond the mere product sale. Thanks to the selection of fairs sorted by branches, you will find exhibitions of all kinds of industries – from the agricultural show to the motorcycle show. <br></br>
            <br></br>
            Day 1 - Arrive at Exhibition site <br></br>
            <br></br>1. As you arrive at Exhibition site you’ll be required to
            complete-check-in formalities <br></br> 2. Make yourselves comfortable at the accommodation provided to you. 
            <br></br> 3. Enjoy the attraction places nearby<br></br>{" "}
            4. The first day at the camp will end with light music and dinner
            <br></br>
            <br></br>
            Day 2 - Attending Exhibitions and Return<br></br>
            <br></br>
            1. After breakfast this morning, you will be reaching at the
            gallaries .<br></br>
            2. After safety instructions and gear check, you will begin your
            entry passes and takes about 35 to 45 minutes to complete.<br></br>
            3. You will get the entry<br></br>
            4. Enjoy the exhibition<br></br>
          </p>
        </div>
        <div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Advisory</h1>
            <p className="para">
              1. A valid enrty pass is required to enter and participate inthe trade fairs/ exhibition.
            <br></br>
              2. Due process for custom clearance should be followed, through agencies recommended by the organizers, in order to ensure that the products/exhibits reach the venue well in time.<br></br>
              3.  Efforts should be made to reach out to potential customers and business partners before and during the trade fair/ exhibitions through B2B/ B2C platforms. <br></br>
              4. These could be coordinated through the organizers or the relevant Industry Association coordinating the Indian participation in the event<br></br>
              5. The package is exclusive of any en-route or personal expenses,
              videography and photography of the flight.<br></br>
              6. ID proof is mandatory for each individual guest at the time of
              booking, and also upon arrival. PAN card will not be considered as
              a valid address proof.<br></br>
              7. The number of guests must not exceed the count mentioned at the
              time of booking.<br></br>
              8.Guidelines issued by the State-Government is to be followed.
              Social distancing to be maintained. Frequent hand sanitization and
              use of mask recommended.<br></br>
            </p>
          </div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Accommodation</h1>
            <p className="para">
              Hotels 
              {/* <Gi3DGlasses /> */}
            </p>
          </div>
        </div>
      </div>
      {/* Content End */}
      <br></br>
      <br></br>
    </Section>
  );
}

const Section = styled.section`
padding-top:6rem;

  .carousel {
    display: flex;
    justify-content: center;
    
  }
  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    // background: #595f5f;
  }
  
  .slider-wrapper {
    transition-duration:600ms;
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
    // background-color: #f2f2f2;
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


  //Bookings start
 .container{
  font-family: 'Lato', sans-serif;
  line-height:1.5rem;
   text-align:center;
  float:center;
  background-color: #e6ffff;
  border-radius: 1rem;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
    
  }

 }
   .table {
     padding:15px 15px;
     margin:auto;
     table-layout:fixed;
     width: fit-content;
 }

 .heading {
   background-color:#ffff66;
   border:none;
   border-radius:15px;
  
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    border:none;
  }

  .btn{
    margin:3px;
    padding:5px;
 
  
  }
  //date start

  input {
    padding:4px;
    margin-top:13px;
    text-align:center;
  }

  .react-datepicker-wrapper {
   width:35%;
  }
  //date end
  
  .booking {
      padding: 10px 15px;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      outline: none;
      color: #fff;
      background-color: #4caf50;
      border: none;
      border-radius: 15px;
      box-shadow: 0 9px #99;
      
  }
  //Bookings End

  //Responsive

  @media all and (max-width: 1024px) {
    padding-top:4rem;

    .carousel .slide img {
     width:auto;
    }
    @media all and (max-width:425px) {
      padding-top:4rem;

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
