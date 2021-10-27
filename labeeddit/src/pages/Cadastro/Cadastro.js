import React from "react"
import { useHistory } from "react-router";


const Cadastro = () =>{
  const history = useHistory()

  const botao = () =>{
      history.push("/")
  }


    return(
        <div>
            <h1>Cadastro</h1>

            <form>
                <input 
                
                placeholder="nome"
                />
                <br/>
                <input
                placeholder="email"
                />
                <br/>
                <input
                placeholder="senha"
                />
                <br/>
                <button>Cadastrar</button>
            </form>
            <button onClick={botao}>Home</button>
        </div>
    )
}

export default Cadastro;