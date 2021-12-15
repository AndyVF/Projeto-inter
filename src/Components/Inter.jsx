import React from "react"
import background from "../imgs/background.png"
import "./inter.css"
import logo from "../imgs/logo.png"

export default function inter() {
    return (
        <>
            <div className="container" id="box">
                <img className="fundo" src={background} alt="orange" />
                <div className="front" id="front">
                    <form className="login">
                        <img className="logo" src={logo} alt="logo" />
                        <input id="Usuario" class="form_field" type="Email" placeholder="EMAIL" required />
                        <input id="Senha" class="form_field" type="password" placeholder="SENHA" required />
                        <br /> <br />
                        <button type="button" onclick="validUserForm()" class="form_button"><b>Entrar</b></button>
                        <h4 className="text"><b>Ainda não é cadastrado? <a onclick="goback()" href="/cadastro" className="botao">Cadastre-se já!</a></b></h4>
                    </form>
                
                </div>
            </div>
            
        </>
    )
}