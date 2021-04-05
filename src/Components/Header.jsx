import React, { useState, useEffect } from "react";

function Header({ nav }) {
    const [menu, toggleMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (menu) {
                toggleMenu(false);
            }
        });
    });

    return (
        <section className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <text x="-10px" y="41px">
                                <tspan>TakeMe</tspan>
                            </text>
                        </svg>
                    </div>
                    <div
                        className={`list__burger ${menu ? "active" : ""}`}
                        onClick={() => toggleMenu(!menu)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`header__list ${menu ? "active" : ""}`}>
                        <ul>
                            {nav.map((link, index) => (
                                <li key={`${index}_${link}`}>
                                    <a href="#sight">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
