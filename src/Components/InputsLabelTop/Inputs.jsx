import React, { useState } from "react";
import styled from "styled-components";

import { Field } from "formik";

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  position: absolute;
  top: ${({ enfocado, texto }) =>
    enfocado || texto !== "" ? "-1rem" : "2.2rem"};
  left: 0.75rem;
  color: ${({ enfocado, texto }) =>
    enfocado || texto !== "" ? "#ff3562" : "#183446"};
  font-size: ${({ enfocado, texto }) =>
    enfocado || texto !== "" ? "0.8rem" : "0.75rem"};
  pointer-events: none;
  text-shadow: ${({ enfocado, texto }) =>
    enfocado || texto !== "" ? "0 0 2px" : "0.75rem"};
  transition: all 0.2s ease-out;
`;

const Input = styled.input`
  width: 100%;
  color: #777;
  padding: 1.25rem 0.75rem;
  font-size: 1rem;
  border: 0.1rem solid #0001;
  border-bottom: 1px solid #777;
  outline: none;
  &:focus {
    border-bottom: 1px solid #000;
  }
`;

export const TextInput = ({ type, label, name, getFieldProps , ...rest }) => {
  const [enfocado, setEnfocado] = useState(false);
  const [texto, setTexto] = useState("");

  const manejarEnfoque = () => setEnfocado(true);

  const manejarCambio = (e) => {
    const { value, name } = e.target;
    setTexto(e.target.value);
    console.log(value);
  };

  const manejarDesenfoque = () => setEnfocado(texto !== "");

  return (
    <InputContainer>
      <Label enfocado={enfocado} texto={texto}>
        {label}
      </Label>

      <Field
        style={{
          width: "100%",
          color: " #777",
          padding: " 1.25rem 0.75rem",
          fontSize: "1rem",
          border: "0.1rem solid #0001",
          borderBottom: "1px solid #777",
          outline: "none",
        }}
        type={type}
        name={name}
        onFocus={manejarEnfoque}
        onBlur={manejarDesenfoque}
        onChange={manejarCambio}
        {...rest}
      />
    </InputContainer>
  );
};
