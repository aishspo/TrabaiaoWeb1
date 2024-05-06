import styled from "styled-components";
import CampoDigitacao from "../../components/CampoDigitacao";
import Botao from "../../components/Botao";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IAluno from "../../types/IAluno";
import usePost from "../../usePost";

interface PropsCustomizadas {
  cor: string;
}

const StepCustomizada = styled.div<PropsCustomizadas>`
  background-color: ${({ cor }) => cor};
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;

const Titulo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: var(--cinza);
`;

const Formulario = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotaoCustomizado = styled(Botao)`
  width: 50%;
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 65%;
  justify-content: space-between;
`;

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [senhaVerificada, setSenhaVerificada] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [complemento, setComplemento] = useState("");
  const { cadastrarDados, erro, sucesso } = usePost();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // previne o envio padrão do formulário

    const aluno: IAluno = {
      email: email,
      nome: nome,
      senha: senha,
    };

    try {
      cadastrarDados({ url: "aluno", dados: aluno });
      navigate("/login");
    } catch (erro) {
      erro && alert("Erro ao cadastrar os dados.");
    }
  };

  return (
    <>
      <Formulario onSubmit={handleSubmit}>
        <CampoDigitacao
          tipo="text"
          label="Nome"
          valor={nome}
          placeholder="Insira seu nome"
          onChange={setNome}
        />
        <CampoDigitacao
          tipo="email"
          label="Email"
          valor={email}
          placeholder="Insira o endereço de e-mail para login"
          onChange={setEmail}
        />
        <CampoDigitacao
          tipo="password"
          label="Senha"
          valor={senha}
          placeholder="Digite sua senha"
          onChange={setSenha}
        />
        <CampoDigitacao
          tipo="password"
          label="Confirme a senha"
          valor={senhaVerificada}
          placeholder="Confirme sua senha"
          onChange={setSenhaVerificada}
        />
        <BotaoCustomizado type="submit">Salvar</BotaoCustomizado>
      </Formulario>
    </>
  );
}
