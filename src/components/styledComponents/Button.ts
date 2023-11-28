import { styled } from "styled-components";

export const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #1d2b64 0%,
    #f8cdda 51%,
    #1d2b64 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border: none;
  border-radius: 10px;
  display: block;
  font-family: sans-serif;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
