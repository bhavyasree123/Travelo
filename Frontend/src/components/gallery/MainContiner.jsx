import React from 'react'
import styled from 'styled-components';
import Image from './Image';

function MainContiner() {
  return (
    <Wrapper>
        <Container>
         <Image/>
        </Container>
    </Wrapper>
  )
}

export default MainContiner;

const Wrapper = styled.div`
background-color: white;
display: flex;
justify-content: center;
width:100%;
height: 100%;
margin-top: 15px;
`
const Container = styled.div`
width: 80%;
background-color: white;
`