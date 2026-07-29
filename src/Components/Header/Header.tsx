import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <div className="container">
                <nav className={`navbar ${scrolled ? "active" : ""}`}>
                    <img src="/logo.png" alt="Logo" className="logo" />

                    <ul>
                        <li>
                            <Link to="/">Início</Link>
                        </li>

                        <li>
                            <Link to="/servicos">Serviços</Link>
                        </li>

                        <li>
                            <Link to="/projetos">Projetos</Link>
                        </li>

                        <li>
                            <Link to="/contato">Contato</Link>
                        </li>
                </ul>
                    <button>Solicitar orçamento</button>
                </nav>
            </div>
        </header>
    );
};