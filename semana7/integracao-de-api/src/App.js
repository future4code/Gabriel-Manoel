import React from 'react';
import styled from 'styled-components';
import TelaCadastro from './components/TelaCadastro';
import TelaListaUsuario from './components/TelaListaUsuario';


const Div =styled.div`
 
`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro} />
      default:
        return <div>Erro! Pagina não encontrada:</div>
    }
  }

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" })
  }

  irParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }

  render() {
    return (
      <Div>
        {this.escolheTela()}
      </Div>
    )
  }
}