import "./Services.css";
import {
    FaLaptopCode,
    FaShoppingCart,
    FaRocket,
    FaMobileAlt,
    FaServer,
    FaTools,
} from "react-icons/fa";

export const Services = () => {
    const services = [
        {
            icon: <FaLaptopCode />,
            title: "Websites Institucionais",
            desc: "Sites modernos para fortalecer a presença digital da sua empresa."
        },
        {
            icon: <FaShoppingCart />,
            title: "Lojas Virtuais",
            desc: "E-commerces rápidos, seguros e preparados para vender."
        },
        {
            icon: <FaRocket />,
            title: "Landing Pages",
            desc: "Páginas focadas em conversão para campanhas e anúncios."
        },
        {
            icon: <FaMobileAlt />,
            title: "Sites Responsivos",
            desc: "Experiência perfeita em celulares, tablets e computadores."
        },
        {
            icon: <FaServer />,
            title: "Hospedagem",
            desc: "Configuração, publicação e gerenciamento do seu site."
        },
        {
            icon: <FaTools />,
            title: "Suporte & Manutenção",
            desc: "Atualizações, melhorias e acompanhamento contínuo."
        }
    ];

    return (
        <section className="services">

            <div className="services-header">
                <span>NOSSOS SERVIÇOS</span>

                <h2>
                    Soluções completas para o seu negócio
                </h2>

                <p>
                    Desenvolvemos soluções digitais modernas, com foco em desempenho,
                    design e resultados para sua empresa.
                </p>
            </div>

            <div className="services-grid">

                {services.map((service, index) => (
                    <div className="service-card" key={index}>

                        <div className="service-icon">
                            {service.icon}
                        </div>

                        <h3>{service.title}</h3>

                        <p>{service.desc}</p>

                    </div>
                ))}

            </div>

        </section>
    );
};