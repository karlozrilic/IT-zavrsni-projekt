import { useLocation } from "react-router-dom";
import { links } from "../json/links";

function Navigation() {
    const location = useLocation();
    return (
        <>
        <div className="navbar-top">
            <h2>Live as a digital nomad in Zadar</h2>
        </div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className={location.pathname === "/" ? "navbar-brand active" : "navbar-brand"} href="/"><i className="fas fa-home"></i></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((el, key) => 
                            <li className="nav-item" key={key}>
                                {el.path === location.pathname ?
                                    <a className="nav-link active" aria-current="page" href={el.path}>{el.text}</a>
                                :
                                    <a className="nav-link" href={el.path}>{el.text}</a>
                                }
                            </li>
                        )}
                        {/*
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        */}
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navigation;