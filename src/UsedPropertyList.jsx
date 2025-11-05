import React from 'react';
import './PropertyList.css'; // Reutilizando os estilos da lista de propriedades

const usedProperties = [
    {
   
        id: 10,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
        description: 'Apartamento com varanda gourmet',
        neighborhood: 'Boa Viagem',
        city: 'Recife',
        price: 'R$ 810.000'
    },
    {
        id: 11,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop',
        description: 'Imóvel comercial em avenida movimentada',
        neighborhood: 'Centro',
        city: 'Porto Alegre',
        price: 'R$ 1.100.000'
    },
    {
        id: 12,
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop',
        description: 'Casa de 2 andares em condomínio fechado',
        neighborhood: 'Lago Sul',
        city: 'Brasília',
        price: 'R$ 1.500.000'
    },
    {
        id: 13,
        image: 'https://www.escolademocrata.com.br/assets/img/blog/1011354-08042016_dsc9539.jpg',
        description: 'Apartamento de 1 quarto, ideal para investir',
        neighborhood: 'Meireles',
        city: 'Fortaleza',
        price: 'R$ 450.000'
    },
    {
        id: 14,
        image: 'https://girosa.com.br/wp-content/uploads/2025/04/imovel-minha-casa-minha-vida-marcelo-camargo-agbrasil.webp',
        description: 'Sítio com casa principal e de caseiro',
        neighborhood: 'Zona Rural',
        city: 'Petrópolis',
        price: 'R$ 950.000'
    }
];

const UsedPropertyList = () => {
    return (
        <section className="property-list">
            <div className="container">
                <h2>Imóveis Usados</h2>
                <div className="property-grid">
                    {usedProperties.map((property) => (
                        <div key={property.id} className="property-card">
                            <img src={property.image} alt={property.description} />
                            <div className="property-card-content">
                                <h3>{property.description}</h3>
                                <p className="location">{property.neighborhood}, {property.city}</p>
                                <p className="price">{property.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsedPropertyList;