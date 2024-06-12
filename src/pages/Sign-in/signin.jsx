import React, { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "./dist/signin.css";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passType, setPassType] = useState("password");
    const [eyeState, setEyeState] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const typeChange = () => {
        if (eyeState === false) {
            setPassType("text");
            setEyeState(true);
        } else {
            setPassType("password");
            setEyeState(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log("Login successful!")
                navigate("/")
            } else {
                setError(data.message || "Login failed");
                console.error("Login error:", data.message || "Login failed");
                alert("Login Failed")
            }
        } catch (error) {
            setError("Login failed");
            console.error("Login error:", error);
        }
    };

    return (
        <div>
            <img className="logo" src="./img/logo.svg" alt="" />
            <form className="signin__form" onSubmit={handleSubmit}>
                <p className="form_heading">Вхід</p>
                <div className="input_element">
                    <label htmlFor="email">Електронна пошта</label>
                    <input
                        id="s_input"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="input_element" id="pass">
                    <label htmlFor="password">Пароль</label>
                    <img
                        onClick={typeChange}
                        className="eye"
                        src="./img/eye.svg"
                        alt=""
                    />
                    <input
                        id="s_input"
                        className="pass"
                        type={passType}
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="input_element" id="check">
                    <input type="checkbox" className="cyberpunk-checkbox" />
                    <p className="check_label">Запам’ятати мене</p>
                </div>
                <button type="submit" className="form_btn">Ввійти</button>
                {error && <p className="error_message">{error}</p>}
                <p className="for_pass">Забув пароль</p>
            </form>
            <footer className="footer">
                <div className="line"></div>
                <div className="info_section">
                    <p className="info_text">Про нас</p>
                    <div className="s_line"></div>
                    <p className="info_text">Умови і положення</p>
                    <div className="s_line"></div>
                    <p className="info_text">Конфіденційність</p>
                    <div className="s_line"></div>
                    <p className="info_text">Підтримка</p>
                    <div className="s_line"></div>
                    <p className="info_text">Контакти</p>
                </div>
                <div className="social_section">
                    <img src="./img/inst.svg" alt="" />
                    <img src="./img/face.svg" alt="" />
                    <img src="./img/teleg.svg" alt="" />
                </div>
                <p className="footer_text">© 2024 Dance Platform StepSync Co.</p>
            </footer>
        </div>
    );
}
