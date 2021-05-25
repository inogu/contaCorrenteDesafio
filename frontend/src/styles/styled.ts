import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;  
  padding: 3rem 10%;
  margin-right: 2rem
  height: 5rem;
  background-image: linear-gradient(to right, black, #ccc);
  background-size: cover;
  
`;

export const Container = styled.div`
  background-image: linear-gradient(to right, black, #ccc);
  height: 600px;
`;

export const FormContainer = styled.div`
  background-color: #aaa;
  height: 600px;
  margin: auto;
  width: 50%;
`;

export const GridContainer = styled.div`
  background-color: #aaa;
  height: 80%;
  margin: auto;
  width: 65%;
`;

export const Title = styled.h1`
  font-size: 5em;
  color: black;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: auto;
  text-align: center;
  padding: 15rem;
`;

export const SubTitle = styled.h2`
  font-size: 2em;
  color: #4e0909;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: auto;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const Footer = styled.div`
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  padding-left: 2rem;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;
`;
