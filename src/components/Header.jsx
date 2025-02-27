import React, { useState } from "react";

const Header = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }

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

/* 데이터를 따로 작업하여 관리함으로써 코드의 가독성과 유지보수성을 향상. */
const headerNav = [
    {
        title: "intro",
        url: "#intro",
    },
    {
        title: "skill",
        url: "#skill",
    },
    {
        title: "site",
        url: "#site",
    },
    {
        title: "portfolio",
        url: "#port",
    },
    {
        title: "contact",
        url: "#contact",
    },
]

export default Header;