import ReactInputMask from "react-input-mask";
import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  };

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const PhoneInput = styled(ReactInputMask)`
  font-size: 1rem;

  &:disabled {
    color: black;
    background-color: transparent;
    border: 1px solid transparent;
  }
`;
