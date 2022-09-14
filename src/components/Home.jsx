import { useState } from "react";

import { Container, Row, Col, Carousel, ListGroup, Badge } from "react-bootstrap";

import arrayOfPastas from "../data/menu.json"; /* this creates a variable that we can use: arrayOfPastas */
import ReservationForm from "./ReservationForm";
import ReservationList from "./ReservationList";

const Home = () => {
  const [selectedPasta, setSelectedPasta] = useState(null);

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} className="mt-md-5">
          <ReservationList />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} className="mt-md-5">
          <ReservationForm />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} className="mt-md-5">
          <Carousel>
            {/* The map method takes an array and returns a piece of JSX, REMEMBER to assign a unique key prop to the immediate element you are returning */}
            {arrayOfPastas.map((pasta, index) => (
              <Carousel.Item
                key={`dish-${index}`}
                className={selectedPasta?.id === pasta.id && "selectedState"}
              >
                <img
                  className="d-block w-100"
                  src={pasta.image}
                  alt="First slide"
                  onClick={() => {
                    console.log("you clicked an image!");

                    setSelectedPasta(pasta);
                  }}
                />
                {selectedPasta && selectedPasta.id === pasta.id && (
                  <Badge
                    pill
                    variant="success"
                    style={{ position: "absolute", top: 10, right: 15 }}
                  >
                    Selected
                  </Badge>
                )}
                <Carousel.Caption>
                  <h3>{pasta.name}</h3>
                  <p>{pasta.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col xs={12} md={6} className="text-center">
          {selectedPasta ? (
            <>
              <h3>Reviews for {selectedPasta.name}</h3>
              <ListGroup variant="flush">
                {selectedPasta.comments.map((review, i) => (
                  <ListGroup.Item key={`review-${i}`}>
                    {review.author} — {review.comment}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          ) : (
            <p>
              No Reviews to be shown yet! <br /> Click on an image to see them
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
