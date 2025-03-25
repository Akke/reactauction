import { registerUser } from "../../services/userService";
import "./AccountRegister.css";
import { useState } from "react";
import InputField from "./InputField";

const AccountRegister = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const onFormSubmit = async (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");

        const username = e.target.username.value;
        const password = e.target.password.value;
        const verifyPassword = e.target.verify_password.value;
        const email = e.target.email.value;

        if(!username) {
            setError("Username can not be empty.");
            return;
        }

        if(!password || !verifyPassword) {
            setError("Password can not be empty.");
            return;
        }

        if(!email) {
            setError("Email can not be empty.");
            return;
        }

        if(password !== verifyPassword) {
            setError("The given password does not match.");
            return;
            
        }

        setError("");
        setSuccess("");

        const result = await registerUser(username, password, email);

        if(result.success) {
            setSuccess(result.message);
            e.target.reset();
        } else {
            setError(result.message);
        }
    }

    return (
        <div className="account-register">
            <h1>Register Account</h1>

            {error ? (<div className="error">{error}</div>) : ""}
            {success ? (<div className="success">{success}</div>) : ""}

            <form className="register-form" method="post" onSubmit={onFormSubmit}>
                <InputField type="text" label="Username" name="username" desc="Your username must be between 3 to 15 characters long." placeholder="Username" />
                <InputField type="password" label="Password" name="password" desc="Your password must be at least 8 characters long." placeholder="Password" />
                <InputField type="password" label="" name="verify_password" desc="" placeholder="Verify Password" />
                <InputField type="text" label="Email" name="email" desc="Enter a valid email for verification purposes." placeholder="Email" />

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default AccountRegister;