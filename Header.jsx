const Header = () => {
    return(
        <div className="header-container">
            <div className="logo">
                <img alt="logo" src="data:image/png;base64,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" />
            </div>
            <div>
                <input type="search" />
                <button>Search</button>
            </div>
            <div>
                <ul className="links-container">
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;