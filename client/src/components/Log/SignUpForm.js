import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlPassword, setControlPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const terms = document.getElementById('terms');
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
        const passwordConfirmError = document.querySelector('.password-confirm.error');
        const termsError = document.querySelector('.terms.error');

        passwordConfirmError.innerHTML = "";
        termsError.innerHTML = "";

        if (password !== controlPassword || !terms.checked) {
            if (password !== controlPassword)
                passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";
            if (!terms.checked)
                termsError.innerHTML = "Veuillez valider les conditions générales"
        } else {
            await axios({
                method: "POST",
                url: `${process.env.REACT_APP_API_URL}api/auth/signup`,
                data: {

                    email,
                    password

                }
            })
                .then((res) => {
                    console.log(res);
                    if (res.data.errors) {
                        emailError.innerHTML = res.data.errors.email;
                        passwordError.innerHTML = res.data.errors.password;
                    } else {
                        setFormSubmit(true);
                    }
                })
                .catch((err) => console.log(err))
        }

    }

    return (
        <>
            {formSubmit ? (
                <>
                    <SignInForm />
                    <span></span>
                    <h4 className="success">Enregistrement réussi, veuillez vous connecter</h4>
                </>
            ) : (
                <form action="" onSubmit={handleRegister} id="sign-up-form">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                    <div className="email error"></div>
                    <label htmlFor="password">Mot de Passe</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                    <div className="password error"></div>
                    <label htmlFor="password-conf">Confirmer mot de Passe</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password-conf"
                        onChange={(e) => setControlPassword(e.target.value)}
                        value={controlPassword} />
                    <div className="password-confirm error"></div>
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">J'accepte les <a href="/" target="_blank" rel="noopener noreferrer">Conditions Utilisateur</a></label>
                    <div className="terms error"></div>
                    <br />
                    <input type="submit" value="Valider Inscription"></input>
                </form>
            )}
        </>
    )
}

export default SignUpForm;