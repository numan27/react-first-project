import React from "react";
import { Row, Col } from "react-bootstrap";
import FeatureImg1 from "../assets/animate-img.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const FeatureSection = () => {
  return (
    <div className="feature-section container">
      <Row>
        <Col lg={6}>
          <img src={FeatureImg1} alt="" />
        </Col>

        <Col lg={6} className="ps-md-5 d-flex align-items-center">
          <div className="d-flex flex-column gap-4 justify-content-between h-75">
            <div>
              <h2>Animate Text in ablink Automatic and Immediate</h2>
              <p className="mt-3">
                The technology our AI assure a great writing, without waiting,
                without creative block, instant content only
              </p>
            </div>

            <ul className="d-flex flex-column align-items-start gap-3">
              <li className="d-flex align-items-center gap-2">
                <span>
                  <FaCheckCircle color="#31a6f4" size={30} />
                </span>

                <h5>Powered by GPT-3 from OpenAI</h5>
              </li>{" "}
              <li className="d-flex align-items-center gap-2">
                <span>
                  <FaCheckCircle color="#31a6f4" size={30} />
                </span>

                <h5>Different genres and tones</h5>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span>
                  <FaCheckCircle color="#31a6f4" size={30} />
                </span>

                <h5>To publsih on networks or use them in your campaigns</h5>
              </li>
            </ul>

            <a href="">
              Read More
              <span>
                <FaArrowRightLong />
              </span>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeatureSection;
