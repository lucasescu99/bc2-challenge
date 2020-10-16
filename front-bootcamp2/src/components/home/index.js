import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
  Container,
  Passenger,
  Header,
  SubHeader,
  SubHeaderDivider,
  PassengerLink,
  AddPassenger,
  PassengerForm,
  CodeInput,
  NameInput,
  SendPassenger
} from "./homeStyles";

const Home = ({ history }) => {
  const [passengers, setPassengers] = useState([]);
  const [statusForm, setStatusForm] = useState(false);
  const [inputs, setInputs] = useState({ code: "", name: "" });

  const fetchPassengers = () => {
    Axios.get("http://localhost:3000/passengers").then(res => {
      setPassengers(res.data);
    });
  };

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const sendPassenger = () => {
    Axios.post("http://localhost:3000/passengers", inputs)
      .then(() => {
        setInputs({ code: "", name: "" });
        setStatusForm(false);
        fetchPassengers();
      })
      .catch(err => console.log(err));
  };

  useEffect(fetchPassengers, []);

  return (
    <Container>
      <Header> Pasajeros </Header>
      {statusForm ? (
        <PassengerForm>
          <CodeInput
            placeholder="Vuelo"
            name="code"
            type="code"
            maxLength="5"
            value={inputs.code}
            onChange={handleChange}
          />
          <NameInput
            placeholder="Nombre"
            name="name"
            type="name"
            value={inputs.name}
            onChange={handleChange}
          />
          <SendPassenger onClick={sendPassenger}>Agregar</SendPassenger>
        </PassengerForm>
      ) : (
        <SubHeader>
          Vuelo <SubHeaderDivider /> Nombre y apellido
        </SubHeader>
      )}
      {passengers.map(passenger => (
        <Passenger key={passenger.id}>
          <>{`#${passenger.code} | ${passenger.name}`}</>
          <Link to={`/passengers/${passenger.id}`}>
            <PassengerLink>ver bultos</PassengerLink>
          </Link>
        </Passenger>
      ))}

      <AddPassenger
        onClick={() => setStatusForm(!statusForm)}
        statusForm={statusForm}
      >
        {statusForm ? "Cancelar" : "Agregar Pasajero"}
      </AddPassenger>
    </Container>
  );
};

export default Home;
