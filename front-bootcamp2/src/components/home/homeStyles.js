import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
  background-color: white;
  box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.75);
  border-radius: 6px;
  position: relative;
`;

export const Header = styled.div`
  height: 60px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: grey;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding-left: 25px;
  text-transform: uppercase;
  color: white;
`;

export const SubHeader = styled.div`
  height: 40px;
  background-color: rgb(180 180 180);
  display: flex;
  align-items: center;
  padding-left: 18px;
  text-transform: uppercase;
  color: white;
`;

export const SubHeaderDivider = styled.div`
  height: 60%;
  border: 1px solid rgb(128 128 128);
  margin-left: 6px;
  margin-right: 8px;
`;

export const Passenger = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: rgb(149 117 205);
  text-transform: uppercase;
  border-top: 1px solid grey;
`;

export const PassengerLink = styled.div`
  text-decoration: none;
  color: rgb(149 117 205);
  font-size: 12px;
`;

export const AddPassenger = styled.button`
  background-color: ${({ statusForm }) => (statusForm ? "#FF6961" : "#03bb85")};
  width: 40%;
  height: 50px;
  color: white;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 20px;
  position: absolute;
  bottom: -70px;
  right: 0px;
`;

export const PassengerForm = styled.div`
  height: 40px;
  background-color: rgb(180 180 180);
  display: flex;
  align-items: center;
  padding-left: 18px;
  text-transform: uppercase;
  color: white;
  position: relative;
`;

export const CodeInput = styled.input`
  width: 20%;
`;

export const NameInput = styled.input`
  width: 20%;
`;

export const SendPassenger = styled.button`
  height: 80%;
  width: 10%;
  background-color: #03bb85;
  color: white;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 12px;
  position: absolute;
  right: 10px;
`;
