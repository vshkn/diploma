import React, {useState, useEffect} from "react";
import "./dist/header.css";
import {useNavigate} from "react-router-dom";

export function Header() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    const navigate = useNavigate()
    const loginNavigate = () => {
        navigate("sign-in")
    }

    return (
        <div className="header-container">
            <header>
                <img className="logo_m" src="./img/logo.svg" alt=""/>
                <div className="right_p_h">
                    <div className="input">
                        <img className="search_img" src="./img/search.svg" alt=""/>
                        <input className="header_input" type="text" placeholder="Шукай..."/>
                    </div>
                    <div className="sing_up_sect">
                        <p onClick={() => {
                            loginNavigate()
                                }}>Вхід</p>
                        <div className="red_line"></div>
                        <p>Реєстрація</p>
                    </div>
                </div>
            </header>
            <div className={`under_header`}>
                <div className="header_text">Головна</div>
                <div className="header_line"></div>
                <div className="header_text">Події</div>
                <div className="header_line"></div>
                <div className="header_text">Календар</div>
                <div className="header_line"></div>
                <div className="header_text">Про нас</div>
                <div className="header_line"></div>
                <div className="header_text">Підтримка</div>
                <div className="header_line"></div>
                <div className="header_text">Контакти</div>
            </div>
        </div>
    );
}
