import React, { useState } from "react";
import styled from "styled-components";
import AdventuresData from "./AdventuresData";
export default function Adventures() {
  {
    /* Packages Routes Start */
  }
  const packages = [
    {
      name: "Adventures",
      href: "/Adventures",
    },
    { name: "Activities", href: "/Activities" },
    {
      name: "Events",
      href: "/Events",
    },
    {
      name: "Gallery",
      href: "/Gallery",
    },
  ];
  const [active, setActive] = useState(packages[0].name);

  return (
    <Section id="recommend">
      <div className="title">
        <h2>DISCOVER THE WORLD</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                key={index}
                className={active === pkg.name ? "active" : ""}
                onClick={() => setActive(pkg.name)}
              >
                <a className="href" href={pkg.href}>
                  {pkg.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Packages Routes End */}

      <div className="destinations">
        {AdventuresData.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>{destination.duration}</span>

                <a className="button" href={destination.href}>
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
    font-size: 1rem;
  }
  .packages {
    display: flex;
    justify-content: center;
    column-gap: 25px;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        // border-bottom: 0.3rem solid #56d678;
        color:black;
        font-size:1rem;
        font-weight:bold;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }

      .href {
        text-decoration:none;
        color:#000;
      }
      
      
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
       
       }
        display: flex;
        justify-content: space-between;
  }
      .distance {
        display: flex;
        justify-content: space-between;
      }
      .button {
        display: inline-block;
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
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
