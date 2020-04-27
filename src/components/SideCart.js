import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SideCart() {
  return (
    <ProductConsumer>
      {value => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map(item => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img
                      width="35"
                      // src={`../${item.image}`}
                      src={item.image}
                      alt="cart item"
                    />
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize">
                        amount : {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
              cart total : ${cartTotal}
            </h4>
            <div className="text-center my-5">
              <Link to="/cart" className="main-link">
                cart page
              </Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 83px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainOnion);
  z-index: 1;
  transform: ${props => (props.show ? "translateX(0)" : "translateX(150%)")};
  box-shadow: 
    0 0px white,
    0 0px white, 
    0px 0 0px -0px var(--mainShadow), 
    -4px 0 4px -2px var(--mainShadow);
  /* border-left: 2px solid var(--primaryColor); */
  transition: var(--secondaryTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
`;
