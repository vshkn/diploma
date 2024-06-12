import React from "react";
import "./dist/main.css";
import {Header} from "../../components/header/header";

export function MainPage() {


    return (
        <div className="page">
            <Header/>
            <div className="banner">
                <img className="banner_img" src="./img/homeph.png" alt="" />
                <div className="banner_text">
                    <p className="banner_top_t">Платформа для танцювальної спільноти: для обміну досвідом та спільного навчання</p>
                    <p className="banner_bottomn_t">Ласкаво просимо на наш сайт для танцюристів усіх рівнів та стилів! Знайдіть натхнення, навчайтеся та спілкуйтеся в нашій активній танцювальній спільноті.</p>
                    <p className="banner_bottomn_t" id="last">Дізнайтеся, танцюйте, творіть: ваша танцювальна спільнота чекає на вас!</p>
                    <div className="btn_group">
                        <div className="start">
                            Почати
                        </div>
                        <div className="watch_t">
                            Переглянути трейлер
                        </div>
                    </div>
                </div>
            </div>
            <div className="events">
                <div className="events_heading">НАЙБЛИЖЧІ ТАНЦЮВАЛЬНІ ПОДІЇ</div>
                <div className="calendar_btn">КАЛЕНДАР</div>
                <div className="name">
                    Світлана Сакаль, Львів
                    <div className="date_c">14 липня</div>

                </div>
                <div className="tickets_btn">Купити квитки</div>
                <div className="name">
                    Global dance Camp, Львів
                    <div className="date_c">14 липня</div>
                </div>
                

                <div className="tickets_btn">Детальніше</div>
            </div>
            <div className="third_section">
                <p className="third_heading">Відеоархів: навчайтесь, натхненнюйтеся та танцюйте разом з нами!</p>
                <div className="third_text">Перегляньте наші відеоуроки, майстер-класи та виступи від талановитих танцюристів з усього світу. Вивчайте нові техніки, діліться інсайтами та знайомтеся з різноманітними стилями танцю. Насолоджуйтеся танцювальними досягненнями та знайомтесь зі світом танцю разом з нами!</div>
                <img src="./img/image.png" alt="" />
            </div>
            <div className="new_workshop">
                <p className="workshop_heading">Нові майстер-класи додаються кожного місяця</p>
                <div className="work_section">
                    <div className="workshop">
                        <div className="soon">Скоро</div>
                        <div className="workoshop_text_sect">
                            <p className="workshop_title">Психологія танцю</p>
                            <p className="workshop_text">Навчіться розуміти свій розум і 
                                відкрийте для себе ефективні способи покращити
                                свою продуктивність як танцюриста</p>
                        </div>
                        <img src="./img/first.png" alt="" className="first_img" />
                    </div>
                    <div className="workshop">
                        <div className="soon">Скоро</div>
                        <div className="workoshop_text_sect">
                            <p className="workshop_title">Заняття контемпом</p>
                            <p className="workshop_text">Різноманітні заняття балетом для розвитку 
                            ваших навичок на будь-якому рівні.</p>
                        </div>
                        <img src="./img/second.png" alt="" className="first_img" />
                    </div>
                    <div className="workshop">
                        <div className="soon">Скоро</div>
                        <div className="workoshop_text_sect">
                            <p className="workshop_title">Заняття контемпом</p>
                            <p className="workshop_text">Різноманітні заняття балетом для розвитку 
                            ваших навичок на будь-якому рівні.</p>
                        </div>
                        <img src="./img/third.png" alt="" className="first_img" />
                    </div>
                </div>
            </div>
            <div className="about_section">
                <img className="about_img" src="./img/about.png" alt="" />
                <div className="about_right">
                    <div className="about_text_sec">
                        <p className="about_heading">Про нас</p>
                        <p className="about_rext"> Наша спільнота, що об'єднує танцюристів будь якого рівня і стилю. Ми надаємо можливості для навчання, спілкування та співпраці з іншими учасниками.
                        Приєднуйтесь до нас, щоб ділитися досвідом, 
                        отримувати нові знання та знайти інспірацію у 
                        танцювальній суспільноті!</p>
                    </div>
                </div>
            </div>
            <div className="about_section">
                <div className="about_right">
                    <div className="about_text_sec">
                        <p className="about_heading">Про підписку</p>
                        <p className="about_rext"> Підписка - це шлях отримувати оновлення про нові події, майстер-класи та спеціальні пропозиції спільноти. Приєднуйтесь до нашої підписки, щоб бути в курсі всіх цікавих подій та можливостей для вашого розвитку у світі танців!</p>
                    </div>
                </div>
                <img className="about_img" src="./img/sub.png" alt="" />
                
            </div>
            <footer className="footer" id = "footer">
                <img id = "img" className="logo_f" src="./img/logo.svg" alt="" />

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