import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Navbar from "../../components/Navbar";

export default function PaginaBase() {
    return (
        <>
            <Cabecalho />
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}