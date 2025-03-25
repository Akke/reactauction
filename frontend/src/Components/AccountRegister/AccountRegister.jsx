import { registerUser } from "../../services/userService";
import "./AccountRegister.css";
import { useState } from "react";

const AccountRegister = () => {
    const [error, setError] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        const verifyPassword = e.target.verify_password.value;
        const email = e.target.email.value;

        if(password === verifyPassword) {
            registerUser(username, password)
        } else {
            setError("The given password does not match.");
        }
    }
    return (
        <div className="account-register">
            <h1>Register Account</h1>

            {error ? error : ""}

            <form className="register-form" method="post" onSubmit={onFormSubmit}>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <p>Your username must be between 3 to 15 characters long.</p>
                    <input type="username" name="username" id="username" placeholder="Username" />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <p>Your password must be at least 8 characters long.</p>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <input type="password" name="verify_password" placeholder="Verify Password" />
                </div>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <p>Enter a valid email for verification purposes.</p>
                    <input type="email" name="email" id="email" placeholder="John@doe.com" />
                </div>

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default AccountRegister;