import { Link } from "react-router-dom";
import "./Projetos.css";
import { FaArrowRight } from "react-icons/fa6";

const projetos = [
    {
        imagem: "./loja_virtual.png",
        categoria: "E-commerce",
        titulo: "Loja Virtual Moderna",
        descricao:
            "Projeto focado em performance, UX e aumento de conversões.",
        arquivo: "/apresentavel/loja-virtual/index.html"
    },
    {
        imagem: "./imobiliaria.png",
        categoria: "Website",
        titulo: "Site para Imobiliária",
        descricao:
            "Website responsivo com busca inteligente e design premium.",
        arquivo: "/apresentavel/imobiliaria/index.html"
    },
    {
        imagem: "./painel_adm.png",
        categoria: "Sistema Web",
        titulo: "Dashboard Administrativo",
        descricao:
            "Painel para gestão de clientes, pedidos e indicadores.",
        arquivo: "/apresentavel/painel-adm/index.html"
    },
    {
        imagem: "./lading_page.png",
        categoria: "Landing Page",
        titulo: "Página de Alta Conversão",
        descricao:
            "Landing Page otimizada para campanhas de marketing.",
        arquivo: "/apresentavel/lading-page/index.html"
    }
];

export const Projetos = () => {
    return (
        <section className="projects">

            <div className="projects-header">

                <span>PORTFÓLIO</span>

                <h2>Projetos em Destaque</h2>

                <p>
                    Alguns exemplos do padrão de qualidade que buscamos
                    entregar em cada projeto.
                </p>

            </div>

            <div className="projects-grid">

                {projetos.map((projeto, index) => (

                    <div className="project-card" key={index}>

                        <img
                            src={projeto.imagem}
                            alt={projeto.titulo}
                        />

                        <div className="project-content">

                            <small>{projeto.categoria}</small>

                            <h3>{projeto.titulo}</h3>
                            <p>{projeto.descricao}</p>
                            <Link to={projeto.arquivo} target="_blank">
                                <button>
                                    Ver Projeto
                                    <FaArrowRight />
                                </button>
                            </Link>


                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};