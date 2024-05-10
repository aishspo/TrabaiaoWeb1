import styled from "styled-components";
import logo from "./assets/Logo.png";
import './assets/index.css'


const CabecalhoEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4em;
  background-color: #76012f;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const LinkEstilizado = styled.a`
  font-weight: 700;
`;


function Cabecalho() {
  return (
    <CabecalhoEstilizado>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <img src={logo} alt="Logo de Sistema Acadêmico Geral Universitário" />
      <Container>
      
      <LinkEstilizado href='/'>
        <span class="material-symbols-outlined">
          notifications_active
        </span>
      </LinkEstilizado>

      <LinkEstilizado href='/'>
      <span class="material-symbols-outlined">
        chat_bubble
      </span>
      </LinkEstilizado>

      <LinkEstilizado href='/'>
      <span class="material-symbols-outlined">
        settings
      </span>
      </LinkEstilizado>

      </Container>
    </CabecalhoEstilizado>
  );
}

export default Cabecalho;
