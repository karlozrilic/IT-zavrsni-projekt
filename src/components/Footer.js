import { links } from "./links";

function Footer() {
    return (
        <footer className="bg-dark">
            <div className="footer-top">
                <div className="social">
                    <a href="http://m.me/104533935045642" target="_blank" rel="noreferrer" className="social-icon messenger">
                        <i className="icon fab fa-facebook-messenger fa-inverse"></i>
                    </a>
                </div>
                <div className="footer-links">
                    <ul>
                        {links.map((el, key) => 
                            <li className="footer-link-item" key={key}>
                                <a className="footer-link" href={el.path}>{el.text}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <h5 className="bold">Live as a digital nomad in Zadar</h5>
                <p>&copy; Karlo Zrilić</p>
            </div>
        </footer>
    )
}

export default Footer;