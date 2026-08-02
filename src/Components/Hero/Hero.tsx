import { Link } from "react-router-dom";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa6";

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
            

                <span className="hero-badge">
                    🚀 Desenvolvimento Web Profissional
                </span>

                <h1>
                    Transforme Suas
                    <br />
                    <span>Ideias em Realidade</span>
                </h1>

                <p>
                    Desenvolvemos websites modernos, rápidos e profissionais
                    para empresas que desejam crescer na internet.
                    Criamos soluções sob medida, com foco em desempenho,
                    experiência do usuário e resultados.
                </p>

                <div className="hero-buttons">

                    <Link to="/contato" className="btn-primary">
                        Solicitar orçamento
                        <FaArrowRight />
                    </Link>

                    <Link to="/projetos" className="btn-secondary">
                        Ver Projetos
                    </Link>

                </div>

                <div className="hero-info">

                    <div>
                        <h2>100%</h2>
                        <span>Projetos Personalizados</span>
                    </div>

                    <div>
                        <h2>24h</h2>
                        <span>Primeiro Contato</span>
                    </div>

                    <div>
                        <h2>∞</h2>
                        <span>Suporte</span>
                    </div>

                </div>

            </div>

            <div className="hero-image">

                <div className="circle"></div>

                <img src="/logo.png" alt="Logo" />

            </div>

        </section>
    );
};