import React from 'react';
import './AnnounceForm.css';

const AnnounceForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        alert('Obrigado! Seus dados foram enviados. Entraremos em contato em breve.');
        e.target.reset(); // Limpa o formulário após o envio
    };

    return (
        <section id="anuncie" className="announce-form-section">
            <div className="container">
                <h2>Anuncie seu Imóvel Conosco</h2>
                <p>Preencha o formulário abaixo e nossa equipe entrará em contato para dar o próximo passo.</p>
                <form className="announce-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome Completo</label>
                        <input type="text" id="name" name="name" placeholder="Seu nome" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="seu.email@exemplo.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefone / WhatsApp</label>
                        <input type="tel" id="phone" name="phone" placeholder="(XX) XXXXX-XXXX" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Endereço do Imóvel</label>
                        <input type="text" id="address" name="address" placeholder="Rua, número, bairro, cidade" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="photos">Fotos do Imóvel</label>
                        <input type="file" id="photos" name="photos" accept="image/*" multiple />
                    </div>
                    <button type="submit" className="submit-button">Enviar Dados</button>
                </form>
            </div>
        </section>
    );
};

export default AnnounceForm;