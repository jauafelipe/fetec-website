import "./Footer.css";
import {
    FaInstagram,
    FaWhatsapp,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Empresa */}
                <div className="footer-brand">

                    <img src="/logo.png" alt="Logo" />

                    <h2>Transformando Ideias em Realidade</h2>

                    <p>
                        Desenvolvemos websites modernos,
                        lojas virtuais e soluções digitais
                        para empresas que desejam crescer.
                    </p>

                </div>

                {/* Links */}
                <div className="footer-links">

                    <div>
                        <h3>Navegação</h3>

                        <a href="#">Início</a>
                        <a href="#">Serviços</a>
                        <a href="#">Projetos</a>
                        <a href="#">Contato</a>
                    </div>

                    <div>
                        <h3>Serviços</h3>

                        <a href="#">Websites</a>
                        <a href="#">Landing Pages</a>
                        <a href="#">Lojas Virtuais</a>
                        <a href="#">Sistemas Web</a>
                    </div>

                    <div>
                        <h3>Contato</h3>

                        <a href="#">WhatsApp</a>
                        <a href="#">Instagram</a>
                        <a href="#">Email</a>
                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 Todos os direitos reservados.
                </p>

                <div className="socials">

                    <a href="#">
                        <FaInstagram />
                    </a>

                    <a href="#">
                        <FaWhatsapp />
                    </a>

                    <a href="#">
                        <FaLinkedin />
                    </a>

                    <a href="#">
                        <FaGithub />
                    </a>

                </div>

            </div>

        </footer>
    );
};