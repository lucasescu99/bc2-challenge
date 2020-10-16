import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
  background-color: white;
  border-radius: 6px;
  box-shadow: inset 0px 0px 6px 1px rgb(237 231 246);
  position: relative;
`;

export const Header = styled.div`
  height: 60px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding-left: 22px;
  text-transform: uppercase;
  color: rgb(149 117 205);
`;

export const Fly = styled.div`
  height: 40px;
  background-color: rgb(237 231 246);
  display: flex;
  align-items: center;
  padding-left: 18px;
  text-transform: uppercase;
  color: rgb(180 180 180);
  box-shadow: 0px 0px 9px 2px rgb(237 231 246);
`;

export const BultosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0px;
`;

export const Bulto = styled.div`
  width: 30%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const BultoDesc = styled.div`
  color: rgb(149 117 205);
`;

export const BultoTitle = styled.div`
  font-size: 20px;
  color: grey;
  margin-bottom: 10px;
`;

export const AddBulto = styled.button`
  background-color: ${({ statusForm }) => (statusForm ? "#FF6961" : "#03bb85")};
  width: 30%;
  height: 90px;
  color: white;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 18px;
`;

export const AddForm = styled.div`
  background-color: grey;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-transform: uppercase;
  color: white;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const Category = styled.div`
  width: 15%;
  height: 50px;
  background-color: ${({ category, selectedCategory }) =>
    selectedCategory === category ? "#cfffff" : "#008080"};
  color: ${({ category, selectedCategory }) =>
    selectedCategory === category ? "black" : "white"};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SendBulto = styled.button`
  background-color: #03bb85;
  width: 50%;
  height: 50px;
  color: white;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 20px;
`;

export const DeleteBultos = styled.button`
  background-color: rgb(255 105 97);
  width: 35%;
  height: 50px;
  color: rgb(255 255 255);
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

export const BackLink = styled.div`
  text-decoration: none;
  color: rgb(149 117 205);
  position: absolute;
  left: 5px;
  top: -20px;
  text-transform: uppercase;
  font-size: 12px;
`;
