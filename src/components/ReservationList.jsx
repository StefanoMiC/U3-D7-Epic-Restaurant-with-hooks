import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup"; //this shakes off all the unnecessary weight of the library and takes in only the list group component
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";

import { parseISO, format } from "date-fns";

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasAlert, setHasAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ variant: "", message: "" });

  const fetchReservations = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/reservation");
      if (response.ok) {
        const data = await response.json();
        if (data.length === 0) {
          setHasAlert(true);
          setAlertMessage({ variant: "info", message: "No resvervations yet!" });
        }
        console.log("RESERVATIONS LIST!", data);

        setReservations(data);
      } else {
        console.log("Error happened during fetch");

        setHasAlert(true);
        setAlertMessage({
          variant: "danger",
          message: "Oh no, we had an issue retrieving your data! ☹",
        });
      }
    } catch (error) {
      console.log("Unable to fetch");

      setHasAlert(true);
      setAlertMessage({
        variant: "danger",
        message: "Fatal Error, unable to fetch your data! 💀",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
    console.log("I'm the COMPONENTDIDMOUNT HOOK");
  }, []);

  console.log("I'm the RENDER method");
  return (
    <div className="mt-3">
      <h2>Reservations List</h2>

      {hasAlert && <Alert variant={alertMessage.variant}>{alertMessage.message}</Alert>}
      {isLoading && <Spinner animation="grow" variant="success" />}
      <ListGroup>
        {reservations.map(bookedTable => (
          <ListGroup.Item key={bookedTable._id}>
            {bookedTable.name} for {bookedTable.numberOfPeople}
            <Badge variant="dark" className="ml-3">
              {format(parseISO(bookedTable.dateTime), "MMMM do yyyy — HH:mm")}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ReservationList;
