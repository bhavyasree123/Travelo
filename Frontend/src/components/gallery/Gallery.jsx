import React,{useState} from "react";
import styled from "styled-components";
import "./gallery.css";
import MainContiner from "./MainContiner";
import SearchBox from "./SearchBox";
import unsplash from "../../api/unsplash";

export default function Gallery() {

  const [images, setNewImages] = useState([])
  const getImages = (term) =>{
    return unsplash.get("https://api.unsplash.com/search/photos", { 
      params: {
      query:term
    }
    });
  };

  const onSearchSubmit = (term) =>{
    getImages(term).then((res)=>{
      let results = res.data.results;
      
      let newImages = [
        ...results,
        ...images
      ]

      newImages.sort(function(a,b){
        return 0.5 - Math.random();
      });
   setNewImages(newImages);
});

  }

  

  return (
    <Section id="landing" style={{ paddingTop: "7rem" }}>
      <div>
       <SearchBox onSubmit={onSearchSubmit}/>
       <MainContiner images={images}/>
      </div>
    </Section>
  );
}

const Section = styled.section``;
