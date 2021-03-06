import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
export default function Sidebar() {
  return (
    <ProductConsumer>
      {value => {
        const { links, sidebarOpen, handleSidebar } = value;
        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map(link => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="sidebar-link"
                      onClick={handleSidebar}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 76px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainOnion);
  z-index: 1;
  box-shadow: 
    0 0px white,
    0 0px white, 
    0px 0 0px -0px var(--mainShadow), 
    4px 4px 4px -2px var(--mainShadow);
  /* border-right: 2px solid var(--primaryColor); */
  opacity: ${props => (props.show ? "1" : "0")};
  transition: var(--secondaryTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-150%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
