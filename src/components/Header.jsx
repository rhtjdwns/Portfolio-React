import React from "react";
import { headerNav } from "../constants/data";

const Header = () => {
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">portfolio<em>react.js</em></a>
                </div>
                <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div 
                    className="header__nav_mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex="()"
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;