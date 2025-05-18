import React from "react";
import Header from "./header";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const HeroSection = () => {
  const cardData = [
    { title: "Develop Publications" },
    { title: "Develop Publications" },
    { title: "Develop Publications" },
  ];
  return (
    <div className="hero-section">
      <Header />
      <Container className="h-100">
        <div className="content text-white h-100">
          <Row>
            <Col md={6} className="d-flex flex-column align-items-start gap-4">
              <h1>Fast and Automatic Anime and Fantasy Writing</h1>
              <p>
                Texts written by artificial intelligence <br /> Immediate, easy
                and with amazing results
              </p>
              <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-center gap-3">
                <Button
                  size="lg"
                  className="btn primary-bg py-md-3 py-2 px-5 rounded-1"
                >
                  free trial
                </Button>
                <Button
                  size="lg"
                  className="btn secondary-bg py-md-3 py-2 px-5 rounded-1"
                >
                  signup with google
                </Button>
              </div>
            </Col>
            <Col md={6} className="d-flex justify-content-md-end mt-md-0 mt-4">
              <div className="d-flex flex-column gap-3">
                {cardData.map(() => (
                  <div className="info-card rounded-4 px-3 py-md-4 py-3 d-flex align-items-center gap-2">
                    <FaCheckCircle color="#31a6f4" size={30} />
                    <h4 className="fw-bold mb-0">Develop Publications</h4>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
