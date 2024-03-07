

function RecoverPassword() {
    return(
        <section class="recovery">
            <h1><span>Reset your</span> Password</h1>
            <p>We will send you an email to rest your password</p>
            <div class="form-container">
                <form action="get">
                    <input class="email-login" id="email" type="email" placeholder="Email"/>
                </form>
                <button class="sign-in-btn">Submit</button>
            </div>
        </section>
    )
};

export default RecoverPassword;