import React from "react";
import { FaBars } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import logo from "../images/logo.svg";
export default function Navbar() {
    return (
        <ProductConsumer>
            {(value) => {
                const { cartItems, handleSidebar, handleCart } = value;
                return (
                    <NavWrapper>
                        <div className="nav-center">
                            <FaBars className="nav-icon" onClick={handleSidebar} />
                            <img className="nav-logo" src={logo} alt="React Clothes logo" />
                            <div className="nav-cart">
                                <TiShoppingCart className="nav-icon" onClick={handleCart} />
                                <div className="cart-items">{cartItems}</div>
                            </div>
                        </div>
                    </NavWrapper>
                );
            }}
        </ProductConsumer>
    );
}

const NavWrapper = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--mainWhite);
    border-bottom: 1px solid var(--secondaryBlue);
    z-index: 2;
    .nav-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1170px;
        margin: 0 auto;
    }
    .nav-icon {
        font-size: 1.5rem;
        cursor: pointer;
    }
    .nav-cart {
        position: relative;
    }
    .cart-items {
        background: var(--primaryColor);
        color: var(--mainWhite);
        font-size: 0.85rem;
        position: absolute;
        top: -8px;
        right: -8px;
        padding: 0 5px;
        border-radius: 50%;
    }
    .nav-logo {
        max-height: 45px;
    }
`;
