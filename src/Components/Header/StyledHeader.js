import styled from "styled-components";


export const Div = styled.div`
  text-align: center;
  
`
export const Img = styled.img`
  width: 10vw;

`
export const Title = styled.h1`
  font-family: SultanNahiaW20;
  position: relative;
  color: white;
 
`;
export const Button = styled.button`
  background-color: red;
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
  margin-left: 5vw;
  position: absolute;
  top: 1;
  left: 0;
  @media(max-width: 540px){
    font-size: 1.2em;
  flex-direction: column;
  margin-left: 0vw;
  height: 4vh;
  left: none;
  top: 0;
  }
  
`;
export const Button2 = styled(Button)`
left: 1;
right: 0;
margin-left: 78vw;
@media(max-width: 540px){
  margin-left: 65vw;
  }
`

export const HeaderDiv = styled.div`
  height: 7vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #30a7d7;
  @media(max-width: 540px){
    flex-direction: column;
    height: 10vh;
  }
`;
