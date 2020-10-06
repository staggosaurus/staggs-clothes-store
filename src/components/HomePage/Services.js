import React, { Component } from "react";
import styled from "styled-components";
import { FaShippingFast, FaLaughBeam, FaDollarSign } from "react-icons/fa";
export default class Services extends Component {
    state = {
        services: [
            {
                id: 1,
                icon: <FaDollarSign />,
                title: "Secured PayPal payment",
                text: "Your information is safe with us."
            },
            {
                id: 2,
                icon: <FaLaughBeam />,
                title: "90 day return policy",
                text: "100% satisfaction guranteed."
            },
            {
                id: 3,
                icon: <FaShippingFast />,
                title: "Free shipping",
                text: "Items shipped quickly at no additional cost."
            }
        ]
    };
    render() {
        return (
            <ServicesWrapper className="py-5">
                <div className="container">
                    <div className="row">
                        {this.state.services.map((item) => {
                            return (
                                <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
                                    <div className="card service-card px-3 pt-3 pb-3">
                                        <div className="service-icon">{item.icon}</div>
                                        <div className="mt-3 text-capitalize">{item.title}</div>
                                        <div className="mt-3">{item.text}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </ServicesWrapper>
        );
    }
}

const ServicesWrapper = styled.section`
  font-family: "Roboto", sans-serif;
  background: var(--mainOpBlue);
  border-top: 1px solid var(--secondaryBlue);
  border-bottom: 1px solid var(--secondaryBlue);
  .service-icon {
    font-size: 2.5rem;
    color: var(--mainWhite);
  }
  .service-icon > svg{
    background: var(--primaryColor);
    border-radius: 50%;
    padding: .32rem;
  }
  p {
    color: var(--darkGrey);
  }
  .service-card{
    min-height: 200px;
    background-color: var(--mainWhite);
    color: var(--mainBlack)
    border-color: var(--tertiaryBlue)
  }
`;
