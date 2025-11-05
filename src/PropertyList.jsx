import React from 'react';
import './PropertyList.css';

const properties = [
    {
        id: 1,
        image: 'https://static.olx.com.br/recommendation/home/subcategory-filters/real-estate/imoveis-novos.webp',
        description: 'Casa moderna com 3 quartos e piscina',
        neighborhood: 'Jardim Botânico',
        city: 'Rio de Janeiro',
        price: 'R$ 1.200.000'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        description: 'Apartamento aconchegante perto do metrô',
        neighborhood: 'Vila Madalena',
        city: 'São Paulo',
        price: 'R$ 850.000'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
        description: 'Casa espaçosa com vista para o mar',
        neighborhood: 'Jurerê Internacional',
        city: 'Florianópolis',
        price: 'R$ 2.500.000'
    },
    {
        id: 4,
        image: 'https://www.papoimobiliario.com/wp-content/uploads/2017/02/imovel-de-luxo.jpg',
        description: 'Loft industrial no centro da cidade',
        neighborhood: 'Centro',
        city: 'Curitiba',
        price: 'R$ 600.000'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
        description: 'Cobertura duplex com área gourmet',
        neighborhood: 'Savassi',
        city: 'Belo Horizonte',
        price: 'R$ 1.800.000'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2070&auto=format&fit=crop',
        description: 'Casa de campo com 4 suítes',
        neighborhood: 'Alphaville',
        city: 'Barueri',
        price: 'R$ 3.100.000'
    }
];

const PropertyList = () => {
    return (
        <section className="property-list">
            <div className="container">
                <h2>Imóveis Novos</h2>
                <div className="property-grid">
                    {properties.map((property) => (
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

export default PropertyList;