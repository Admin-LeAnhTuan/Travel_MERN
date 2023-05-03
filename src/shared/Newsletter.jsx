import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./newsletter.css";

import maleTourlist from "../assets/images/Newsletter/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get usefull traveling information</h2>
              <div className="newsletter__input">
                <input type="text" placeholder="Enter you email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
            </div>
            <p>
              The company itself is a very smart company, adipsic developer. He
              has chosen for us the pleasures that are more severe than those
              pleasures, which are the most worthy pleasures, to endure the
              distresses of the mind. I was born after being released.
            </p>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourlist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
