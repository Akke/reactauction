import { useContext, useState } from "react";
import InputField from "../InputField/InputField";
import "./AccountLogin.css";
import { getUser, loginUser } from "../../services/userService";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const AccountLogin = () => {
    const [error, setError] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const username = e.target.username.value;
        const password = e.target.password.value;

        if(!username) {
            setError("Username can not be empty.");
            return;
        }

        if(!password) {
            setError("Password can not be empty.");
            return;
        }

        setError("");

        const result = await loginUser(username, password);

        if(result.success) {
            const userData = await getUser(result.accessToken);
            if(userData) {
                login({...userData.data, token: result.accessToken});
                e.target.reset();
                navigate("/");
            }
        } else {
            setError(result.message);
        }
    }

    return (
        <div className="account-login">
            <h1>Login</h1>

            {error ? (<div className="error">{error}</div>) : ""}

            <form className="register-form" method="post" onSubmit={onFormSubmit}>
                <InputField type="text" label="Username" name="username" desc="" placeholder="Username" />
                <InputField type="password" label="Password" name="password" desc="" placeholder="Password" />

                <button type="submit">Login</button>
                <NavLink to="/register"><button>Create Account</button></NavLink>
            </form>
        </div>
    );
}

export default AccountLogin;