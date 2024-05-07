import { useState } from "react";
import Botao from "../../components/Botao";
import CampoDigitacao from "../../components/CampoDigitacao";
import IUsuario from "../../types/IUsuario";
import { Ocupaçao } from "../../types/IUsuario";
import usePost from "../../usePost";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";

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
  const [senhaVerificada, setSenhaVerificada] = useState("");

  const { cadastrarDados, erro, sucesso } = usePost();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // previne o envio padrão do formulário

    if (senha !== senhaVerificada) {
      alert("As senhas não correspondem.");
      return;
    }

    // Obter o valor selecionado do campo de entrada de rádio de ocupação
    const ocupacaoSelecionada: string | null = (
      document.querySelector(
        'input[name="ocupacao"]:checked'
      ) as HTMLInputElement
    )?.value;

    const usuario: IUsuario = {
      email: email,
      nome: nome,
      senha: senha,
      Ocupaçao: ocupacaoSelecionada === 'aluno' ? Ocupaçao.Aluno : Ocupaçao.Professor
    };
    // aa
    console.log(usuario);
  };

  return (
    <Container>
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

        <input type="radio" name="Ocupaçao" value="aluno" />
        <label htmlFor="aluno">Aluno</label>

        <input type="radio" name="Ocupaçao" value="professor" />
        <label htmlFor="professor">Professor</label>

        <BotaoCustomizado type="submit">Avançar</BotaoCustomizado>
      </Formulario>
    </Container>
  );
}
