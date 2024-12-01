import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./navbar.css";

export default function Navbar() {
    const { userNav } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <i className="bi bi-pc-display" />
                    <span className="text-primary">TechPrice</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarS"
                    aria-controls="navbarS"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarS">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Inicio</Link>
                        </li>
                        {!userNav.isLogged ? (
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Registro/Inicio de sesión
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <span className="nav-link">
                                    Hola, {userNav.userName}
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
