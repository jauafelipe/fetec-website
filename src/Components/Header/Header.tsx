import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";
import "./Header.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-wrapper">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>

        {/* Links do Menu */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
          </li>
          <li>
            <Link to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
          </li>
          <li>
            <Link to="/projetos" onClick={() => setMenuOpen(false)}>Projetos</Link>
          </li>
          <li>
            <Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link>
          </li>

          {/* Botão duplicado apenas para visualização no menu mobile */}
          <li className="mobile-cta">
            <Link to="/contato" className="btn-cta">
              Solicitar orçamento
            </Link>
          </li>

          <li className="mobile-theme-toggle">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              {theme === "dark" ? "Modo claro" : "Modo escuro"}
            </button>
          </li>
        </ul>

        {/* Botão principal (Desktop) */}
        <div className="nav-cta">
          <Link to="/contato" className="btn-cta">
            Solicitar orçamento
          </Link>
        </div>

        {/* Botão de tema (claro/escuro) */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          title={theme === "dark" ? "Modo claro" : "Modo escuro"}
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        {/* Botão Hamburguer (Mobile) */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
};