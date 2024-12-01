import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email:"",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Usuario registrado con éxito:", data);
                alert("Usuario registrado con éxito");
                
            } else {
                const errorData = await response.json();
                console.error("Error al registrar:", errorData);
                alert("Error al registrar: " + errorData.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
            alert("Error de red: " + error.message);
        }
    };

    return (
        <div className="form-container">
            <form action="">
                <h1 className="titulo">REGISTRO </h1>
                <hr className="custom-hr" />
                <i className="bi bi-person-fill" />
                <label>Nuevo usuario</label>
                <input className="caja-texto" type="text" name="name" placeholder="Nombre de usuario" onChange={handleInputChange}/>

                <label>email</label>
                <input className="caja-texto" type="text" name="email" placeholder="e-mail" onChange={handleInputChange}/>

                <i className="bi bi-key-fill" />
                <label>Nueva Contraseña</label>
                <input className="caja-texto" type="text" name="password" placeholder="Contraseña" onChange={handleInputChange}/>
                <hr className="custom-hr" />
                <button className="botonInic" type="submit" onClick={handleSubmit}>registrar</button>
                <Link to="/login">iniciar sesion</Link>
            </form>
        </div>
    )
}