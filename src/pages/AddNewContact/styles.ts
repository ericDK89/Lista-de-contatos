import { styled } from "styled-components";

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 1rem;

  border-radius: 8px;

  background-color: gray;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled.label``;

export const Input = styled.input`
  font-size: 1rem;
`;

export const Button = styled.button`
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;

  font-weight: 700;

  border-radius: 8px;
  border: 2px solid transparent;

  background-color: red;
  color: #fff;

  &[type="submit"] {
    background-color: blue;
  }

  &:hover {
    border: 2px solid #fff;
  }
`;
