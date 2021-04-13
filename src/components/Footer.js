import { links } from "./links";

function Footer() {
    return (
        <footer className="bg-dark">
            <div className="footer-top">
                <div className="social">
                    <a href="http://m.me/104533935045642" target="_blank" rel="noreferrer" className="social-icon messenger">
                        <i className="icon fab fa-facebook-messenger fa-inverse"></i>
                    </a>
                    <a href="#" /*href="https://wa.me/0955127131?text=Send%20!commands%20for%20list%20of%20commands"*/ target="_blank" rel="noreferrer" className="social-icon whatsapp">
                        <i className="icon fab fa-whatsapp"></i>
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