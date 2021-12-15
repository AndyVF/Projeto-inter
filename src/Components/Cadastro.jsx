import React from "react"
import background from "../imgs/background.png"
import "./cadastro.css"
import logo from "../imgs/logo.png"

export default function Cadastro(props) {
    return (
        <>
            <div className="caixa" id="box">
                <img className="telaDeFundo" src={background} alt="orange" />
                    <div className="box2">
                        <form class="container2">
        
                        <img className="logo" src={logo} alt="logo" />
                            <input id="Usuario" class="form_field1" type="Nome" placeholder="NOME" required />
                            <input id="Usuario" class="form_field1" type="Sobrenome" placeholder="SOBRENOME" required />
                            <input id="Senha" class="form_field1" type="password" placeholder="SENHA" required />
                            <input id="Confirmar_Senha" class="form_field1" type="password" placeholder="CONFIRMAR SENHA" required />
                            <button onclick="gofront()" class="form_button2"><b>Cadastrar-se</b></button>
                            <h4 className="texto"><b>Já tem uma conta? <a onclick="gofront()" href="/Inter" className="botao1">Entre já!</a></b></h4>
                        </form>
                    </div>
                </div>
            
        </>
    )
}