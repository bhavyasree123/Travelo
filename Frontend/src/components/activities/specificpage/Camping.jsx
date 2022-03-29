import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { GiCampingTent } from "react-icons/gi";
import { GiTreehouse } from "react-icons/gi";
import moment from "moment";

export default function Camping() {
  // const [price, setPrice] = useState("");
  return (
    <Section id="sectionContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="camp"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="camp"
          />
        </div>
        <div className="image">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5fc11934ca70014f79b8b2c8/0x0.jpg?format=jpg&width=1200&fit=bounds"
            alt="camp"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1502218808493-e5fd26249efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="camp"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1536646506670-821b8a6bbbca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="camp"
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
            Camping is an outdoor activity involving overnight stays away from
            home, either without shelter or using basic shelter such as a tent
            or a recreational vehicle. Typically participants leave developed
            areas to spend time outdoors in more natural ones in pursuit of
            activities providing them enjoyment or an educational experience.
            The night (or more) spent outdoors distinguishes camping from
            day-tripping, picnicking, and other similarly short-term
            recreational activities.
          </p>
        </div>

        <br></br>
        <br></br>
        <div className="content">
          <h1 className="title"> About the activity : - </h1>
          <p className="para">
            With abounding nature and breathtaking views of Dhauladhar ranges,
            this camp offers the perfect retreat a camper seeks for. - Relish
            delicious breakfast and dinner while you are accommodated in your
            large-Swiss tents. - The campsite is also equipped with amenities
            like a cafe, room service, housekeeping, free parking, power backup
            and 24-hour hot water facility. - Enjoy various activities like
            indoor and outdoor games, trekking to a nearby forest, light music
            with bonfire and stargazing. - The fun begins on day two of your
            trip - the experience of flying amidst Himalayan slopes, the
            picturesque view of the Bir valley below and the cool breeze
            brushing against gliders make for a thrilling adventure.<br></br>
            <br></br>
            Day 1 - Arrive at campsite <br></br>1. As you arrive at campsite
            you’ll be required to complete-check-in formalities <br></br> 2.
            Enjoy camp activities in an in house cafe at the camp. Go for a
            short jungle trek of 1 hour.<br></br> 3. You can enjoy camping
            activities like Jenga, dart etc<br></br> 4. The first day at the
            camp will end with in-house group activities, complimentary bonfire,
            light music and dinner
            <br></br>
            <br></br>
            Day 2 - Paragliding and checkout from campsite<br></br>1. Post
            Breakfast , The Group will head to paragliding takeoff point{" "}
            <br></br>2. The flight lasts 20 minutes with experienced glider
            <br></br> 3. The pilot will take care of controlling the flight
            while you enjoy the mesmerizing views <br></br>4. You will then come
            back to camp to end the tour here
          </p>
        </div>
        <div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Advisory</h1>
            <p className="para">
              1. For safety purposes, this activity is not recommended for women
              who are more than 3 months pregnant, anyone that has had major
              surgery, or has a broken leg/arm, has chronic back or neck pains,
              etc.<br></br>
              2. The activity might be delayed or postponed due to weather
              conditions. In such a scenario, the next best possible time slot
              will be informed.<br></br>
              3. Any meals or transfers not mentioned in the itinerary are not
              included in the package cost<br></br>
              4. Any personal expenses or items of personal nature will not be
              in part fo the deal7<br></br>
              5. The package is exclusive of any en-route or personal expenses,
              videography and photography of the flight.<br></br>
              6. ID proof is mandatory for each individual guest at the time of
              booking, and also upon arrival. PAN card will not be considered as
              a valid address proof.<br></br>
              7. Travel insurance covering medical evacuation,hospitalization,
              baggage insurance is not included in the package.<br></br>
              8. The number of guests must not exceed the count mentioned at the
              time of booking.<br></br>
              9.Guidelines issued by the State-Government is to be followed.
              Social distancing to be maintained. Frequent hand sanitization and
              use of mask recommended.<br></br>
            </p>
          </div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Accommodation</h1>
            <p className="para">
              Tree House <GiTreehouse />, Tent <GiCampingTent />
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

  .container {
    text-align:center;
    //Booking Styling
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
