import React, { useState } from "react";
import Botao from "../../components/Botao";
import CampoDigitacao from "../../components/CampoDigitacao";
import { Ocupaçao } from "../../types/IUsuario";
import axios from "axios";
import styled from "styled-components";

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

export default async function Cadastro() {
  const response = await fetch("http://localhost:3000/cors", { mode: "cors" });
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [senhaVerificada, setSenhaVerificada] = useState("");
  const [ocupacao, setOcupacao] = useState("");
  const [disciplina, setDisciplina] = useState("");

  const handleOcupacaoChange = (event) => {
    setOcupacao(event.target.value);
  };

  const handleDisciplinaChange = (event) => {
    setDisciplina(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // previne o envio padrão do formulário

    if (senha !== senhaVerificada) {
      alert("As senhas não correspondem.");
      return;
    }

    // Obter o valor selecionado do campo de entrada de ocupação
    const ocupacaoSelecionadaElement = document.querySelector<HTMLInputElement>(
      'input[name="Ocupaçao"]:checked'
    );

    // verificação adicional para garantir que o elemento retornado pelo querySelector seja convertido para um HTMLInputElement
    const ocupacaoSelecionada = ocupacaoSelecionadaElement
      ? ocupacaoSelecionadaElement.value
      : null;

    const usuario = {
      email: email,
      nome: nome,
      senha: senha,

      Ocupaçao:
        ocupacaoSelecionada === "aluno" ? Ocupaçao.Aluno : Ocupaçao.Professor,

      disciplina: disciplina,
    };

    // -----------------------------------------------------
    // Enviar dados para o backend

    const baseUrl = "http://localhost:3000";

    axios
      .post("http://localhost:3000/cadastro", {
        email,
        senha,
        nome,
        Ocupaçao: usuario.Ocupaçao,
        disciplina,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get("/foo").catch(function (error) {
      debugger;
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
  };

  // -----------------------------------------------------

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

        <label htmlFor="aluno">
          <input
            type="radio"
            name="Ocupaçao"
            value="aluno"
            checked={ocupacao === "aluno"}
            onChange={handleOcupacaoChange}
          />
          Aluno
        </label>

        <label htmlFor="professor">
          <input
            type="radio"
            name="Ocupaçao"
            value="professor"
            checked={ocupacao === "professor"}
            onChange={handleOcupacaoChange}
          />
          Professor
        </label>

        {ocupacao === "professor" && (
          <select value={disciplina} onChange={handleDisciplinaChange}>
            <option value="">Selecione uma disciplina</option>
            <option value="rc">Redes de computadores</option>
            <option value="aps">Análise e projeto de sistemas</option>
            <option value="mapn">
              Modelagem e Análise de Processo de Negócios
            </option>
            <option value="bd">Banco de Dados</option>
            <option value="lp">Linguagem de Programação</option>
            <option value="dw">Desenvolvimento Web</option>
          </select>
        )}
        <BotaoCustomizado type="submit">Avançar</BotaoCustomizado>
      </Formulario>
    </Container>
  );
}
