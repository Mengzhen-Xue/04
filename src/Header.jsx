import './Header.css';
import GlobalNav from './GlobalNav';

function Header({ setPage }) {
    return (
        <header className="header">
            <a href="/homepage" className="header__logo-link">
                <img
                    src="https://plus.unsplash.com/premium_photo-1661317288946-157b70e2edab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhlYWx0aHlmb29kJTIwdmVnZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="The white mug was strewn with fruits, vegetables, with apples, ginger, carrots, blueberries, lemons, tomatoes."
                    className="header__logo"
                />
            </a>
            <h1 className="header__title">
                Nourish Everyday
            </h1>
            <GlobalNav className="header__nav" setPage={setPage} />

        </header>
    )
}

export default Header