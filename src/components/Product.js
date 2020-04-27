import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { ProductConsumer } from "../context";

export default function Product({ product }) {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value;

        return (
          <ProductWrapper className="col-10 col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
              <div className="img-container ">
                <img
                  src={product.image}
                  className="card-img-top px-5 pt-4"
                  alt="product"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div className="product-icons">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={() => setSingleProduct(product.id)}
                  >
                    <IoIosSearch className="icon" />
                  </Link>
                  <TiShoppingCart
                    className="icon"
                    onClick={() => addToCart(product.id)}
                  />
                </div>
              </div>
              <div
                className="card-body d-flex mb-3 justify-content-between align-items-end"
                style={{}}
              >
                <Link
                  to={`/products/${product.id}`}
                  className="product-link"
                  onClick={() => setSingleProduct(product.id)}
                >
                  <p className="mb-0">{product.title}</p>
                </Link>
                <p className="mb-0 text-main">${product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const ProductWrapper = styled.div`
  .card {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover {
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.04);
    opacity: 0.2;
  }
  .img-container {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  
  .icon {
    font-size: 3rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--primaryColor);
    background: var(--mainBlack);
    border-radius: 0.5rem;
  }
  .card:hover .product-icons {
    opacity: .9;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 2px;
  }
`;
