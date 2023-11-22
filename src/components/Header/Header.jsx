import React from "react";
import './Header.css'
import { FaSearch } from "react-icons/fa";

const Header = () =>{
    return(
        <>
            <header>
                <div className="containerCenter">
                    <div className="barHeader">
                        <p>contato@amalfis.com.br</p>
                        <a href="https://amalfis.etion.digital/" target="_blank">Area do Cliente →</a>
                    </div>
                </div>
                <nav className="Nav">
                    <a href="/"><img className="logoNav" src="./img/Header/LogoAmalfis.png"/></a>
                    <ul>
                        <li><a href="/amalfis-uniformes">Home</a></li>
                        <li><a href="/amalfis-uniformes">Sobre</a></li>
                        <li><a href="/amalfis-uniformes">Produtos</a></li>
                        <li><a href="/amalfis-uniformes">Trabalhe Conosco</a></li>
                        <li><a href="/amalfis-uniformes">Contato</a></li>
                        <FaSearch className="search"/>
                        
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header