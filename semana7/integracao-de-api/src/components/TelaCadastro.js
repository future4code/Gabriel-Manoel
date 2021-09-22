import React from "react";
import axios from "axios"
import styled from "styled-components";


const Div = styled.div`

display:grid;
justify-content:center;
gap:10px;
border:1px solid;
width:450px;
height:250px;
margin:36px auto;
padding:16px;
`

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    HandleNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value })

    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body, {
            headers: {
                Authorization: "Gabriel-Manoel-Maryam"
            }
        })
            .then((resposta) => {
                alert("Usuário cadastrado(a) com sucesso!")
                this.setState({ nome: "", email: "" })
            })
            .catch((erro) => {
                alert(erro.response.data.message)
            })

    }

    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista de Usuários</button>
                <Div>
                    <h2>Cadastro</h2>
                    <input
                        placeholder={"nome"}
                        value={this.state.nome}
                        onChange={this.HandleNome}
                    />
                    <input
                        placeholder={"e-mail"}
                        value={this.state.email}
                        onChange={this.handleEmail}
                    />
                    <button onClick={this.fazerCadastro}>cadastro</button>
                </Div>
            </div>
        )
    }
}