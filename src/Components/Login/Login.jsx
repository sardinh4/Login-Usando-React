import React, { useState } from "react";
import './Login.css'

import user_icon from './Assets/person.png'
import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'

const Login = () => {
        const [action,setAction] = useState("Entrar");

    return (

        

        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
            </div>
            <div className="inputs">
                {action==="Entrar"?<div></div>:<div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Nome" />
                </div>}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Senha"/>
                </div>
            </div>
            {action==="Cadastrar"?<div></div>:<div className="forgot-password"><span>Esqueci a Senha </span></div>}
            <div className="submit-container">
                <div className={action==="Entrar"?"submit backgroundgray":"submit"} onClick={()=>{setAction("Cadastrar")}}>Cadastrar</div>
                <div className={action==="Criar Conta"?"submit backgroundgray":"submit"}onClick={()=>{setAction("Entrar")}}>Entrar</div>
            </div>
        </div>
    )

}

export default Login