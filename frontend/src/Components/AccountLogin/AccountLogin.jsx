import { useState } from "react";
import InputField from "../InputField/InputField";
import "./AccountLogin.css";
import { getUser, loginUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";

const AccountLogin = () => {
    const [error, setError] = useState("");

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
            console.log(result)
            const userData = await getUser(result.accessToken);
            if(userData) {
                localStorage.setItem("user", JSON.stringify(userData.data));
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
            </form>
        </div>
    );
}

export default AccountLogin;