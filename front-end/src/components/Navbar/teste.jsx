import { useState } from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  height: 100vh;
  width: 200px;
  left: 0;
  top: 0;
  background-color: rgba(118, 1, 47, 0.3);
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.a`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
  font-family: "Inter", sans-serif;
  weight: 600;
  padding: 10px 15px;
  color: white;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: rgba(118, 1, 47, 0.3);
  }
`;

const SubMenu = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: rgba(118, 1, 47, 0.3);
`;

const NavItem = styled.div`
  cursor: pointer;
`;

const FolderForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 8px;
  background-color: rgba(118, 1, 47, 0.3);
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(118, 1, 47, 0.3);
  }
`;

function Navbar() {
  const [abrirSubmenu, setAbrirSubmenu] = useState({});
  const [pastas, setPastas] = useState(["Pasta 1", "Pasta 2"]);
  const [nomePastaNova, setNomePastaNova] = useState("");

  const toggleSubmenu = (id) => {
    setAbrirSubmenu((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInputChange = (e) => {
    setNomePastaNova(e.target.value);
  };

  const addPasta = (e) => {
    e.preventDefault();
    if (nomePastaNova.trim() !== "") {
      setPastas((prev) => [...prev, nomePastaNova.trim()]);
      setNomePastaNova("");
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <NavContainer>
      <NavItem onClick={() => toggleSubmenu("meusDocumentos")}>
        <NavLink as="div">Meus Documentos</NavLink>
        <SubMenu isOpen={abrirSubmenu["meusDocumentos"]}>
          {pastas.map((folder, index) => (
            <NavLink
              key={index}
              href={`/${folder.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {folder}
            </NavLink>
          ))}
          <FolderForm onSubmit={addPasta} onClick={stopPropagation}>
            <Input
              type="text"
              placeholder="Nome da Pasta"
              value={nomePastaNova}
              onChange={handleInputChange}
              onClick={stopPropagation}
            />
            <Button type="submit">Adicionar Pasta</Button>
          </FolderForm>
        </SubMenu>
      </NavItem>

      <NavItem onClick={() => toggleSubmenu("planejamento")}>
        <NavLink as="div">Planejamento</NavLink>
        <SubMenu isOpen={abrirSubmenu["planejamento"]}>
          {pastas.map((pasta, index) => (
            <NavLink
              key={index}
              href={`/${pasta.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {pasta}
            </NavLink>
          ))}
        </SubMenu>
      </NavItem>

      <NavLink href="#">Outro Item</NavLink>
    </NavContainer>
  );
}

export default Navbar;
