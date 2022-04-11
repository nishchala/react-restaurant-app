import React from 'react';
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import { imageZoomEffect, TitleStyles } from './ReusableStyles';

export default function Products() {
  const data = [
    {
      image: product1,
      name: "Chicken Burger",
      price: "$22.4/pcs",
    },
    {
      image: product2,
      name: "Toast Bread",
      price: "$2.4/pcs",
    },
    {
      image: product3,
      name: "Egg",
      price: "$12.4/pcs",
    },
    {
      image: product4,
      name: "Sandwich",
      price: "$27.4/pcs",
    }
  ]
  return (
    <Section>
    <div className="title">
      <h1>
        <span>Favorite</span> All the time!
      </h1>
    </div>
    <div className="products">
      {
        data.map((product)=> {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="Product image" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, libero.</p>
              <button>Buy Now</button>
            </div>
          )
        })
      }
    </div>
    </Section>
  )
}

const Section = styled.section`
${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #fc4958;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d04);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #e85d04, #fc4958);
        }
      }
    }
  }
`;
