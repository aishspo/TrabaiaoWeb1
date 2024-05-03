import styled from "styled-components";
import { useState } from 'react';
// const NavbarEstilizada = styled.nav`
//   display: flex;
//   flex-direction: column;
//   background-color: rgba(118, 1, 47, 0.3);
//   height: 100vh;
//   width: 16.25rem;
// `;

// const LinkTitulo = styled.a`
//     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
//     color: #fff;
//     font-family: "Inter", sans-serif;
//     font-weight: 600;
//     font-size: 1.25rem;
//     background-color: rgba(118, 1, 47, 0.5);
//     border-radius: 18px;
//     width: 16rem;
//     height: 2.8rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
    
// `




// Estilos para a navbar
const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px 20px;
`;

const NavItem = styled.div`
  cursor: pointer;
  &:hover {
    color: #aaa;
  }
`;

const Submenu = styled.div`
  background-color: #444;
  display: ${({ show }) => (show ? 'block' : 'none')};
  padding: 5px 0;
  position: absolute;
  margin-top: 5px;
  width: 200px;
`;

const SubmenuItem = styled.div`
  padding: 8px 20px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <NavbarContainer>
      <NavItem onClick={() => setShowSubmenu(!showSubmenu)}>
        Meus Documentos
      </NavItem>
      <Submenu show={showSubmenu}>
        <SubmenuItem>Pasta</SubmenuItem>
        <SubmenuItem>Adicionar Nova Pasta</SubmenuItem>
      </Submenu>
    </NavbarContainer>
  );
};

export default Navbar;


// export default function Navbar() {
//     return (
//         <NavbarEstilizada>
//             <LinkTitulo href="/">
//             Meus documentos</LinkTitulo>
//         <p>Oi</p>
//         </NavbarEstilizada>
//     )
// }