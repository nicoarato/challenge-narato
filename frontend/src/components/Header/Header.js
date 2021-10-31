import SearchBox from "../SearchBox";

import "./Header.scss";

import logo from '../../assets/Logo_ML.png';



export function Header() {
    return (
        <header>
            <a href="https://www.mercadolibre.com.ar">

                <img
                    alt="Mercado Libre"
                    className="header-logo"
                    src={logo}
                />
            </a>
            <SearchBox />
        </header>
    );
}

