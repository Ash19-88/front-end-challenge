import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 60vh;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 60vw;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  border: 2px silver solid;
  border-radius: 8px;
  background-color: whitesmoke;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    min-width: 80vw;
  }
`;
export const StyledThankyouPage = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 60vh;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 60vw;
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  border: 2px silver solid;
  border-radius: 8px;
  background-color: whitesmoke;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    min-width: 80vw;
  }
`;

export const Title = styled.h1`
  color: #d86372;
  font-family: sans-serif;
  font-weight: bold;
`;

export const Subtitle = styled.h2`
  color: #854f70;
  font-family: sans-serif;
  font-weight: bold;
`;
