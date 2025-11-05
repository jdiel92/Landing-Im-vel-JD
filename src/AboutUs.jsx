import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section id="sobre" className="about-us-section">
            <div className="container">
                <div className="about-us-content">
                    <div className="about-us-image">
                        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" alt="Equipe da JD Imóveis" />
                    </div>
                    <div className="about-us-text">
                        <h2>Sobre a JD Imóveis</h2>
                        <p>
                            Com mais de 10 anos de experiência no mercado, a JD Imóveis se consolidou como uma referência em confiança e excelência. Nossa missão é conectar pessoas aos seus lares ideais, oferecendo um serviço personalizado e transparente.
                        </p>
                        <p>
                            Nossa equipe de especialistas está sempre pronta para entender suas necessidades e encontrar as melhores oportunidades, seja para compra, venda ou locação.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;