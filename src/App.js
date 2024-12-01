import './App.css';
import Navbar from "./components/navbar";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {
    return (
        <UserProvider>
            <div>
                <Navbar />
                <Outlet />
            </div>
        </UserProvider>
    );
}

export default App;