import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import {
  Container,
  Header,
  Fly,
  BultosContainer,
  Bulto,
  BultoDesc,
  BultoTitle,
  AddBulto,
  AddForm,
  CategoriesContainer,
  Category,
  SendBulto,
  DeleteBultos,
  BackLink
} from "./passengerStyles";

const Passenger = ({ match }) => {
  const [passenger, setPassenger] = useState({});
  const [statusForm, setStatusForm] = useState(false);
  const [category, setCategory] = useState(1);

  const sendBulto = category => {
    Axios.post(`http://localhost:3000/packages`, {
      category,
      passengerId: match.params.id
    })
      .then(() => {
        setStatusForm(false);
        fetchPassenger();
      })
      .catch(err => console.log(err));
  };

  const deleteBultos = () => {
    Axios.delete(`http://localhost:3000/passengers/${match.params.id}`)
      .then(() => fetchPassenger())
      .catch(err => console.log(err));
  };

  const fetchPassenger = () => {
    Axios.get(`http://localhost:3000/passengers/${match.params.id}`)
      .then(res => {
        setPassenger(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(fetchPassenger, [match.params.id]);

  return (
    <Container>
      <Header>{passenger.name}</Header>
      <Fly>vuelo: #{passenger.code}</Fly>
      <BultosContainer>
        {passenger.packages?.length
          ? passenger.packages.map((bulto, i) => (
              <Bulto key={bulto.id}>
                <BultoTitle>bulto nº{i + 1}</BultoTitle>
                <BultoDesc>tipo: {bulto.type}</BultoDesc>
                <BultoDesc>categoria: {bulto.category}</BultoDesc>
              </Bulto>
            ))
          : "El pasajero no tiene bultos todavia."}
        {passenger.packages?.length < 3 ? (
          <AddBulto
            onClick={() => setStatusForm(!statusForm)}
            statusForm={statusForm}
          >
            {statusForm ? "Cancelar" : "Agregar bulto"}
          </AddBulto>
        ) : null}
      </BultosContainer>
      {statusForm ? (
        <AddForm>
          ¿Que categoria es el bulto que queres agregar?
          <CategoriesContainer>
            <Category
              category={1}
              selectedCategory={category}
              onClick={() => setCategory(1)}
            >
              1
            </Category>
            <Category
              category={2}
              selectedCategory={category}
              onClick={() => setCategory(2)}
            >
              2
            </Category>
            <Category
              category={3}
              selectedCategory={category}
              onClick={() => setCategory(3)}
            >
              3
            </Category>
          </CategoriesContainer>
          <SendBulto onClick={() => sendBulto(category)}>Agregar</SendBulto>
        </AddForm>
      ) : null}
      {passenger.packages?.length ? (
        <DeleteBultos onClick={() => deleteBultos()}>
          Retirar Bultos
        </DeleteBultos>
      ) : null}
      <Link to="/passengers">
        <BackLink>volver</BackLink>
      </Link>
    </Container>
  );
};

export default Passenger;
