import { BrowserRouter, Routes, Route } from "react-router-dom"
import PaginaBase from "./pages/PaginaBase";
import Cadastro from "./pages/Cadastro"

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;