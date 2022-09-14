import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

// 1) Create a Form with react-bootstrap
// 2) Control your inputs with a two way data binding = value & onChange
// 3) Having a centralised place where you can manage the form input values AKA the state!
// 4) You are going to handle the onSubmit event, by taking the values from the state and perform a fetch with POST method
// and the state values as payload.

// name --> string
// phone --> string/number
// numberOfPeople --> string/number
// dateTime --> string
// smoking --> boolean
// specialRequests --> string

const ReservationForm = () => {
  // state = {
  //   // this state object is going to collect all our input values
  //   // AS WE'RE TYPING THEM!
  //   reservation: {
  //     name: "",
  //     phone: "",
  //     numberOfPeople: 1,
  //     dateTime: "",
  //     smoking: false,
  //     specialRequests: "",
  //   },
  // };

  const [reservation, setReservation] = useState({
    name: "",
    phone: "",
    numberOfPeople: 1,
    dateTime: "",
    smoking: false,
    specialRequests: "",
  });

  const handleChange = (propertyToSet, valueToSet) => {
    setReservation({
      ...reservation,
      [propertyToSet]: valueToSet,
    });
  };

  const handleSubmit = async e => {
    // e is the form submission event, your function gets it automatically!
    e.preventDefault();
    // e.preventDefault() will STOP the default behaviour of the form aka refreshing the page!

    // 2) async/await
    // all the values are already safely stored in this.state.reservation
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/reservation", {
        method: "POST",
        body: JSON.stringify(reservation),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        // the "ok" property tells us the positive outcome of the network call
        alert("reservation saved");

        const reservationObj = await response.json();

        console.log(reservationObj);
      }
    } catch (error) {
      console.log(error);
      // this means most likely your internet connection has a problem
      // ...because you never reached the server in the first place!
    } finally {
      setReservation({
        name: "",
        phone: "",
        numberOfPeople: 1,
        dateTime: "",
        smoking: false,
        specialRequests: "",
      });
    }
  };

  return (
    <div className="my-3 text-center">
      <h2>Reservation Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>What's your name?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insert your name here"
            value={reservation.name}
            onChange={event => {
              handleChange("name", event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>What's your phone number?</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Insert number like: +34900000000"
            value={reservation.phone}
            onChange={e => {
              handleChange("phone", e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>How many people are you bringing with you?</Form.Label>
          <Form.Control
            as="select"
            value={reservation.numberOfPeople}
            onChange={e => {
              handleChange("numberOfPeople", e.target.value);
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>When are you coming?</Form.Label>
          <Form.Control
            type="datetime-local"
            value={reservation.dateTime}
            onChange={e => {
              handleChange("dateTime", e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Do you smoke?"
            // the "value" property in checkboxes is NOT true/false!
            // in order to take true/false as a value from a checkbox
            // we need to read another property: 'checked'
            checked={reservation.smoking}
            onChange={e => {
              handleChange("smoking", e.target.checked);
            }}
          />
        </Form.Group>

        {reservation.smoking && (
          <Form.Group>
            <Form.Label>Special Request</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Insert any special requests here"
              value={reservation.specialRequests}
              onChange={e => {
                handleChange("specialRequests", e.target.value);
              }}
            />
          </Form.Group>
        )}

        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ReservationForm;
