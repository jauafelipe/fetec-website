import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Projetos } from "./pages/Projetos/Projetos";
import { Header } from "./Components/Header/Header";
import Servicos from "./pages/Servicos/Servicos";
import { Contacto } from "./pages/Contato/Contato";


function App() {
    return (
        <>
    <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contacto />} />
        </Routes>
        </>
    );
}

export default App;