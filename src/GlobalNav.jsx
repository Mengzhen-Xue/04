import { useState } from 'react';
import './GlobalNav.css';

import menu from './menu';

function GlobalNav({ className, setPage }) {
    const [showMenu, setShowMenu] = useState(false);

    const listHtml = menu.map((item) => (
        <li key={item.name} className="global-nav__item">
            <a
                className="global-nav__link"
                href={item.path}
                onClick={(e) => {
                    e.preventDefault();
                    console.log(e.target.innerText);
                    setPage(e.target.innerText);
                }}
            >
                {item.name}
            </a>
        </li>
    ));

    return (
        <nav className={`global-nav ${className}`}
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}>
            <button className="global-nav__toggle">
                {showMenu ? 'Close Menu' : 'Open Menu'}
            </button>
            <ul className={`global-nav__list ${showMenu ? 'global-nav__list--show' : ''}`}>
                {listHtml}
            </ul>
        </nav>
    );
}

export default GlobalNav;
