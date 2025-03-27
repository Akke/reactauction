import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const cache = localStorage.getItem("user")
        if(cache) {
            setUser(JSON.parse(cache))
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

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;