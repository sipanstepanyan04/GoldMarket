import React, {useState} from 'react';
import logo from "../../../Icons/logo.png"
import open from "../../../Icons/open.png"
import close from "../../../Icons/close.png"
import heart from "../../../Icons/heart.png"
import user from "../../../Icons/user.png"
import basket from "../../../Icons/basket.png"
import "./Header.scss"

const flags = [
    {
        id: 0,
        value: "ENG",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png"
    },
    {
        id: 1,
        value: "ARM",
        url: "https://image.shutterstock.com/image-vector/national-flag-armenia-modern-banner-260nw-1086444944.jpg"
    },
    {
        id: 2,
        value: "RUS",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_Russia_%28bordered%29.svg/2560px-Flag_of_Russia_%28bordered%29.svg.png"
    }
]


function Header() {

    const [flagState, setFlagState] = useState(flags);
    const [flagChoose, setFlagChoose] = useState(true);
    const [id, setId] = useState(0)

    const handleChangeLanguage = (id) => {
        setId(id);
        setFlagChoose(true)
    }

    return (
        <div className={"container"}>
            <div className={"container_top"}>
                <div className={"flag_container"}>
                    {
                        flagChoose
                            ?
                            <div className={"flags"} onClick={() => setFlagChoose(false)}>
                                <img className={"flagImg"} src={flagState[id].url} alt=""/>
                                <p className={"language"}>{flagState[id].value}</p>
                                <img className={"png"}
                                     src={open}
                                     alt=""/>
                            </div>
                            :
                            <div>
                                {
                                    flagState.map(flag => {
                                        return (
                                            <div className={"flags"} onClick={() => handleChangeLanguage(flag.id)}>
                                                <img className={"flagImg"} src={flag.url} alt=""/>
                                                <p className={"language"}>{flag.value}</p>
                                                <img className={"png"}
                                                     src={close}
                                                     alt=""/>
                                            </div>
                                        )
                                    })
                                }</div>
                    }
                </div>
                <div className={"value_container"}>
                    {
                        flagChoose
                            ?
                            <div className={"flags"} onClick={() => setFlagChoose(false)}>
                                <p className={"language"}>{flagState[id].value} </p>
                                <p>($)</p>

                                <img className={"png"}
                                     src={open}
                                     alt=""/>
                            </div>
                            :
                            <div>
                                {
                                    flagState.map(flag => {
                                        return (
                                            <div className={"flags"} onClick={() => handleChangeLanguage(flag.id)}>
                                                <p className={"language"}>{flag.value}</p>
                                                <img className={"png"}
                                                     src={close}
                                                     alt=""/>
                                            </div>
                                        )
                                    })
                                }</div>
                    }

                </div>
            </div>
            <img src={logo} alt={""} className={"logo"}/>
            <div className={"container1"}>
                <div className={"icon-login-wishlist"}>
                    <div className={"text_and_heart"}>
                        <p>WISHLIST</p>
                        <img className={"icon"}
                             src={heart}
                             alt=""/>
                    </div>
                    <p>(0)</p>
                </div>
                <div className={"icon-login-wishlist"}>
                    <p>LOGIN</p>
                    <img className={"icon"}
                         src={user}
                         alt=""/>
                </div>
                <div className={"icon-login-wishlist"}>
                    <p>CART</p>
                    <img className={"icon"} src={basket} alt=""/>
                    <p>(0)</p>
                </div>
            </div>
        </div>
    );
};

export default Header;