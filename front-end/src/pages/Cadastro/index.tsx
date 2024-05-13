import React, { useState } from "react";
import Botao from "../../components/Botao";
import CampoDigitacao from "../../components/CampoDigitacao";
import radioOptions from "../../components/Radio";
import DynamicRadio from "../../components/Radio";
import DynamicSelect from "../../components/Radio";

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

export default function Cadastro() {
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
    };

    console.log(usuario);

    const radioOptions = [
      { value: "aluno", label: "Aluno" },
      { value: "professor", label: "Professor" },
    ];

    const selectOptions = [
      { value: "", label: "Selecione uma disciplina" },
      { value: "rc", label: "Redes de computadores" },
      { value: "aps", label: "Análise e projeto de sistemas" },
      { value: "mapn", label: "Modelagem e Análise de Processo de Negócios" },
      { value: "bd", label: "Banco de Dados" },
      { value: "lp", label: "Linguagem de Programação" },
      { value: "dw", label: "Desenvolvimento Web" },
    ];

    // -----------------------------------------------------
    // Enviar dados para o backend

    axios
      .post("http://localhost:3000/cadastro", {
        email,
        senha,
        nome,
        Ocupaçao: usuario.Ocupaçao,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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

        <DynamicRadio
          options={Professor}
          selectedValue={professor}
          onChange={handleOcupacaoChange}
        />

        {ocupacao === "professor" && (
          <DynamicSelect
            options={selectOptions}
            value={disciplina}
            onChange={handleDisciplinaChange}
          />
        )}

        <BotaoCustomizado type="submit">Avançar</BotaoCustomizado>
      </Formulario>
    </Container>
  );
}
