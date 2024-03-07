import { NavLink } from "react-router-dom";


function Login() {
    return (
        <section class="login">
            <h1>Login</h1>
            <div class="form-container">
                <form action="get">
                    <input class="email-login" id="email" type="email" placeholder="Email"/>
                    <input class="password-login" id="password" type="text" placeholder="Password"/>
                </form>
                <NavLink class="forgot-password-link" to="/login/recover-password">Forgot your password?</NavLink>
                <button class="sign-in-btn">Sign In</button>
                <a class="create-acc-link" href="sign-up.html">Create account</a>
            </div>
        </section>
    )
};

export default Login;