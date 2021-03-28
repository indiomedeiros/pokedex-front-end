import styled from "styled-components";

export const Titulo = styled.h1`
  font-family: SultanNahiaW20;
  margin: auto;
  color: white;
`;
export const Button = styled.button`
  background-color: orangered;
  border: none;
  outline: none;
  color: white;
  box-shadow: 1px 1px 2px black;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  :hover {
    background-color: orangered;
    border: none;
  }
  :active {
    box-shadow: none;
  }
  font-family: SultanNahiaW20;
  font-size: 1.2em;
  margin-left: 10px;
  margin-right: 10px;
`;

export const HeaderDiv = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #30a7d7;
`;
