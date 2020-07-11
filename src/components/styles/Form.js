import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 25px;
  place-items: center;
  width: 70%;
  min-width: 250px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px rgba(0, 0, 0, 0.3);
  div {
    width: 100%;
  }

  input,
  button {
    padding: 10px;
    border-radius: 5px;
  }

  button {
    width: 100%;
    text-transform: uppercase;
    background: ${(props) => props.theme.green};
    color: white;
    box-shadow: inset 0 -5px hsl(154, 59%, 41%);
    border: 1px solid transparent;
    cursor: pointer;
    :active {
      box-shadow: inset 0 -2px hsl(154, 59%, 41%);
      transform: translateY(2px);
    }
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 2px solid
    ${(props) =>
      props.error === "true" ? props.theme.red : props.theme.grayishBlue};

  :invalid::placeholder {
    color: ${(props) =>
      props.error === "true" ? props.theme.red : props.theme.grayishBlue};
  }
  :invalid {
    background: ${(props) =>
      props.error === "true" ? 'url("/icon-error.svg")' : ""};
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 90%;
  }
`;

export const StyledErrorMessage = styled.div`
  font-size: 1rem;
  text-align: end;
  display: ${(props) => (props.error === "true" ? "block" : "none")};
  color: ${(props) => props.theme.red};
`;
