import './Contacto.css';

import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaLinkedin, 
  FaGithub, 
  FaInstagram 
} from 'react-icons/fa';

export const Contacto = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Pega as chaves diretamente do arquivo .env
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: 'success',
            message: '🚀 Mensagem enviada com sucesso! Em breve entrarei em contato.'
          });
          setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
        },
        (error) => {
          setLoading(false);
          console.error('Erro no EmailJS:', error);
          setStatus({
            type: 'error',
            message: '❌ Ops! Ocorreu um erro ao enviar. Tente novamente ou use o WhatsApp.'
          });
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <span className="contact-badge">💬 Vamos conversar</span>
          <h1>Entre em <span>Contato</span></h1>
          <p>
            Tem um projeto em mente, precisa de um orçamento ou quer trocar uma ideia sobre desenvolvimento? Mande uma mensagem!
          </p>
        </div>

        <div className="contact-content">
          {/* Informações à Esquerda */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaWhatsapp />
              </div>
              <div className="info-text">
                <h3>WhatsApp / Telefone</h3>
                <p>Respostas rápidas para orçamentos</p>
                <a href="https://wa.me/5585991248809" target="_blank" rel="noopener noreferrer">
                  +55 (85) 99124-8809
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h3>E-mail</h3>
                <p>Para propostas e detalhes técnicos</p>
                <a href="mailto:fefodev@gmail.com">fefodev@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h3>Localização</h3>
                <p>Atendimento remoto para todo o Brasil</p>
                <span>Aquiraz / Fortaleza - CE</span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="social-links">
              <h3>Redes Sociais</h3>
              <div className="social-icons">
                <a href="https://github.com/jauafelipe" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/jau%C3%A3-felipe-bb2b322ab/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Envio (Direita) */}
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            
            {/* Mensagem de Feedback (Sucesso / Erro) */}
            {status.message && (
              <div className={`status-box ${status.type}`}>
                {status.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="nome">Seu Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Ex: João Silva"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Seu E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ex: joao@empresa.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="assunto">Assunto</label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                placeholder="Ex: Orçamento de Site / Sistema ERP"
                value={formData.assunto}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Sua Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Conte um pouco sobre o que você precisa..."
                value={formData.mensagem}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-send" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
              {!loading && <FaPaperPlane />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};