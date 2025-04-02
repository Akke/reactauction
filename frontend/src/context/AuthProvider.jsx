import { createContext, useEffect, useState } from "react";
import { getUsername } from "../services/userService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const cache = localStorage.getItem("user");
        if(cache) {
            setUser(JSON.parse(cache));
        } else if(!cache && user) {
            logout();
        }
    }, []);

    const login = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
    }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    }

    const idToUsername  = async (id) => {
        const result = await getUsername(id);
        return result.data.username; 
    }

    const isLoggedIn = () => {
        return user != null;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, idToUsername, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;