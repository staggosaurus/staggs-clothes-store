import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default function Footer() {
    return (
        <ProductConsumer>
            {(value) => {
                return (
                    <FooterWrapper>
                        <div className="container py-4">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-around">
                                    <p className="text-capitalize">&copy; Michael Staggs {new Date().getFullYear()}.</p>
                                </div>
                            </div>
                        </div>
                    </FooterWrapper>
                );
            }}
        </ProductConsumer>
    );
}

const FooterWrapper = styled.footer`
    background: var(--mainWhite);
    color: var(--mainBlack);
    border-top: 1px solid var(--secondaryBlue);
    .icon {
        font-size: 1.5rem;
        color: var(--mainWhite);
        transition: var(--mainTranstion);
    }
    .icon:hover {
        color: var(--primaryColor);
        cursor: pointer;
    }
`;
