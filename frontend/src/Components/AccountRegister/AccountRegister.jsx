import "./AccountRegister.css";

const AccountRegister = () => {
    return (
        <div className="account-register">
            <h1>Register Account</h1>

            <form className="register-form" method="post">
                <div className="input-field">
                    <label for="username">Username</label>
                    <p>Your username must be between 3 to 15 characters long.</p>
                    <input type="username" name="username" id="username" placeholder="Username" />
                </div>

                <div className="input-field">
                    <label for="password">Password</label>
                    <p>Your password must be at least 8 characters long.</p>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <input type="password" name="verify_password" placeholder="Verify Password" />
                </div>

                <div className="input-field">
                    <label for="email">Email</label>
                    <p>Enter a valid email for verification purposes.</p>
                    <input type="email" name="email" id="email" placeholder="John@doe.com" />
                </div>

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default AccountRegister;