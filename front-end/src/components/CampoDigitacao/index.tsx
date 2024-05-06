import React from "react";
import styled from "styled-components";

const Campo = styled.input`
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
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const Container = styled.div`
  width: 100%;
`;

const MensagemErro = styled.p`
  color: red;
  font-size: 14px;
`;

const CampoDigitacao = ({
  valor,
  tipo,
  placeholder,
  register,
  erro,
  label,
}) => {
  return (
    <Container>
      <Rotulo>{label}</Rotulo>
      <Campo
        type={tipo}
        value={valor}
        placeholder={placeholder}
        {...register}
      />
      {erro && <MensagemErro>{erro}</MensagemErro>}
    </Container>
  );
};

export default CampoDigitacao;
