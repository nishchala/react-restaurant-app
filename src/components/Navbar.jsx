import React from 'react';
import styled from "styled-components";
import foodYummy from "../assets/logo.png";

export default function Navbar() {
  return (
    <Nav>
    <div className="brand">
      <img src={foodYummy} alt="logo image" />
      <div className="toggle"></div>
    </div>
    <ul className="links">
      <li><a href="#home" className='active'>Home</a></li>
      <li><a href="#services" >Services</a></li>
      <li><a href="#porfolio" >Porfolio</a></li>
      <li><a href="#reviews" >Reviews</a></li>
      <li><a href="#products" >Products</a></li>
      <li><a href="#newsletter" >Newsletter</a></li>
    </ul>
    </Nav>
  )
}

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 4vw;

.brand{
  img {
    width: 30%;
    max-width: 80%;
    cursor: pointer;
  }
  .toggle {
    display: none;
  }
}
.links{
  display: flex;
  list-style-type: none;
  gap: 2rem;
  li {
    a{
      color: #fc4958;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      transition: 0.3s ease-in-out;
      &:hover {
        color: #f9c74f;
      }
    }
    .active{
      color: #f9c74f;
    }
    
  }
}
`;