import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
    it("renders the Navbar with default links when the user is not logged in", () => {
        const userNav = { isLogged: false, userName: "" };

        render(
            <UserContext.Provider value={{ userNav }}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </UserContext.Provider>
        );

        expect(screen.getByText("Inicio")).toBeInTheDocument();
        expect(screen.getByText("Registro/Inicio de sesión")).toBeInTheDocument();
        expect(screen.queryByText("Hola,")).not.toBeInTheDocument();
    });

    it("renders the Navbar with the user's name when logged in", () => {
        const userNav = { isLogged: true, userName: "Juan" };

        render(
            <UserContext.Provider value={{ userNav }}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </UserContext.Provider>
        );

        expect(screen.getByText("Inicio")).toBeInTheDocument();
        expect(screen.getByText("Hola, Juan")).toBeInTheDocument();
        expect(screen.queryByText("Registro/Inicio de sesión")).not.toBeInTheDocument();
    });
});
