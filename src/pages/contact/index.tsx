import { FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './style.css';

const Contact = () => {
  return (
    <aside className="contact">
      <div className="social">
        <a
          href="https://www.instagram.com/teamarmanni_diego"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight-link"
        >
          <FaInstagram
            size={32}
            style={{
              color: 'white',
              borderRadius: 6,
              background: `radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)`,
            }}
          />
          <span>@teamarmanni_diego</span>
        </a>
        <a href="#" rel="noopener noreferrer" className="highlight-link">
          <FaPhoneAlt
            size={28}
            style={{
              color: 'white',
              borderRadius: 6,
              padding: 2,
              background: 'blue',
            }}
          />
          <span>(31) 98353-6211</span>
        </a>
        <a
          href="https://wa.me/5522989652365"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight-link"
        >
          <FaWhatsapp
            size={32}
            style={{
              color: 'white',
              borderRadius: 6,
              background: '#25D366',
            }}
          />
          <span>Enviar Mensagem</span>
        </a>
      </div>
      <div className="label">
        <label>
          Av. Professor José Maurício, 381 - Lindéia, Belo Horizonte - MG,
          32400-000
        </label>
      </div>
    </aside>
  );
};

export default Contact;
