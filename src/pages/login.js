import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./login.css";

export default function Login() {
    const navigate = useNavigate();
    const { setUserNav } = useContext(UserContext); 

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Inicio de sesión exitoso");
                console.log("Respuesta de la API:", data);  // Verifica que data.name exista
                setUserNav({isLogged: true, userName: data.user.name,});
                navigate("/");
            } else {
                const errorData = await response.json();
                alert("Error al iniciar sesión: " + errorData.message);
            }
        } catch (error) {
            alert("Error de red: " + error.message);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1 className="titulo">INICIAR SESIÓN</h1>
                <hr className="custom-hr" />
                <label>Email</label>
                <input
                    className="caja-texto"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <label>Contraseña</label>
                <input
                    className="caja-texto"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <hr className="custom-hr" />
                <button className="botonInic" type="submit">
                    Iniciar sesión
                </button>
                <Link to="/register">Crear cuenta</Link>
            </form>
        </div>
    );
}
