import React from "react";
import styled from "styled-components";
import "./gallery.css";
import MainContiner from "./MainContiner";
import SearchBox from "./SearchBox";

export default function Gallery() {
  return (
    <Section id="landing" style={{ paddingTop: "7rem" }}>
      <div>
       <SearchBox/>
       <MainContiner/>
      </div>
    </Section>
  );
}

const Section = styled.section``;
