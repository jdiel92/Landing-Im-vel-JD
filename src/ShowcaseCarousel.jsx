import React from 'react';
import Slider from 'react-slick';
import './ShowcaseCarousel.css';

// Importe os arquivos CSS da biblioteca slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const showcaseImages = [
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605276374104-5de67d219b08?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop'
];

const ShowcaseCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Mostra 4 imagens por vez
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, // Esconde as setas de navegação
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="showcase-carousel-wrapper">
            <Slider {...settings}>
                {showcaseImages.map((img, index) => (
                    <div key={index} className="showcase-slide">
                        <img src={img} alt={`Imóvel de amostra ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ShowcaseCarousel;