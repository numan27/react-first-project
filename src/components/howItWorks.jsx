import React from "react";
import { Container } from "react-bootstrap";
import CustomSectionHeading from "./common/customSectionHeading";
import Icon1 from "../assets/icon-1.png";
import Icon2 from "../assets/icon-2.png";
import Icon3 from "../assets/icon-3.png";

const HowItWorks = () => {
  const cardsData = [
    {
      icon: Icon1,
      title: "Full Stories",
      description:
        "Interesting and complex, with a good development and ending",
    },
    {
      icon: Icon2,
      title: "Posting",
      description:
        "Interesting and complex, with a good development and ending",
    },
    {
      icon: Icon3,
      title: "Feedback",
      description:
        "Interesting and complex, with a good development and ending",
    },
  ];

  return (
    <Container className="my-5 py-4">
      <CustomSectionHeading
        title={
          <>
            Quality Content <br />
            In just One click
          </>
        }
        description="Wether you need it urgently or just don't like to wait, our AI takes just seconds to deliver a complete work, no more waiting in commission queue."
      />

      <div className="cardsContainer">
        {cardsData.map((data) => (
          <div className="cardItem">
            <div className="iconContainer">
              <img width={26} height={26} src={data.icon} alt="icon" />
            </div>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HowItWorks;
