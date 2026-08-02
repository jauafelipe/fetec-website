import { Link } from "react-router-dom";
import "./Cta.css";
import { FaArrowRight } from "react-icons/fa6";

export const Cta = () => {
    return (
        <section className="cta">

            <div className="cta-card">

                <span className="cta-badge">
                    Vamos conversar
                </span>

                <h2>
                    Vamos transformar sua ideia
                    <br />
                    em realidade?
                </h2>

                <p>
                    Seja um website institucional, loja virtual ou sistema
                    personalizado, estamos prontos para desenvolver uma solução
                    moderna para o seu negócio.
                </p>

                <div className="cta-buttons">

                  <Link to="/contato" className="btn-primary">
                    Solicitar orçamento
                    <FaArrowRight />
                    </Link>
                   
                    <Link to="/contato" className="btn-secondary">
                        Falar no WhatsApp
                    </Link>

                </div>

            </div>

        </section>
    );
};