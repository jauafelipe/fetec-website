import "./Servicos.css";
import {
    FaLaptopCode,
    FaShoppingCart,
    FaRocket,
    FaServer,
    FaMobileAlt,
    FaTools,
    FaArrowRight
} from "react-icons/fa";

const services = [
    {
        icon: <FaLaptopCode />,
        title: "Website Institucional",
        desc: "Sites modernos para fortalecer sua marca e gerar credibilidade."
    },
    {
        icon: <FaShoppingCart />,
        title: "Lojas Virtuais",
        desc: "E-commerces completos com foco em vendas e experiência do usuário."
    },
    {
        icon: <FaRocket />,
        title: "Landing Pages",
        desc: "Páginas desenvolvidas para converter visitantes em clientes."
    },
    {
        icon: <FaServer />,
        title: "Sistemas Web",
        desc: "Sistemas personalizados para automatizar processos."
    },
    {
        icon: <FaMobileAlt />,
        title: "Sites Responsivos",
        desc: "Layouts adaptados para computadores, tablets e celulares."
    },
    {
        icon: <FaTools />,
        title: "Suporte & Manutenção",
        desc: "Atualizações, melhorias e suporte contínuo."
    }
];

export default function Servicos() {

    return (

        <main className="services-page">

            <section className="services-hero">

                <span>NOSSOS SERVIÇOS</span>

                <h1>
                    Soluções digitais
                    <br />
                    para empresas que querem crescer.
                </h1>

                <p>
                    Desenvolvemos websites, lojas virtuais e sistemas modernos,
                    focados em desempenho, design e resultados.
                </p>

                <button>
                    Solicitar orçamento
                    <FaArrowRight />
                </button>

            </section>

            <section className="services-grid">

                {services.map((service, index) => (

                    <article className="service-card" key={index}>

                        <div className="icon">

                            {service.icon}

                        </div>

                        <h2>{service.title}</h2>

                        <p>{service.desc}</p>

                    </article>

                ))}

            </section>

            <section className="workflow">

                <h2>Como trabalhamos</h2>

                <div className="steps">

                    <div>
                        <span>01</span>
                        <h3>Planejamento</h3>
                    </div>

                    <div>
                        <span>02</span>
                        <h3>Design</h3>
                    </div>

                    <div>
                        <span>03</span>
                        <h3>Desenvolvimento</h3>
                    </div>

                    <div>
                        <span>04</span>
                        <h3>Entrega</h3>
                    </div>

                </div>

            </section>

            <section className="cta-service">

                <h2>Pronto para tirar sua ideia do papel?</h2>

                <p>
                    Vamos construir um projeto moderno e profissional para o seu negócio.
                </p>

                <button>Falar conosco</button>

            </section>

        </main>

    );

}