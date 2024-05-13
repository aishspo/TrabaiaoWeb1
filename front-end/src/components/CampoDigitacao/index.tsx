import React from "react";
import styled from "styled-components";

const Campo = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
  font-family: "Inter", sans-serif;
  background: #f0f0f0;
  margin: 1em 0;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  width: 100%;
  padding: 16px;
`;

const Rotulo = styled.label`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;


const Container = styled.div`
  width: 100%;
`;

interface Props {
  valor: string;
  tipo: string;
  placeholder: string;
  onChange: (value: string) => void;
  label?: string;
}

export default function CampoDigitacao({
  valor,
  tipo,
  placeholder,
  onChange,
  label,
}: Props) {
  return (
    <Container>
      <Rotulo>{label}</Rotulo>
      <Campo
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </Container>
  );
}
