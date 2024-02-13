import './Footer.css';
import React from 'react'

const Footer = () => {
    return (
        <footer className="disclamer-premium">
            <div className="text">
                <p className="disclamer-premium__title"> Testar o Premium de graça</p>
                <p className="disclamer-premium__subtitle"></p>
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns 
                    anucios. Não precisa de cartão de credito.
            </div>
            <div className="button">
                <button>Inscreva-se gratis</button>
            </div>
        </footer>
    )
};

export default Footer;