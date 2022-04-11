import React from 'react';
import styled from "styled-components";
import background from "../assets/portfolio.jpg";

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="background">
        <img src={background} alt="Porfolio background image" />
      </div>
      <div className="content">
        <h1>
          Lorem ipsum dolor sit amet.
        </h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, possimus?
        </h2>
        <button>Buy Now</button>
      </div>
    </Section>
  )
}

const Section = styled.section`
height: 60vh;
position: relative;
border-radius: 5rem;
&:hover {
  .background {
    img {
      transform: scale(1.2);
    }
  }
}
.background {
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: 1rem;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(60%);
    border-radius: 1rem;
    transition: 0.8s ease-in-out;
  }
}
.content {
  position: absolute;
  top: 25%;
  left: 10%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  h1 {
    font-size: 3rem;
    width: 60%;
  }
  h2 {
    width: 60%;
  }
  button {
    font-size: 1.4rem;
    border: none;
    color: white;
    padding: 1rem 4rem;
    background: linear-gradient(to right, #fc4958, #e85d05);
    border-radius: 4rem;
    transition: 0.5s ease-in-out;
    text-transform: uppercase;
    &:hover {
      background: linear-gradient(to left, #fc4958, #e85d05);
      cursor: pointer;
    }
  }
}
`;