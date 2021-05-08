import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getUser } from "../redux/actions/userAction";
import "./Login.css";

function Login() {
    // const [email, setEmail] = useState("");
    // const [password, setPasword] = useState("");

    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const onInputChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const dispatch = useDispatch();
    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(getUser(login));
        history.push("/");
    };

    const user = useSelector((state) => state.getUser);
    // const { user } = user;

    // const { name } = user;
    // console.log(name);
    // console.log(name);
    // useEffect(() => {
    //     dispatch(getUser(login));
    // });

    return (
        <div className="login">
            <div className="login__container">
                <h1>Giriş Yap</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        name="email"
                        value={login.email}
                        onChange={onInputChange}
                    />

                    <h5>Sifre</h5>
                    <input
                        type="password"
                        name="password"
                        value={login.password}
                        onChange={onInputChange}
                    />
                    <button
                        className="login__signInButton"
                        onClick={onFormSubmit}
                    >
                        Giriş Yap
                    </button>
                </form>
                <p>Hesabınız yok mu? Hemen Kayit Olun.</p>
                <Link to="/register">
                    <button className="login__registerButton">
                        Kayıt Ol
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
