import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.75rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  th {
    background-color: #f2f2f2;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  caret-color: transparent;
`;

export const Input = styled.input`
  font-size: 1rem;

  &:placeholder {
    font-size: 2rem;
    color: black;
  }

  &:disabled {
    color: black;
    background-color: transparent;
    border: 1px solid transparent;
  }
`;

export const FunctionButton = styled.button`
  margin-right: 0.5rem;
  padding: 0.25rem;

  line-height: 0;

  border: 2px solid transparent;
  background-color: transparent;

  &:hover {
    border-radius: 4px;
  }
`;

export const DeleteButton = styled(FunctionButton)`
  &:hover {
    svg {
      color: red;
    }

    border: 2px solid red;
  }
`;

export const SaveButton = styled(FunctionButton)`
  &:hover {
    svg {
      color: blue;
    }

    border: 2px solid blue;
  }
`;

export const LinkBtn = styled(Link)`
  position: fixed;
  bottom: 5rem;
  right: 5rem;

  padding: 0.5rem 1rem;

  font-size: 1.025rem;
  color: #fff;

  border: none;
  border-radius: 8px;

  background-color: green;

  transition: all 0.2s;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;
