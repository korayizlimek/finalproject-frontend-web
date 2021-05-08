import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./RegisterScreen.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { addToUser, showAllUsers } from "../redux/actions/userAction";

function Register() {
    // const [name, setName] = useState("");
    // const [surname, setSurname] = useState("");
    // const [email, setEmail] = useState("");
    // const [userName, setUserName] = useState("");
    // const [password, setPasword] = useState("");
    // const [rePassword, setRePassword] = useState("");

    const [register, setRegister] = useState({
        name: "",
        surname: "",
        email: "",
        userName: "",
        password: "",
    });

    const onInputChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    };

    const dispatch = useDispatch();

    // const AllUsers = useSelector((state) => state.users);

    // const onHandleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("button aktif");
    //     dispatch(showAllUsers());
    //     console.log("bitti");
    //     console.log(AllUsers);
    // };

    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addToUser(register));
        history.push("/login");
    };

    return (
        <React.Fragment>
            <div className="register">
                <div className="register__container">
                    <h1>Kaydol</h1>
                    <form className="form">
                        <label>İsim</label>
                        <div className="field">
                            <input
                                type="text"
                                name="name"
                                value={register.name}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="field">
                            <label>Soyisim</label>
                            <input
                                type="text"
                                name="surname"
                                value={register.surname}
                                onChange={onInputChange}
                            />
                        </div>
                        {/* <h5>Soyisim</h5> */}

                        <div className="field">
                            <label>E-mail</label>
                            <input
                                type="text"
                                name="email"
                                value={register.email}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className="field">
                            <label>Şifre</label>
                            <input
                                type="password"
                                name="password"
                                value={register.password}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className="field">
                            <label>Username</label>
                            <input
                                type="text"
                                name="userName"
                                value={register.userMame}
                                onChange={onInputChange}
                            />
                        </div>

                        <button
                            className="register__signInButton"
                            type="submit"
                            onClick={onFormSubmit}
                        >
                            Kaydol
                        </button>
                    </form>
                    <p>Hesabınız var mi? Hemen Giris Yap.</p>
                    <Link to="/login">
                        <button
                            className="register__registerButton"
                            // onClick={onHandleSubmit}
                        >
                            Giris Yap
                        </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default connect(null, { addToUser })(Register);
