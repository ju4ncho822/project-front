import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [userNav, setUserNav] = useState({
        isLogged: false,
        userName: "",
    });

    return (
        <UserContext.Provider value={{ userNav, setUserNav }}>
            {children}
        </UserContext.Provider>
    );
} 