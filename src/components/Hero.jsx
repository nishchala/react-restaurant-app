import React from 'react'
import styled from "styled-components";
import hero from "../assets/hero.jpg";
import heroDesign from "../assets/badge.png";


export default function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src={hero} alt="Bakcground image" />
      </div>
      <div className="content">
        <div className="sale">
          <img src={heroDesign} alt="Hero Design" />
          <h1>BIG SALE<span>50% OFF</span></h1>
        </div>
        <div className="info">
          <h2>Food Caterer</h2>
          <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et!</em>
          <button>ORDER NOW</button>
        </div>
      </div>
    </Section>
  )
}


const Section = styled.section`
height: 80vh;
width: 100vw;
position: relative;
.background {
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
  }
}
.content {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width:100%;
  .sale {
    position: relative;
    left: 10%;
    img {
    height: 50vh;
    }
    h1 {
      color: white;
      position: absolute;
      top: 15vh;
      left: 6vh;
      font-size: 3.5rem;
      span {
        display: block;
      }
    }
  }
  .info {
    position: absolute;
    top: 30%;
    right: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    h2 {
      color: #f9c74f;
      font-size: 4rem;
    }
    em {
      color: white;
      width: 60%;
      text-align: end;
      font-size: 1.1rem;
      letter-spacing: 0.1rem;
    }
    button{
      padding: 1rem 2rem;
      font-size: 1.4rem;
      background-color: #fc4958;
      border: none;
      color: white;
      font-weight: 800;
      letter-spacing: 0.2rem;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #f9c74f;
      }
      
    }
  }
}
`;