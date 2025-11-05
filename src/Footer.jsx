import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>JD Imóveis</h3>
                        <p>Encontrando o lar dos seus sonhos.</p>
                        <p>&copy; {new Date().getFullYear()} JD Imóveis. Todos os direitos reservados.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#destaques">Destaques</a></li>
                            <li><a href="#usados">Usados</a></li>
                            <li><a href="#anuncie">Anuncie seu Imóvel</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Siga-nos</h4>
                        <div className="social-icons">
                            {/* Substitua '#' pelos links das suas redes sociais */}
                            <a href="#" aria-label="Facebook">FB</a>
                            <a href="#" aria-label="Instagram">IN</a>
                            <a href="#" aria-label="LinkedIn">LI</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;