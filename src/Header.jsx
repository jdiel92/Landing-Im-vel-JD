import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className="header">
            <div className="container-header">
                <div className="logo">
                    <a href="/">JD Imóveis</a>
                </div>
                <nav className={`nav-menu ${menuAberto ? 'is-open' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#sobre" onClick={toggleMenu}>Sobre Nós</a></li>
                        <li><a href="#destaques" onClick={toggleMenu}>Novos</a></li>
                        <li><a href="#usados" onClick={toggleMenu}>Usados</a></li>
                        <li><a href="#anuncie" className="contact-button" onClick={toggleMenu}>Anuncie seu Imóvel</a></li>
                    </ul>
                </nav>
                <button className="hamburger" onClick={toggleMenu} aria-label="Abrir menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;