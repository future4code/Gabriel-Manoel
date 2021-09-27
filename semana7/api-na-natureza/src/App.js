import React from "react";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
 border-bottom:1px solid;
 width:250px;
 margin-left:16px;
 &:hover{
   font-weight:bold;
   border-bottom:3px solid;
}
`

const H1 = styled.h1`
text-align:center;
`
const foguete = styled.div`
 &:hover{

 }
`

export default class App extends React.Component {

  state = {
    rockets: []
  }

  componentDidMount() {
    this.getMissons();
  }

  getMissons = () => {
    axios.get("https://api.spacexdata.com/v3/rockets")
      .then((resposta) => {
        console.log(resposta.data)
        this.setState({ rockets: resposta.data })
      }).catch((erro) => {
        console.log(erro)
      })
  }

  render() {
    const rockets = this.state.rockets.map((rocket) => {
      return (
        <Div key={rocket.rocket_id}>
          
          <p>Nome: {rocket.rocket_name}</p>
          <p>Empresa: {rocket.company}</p>
          <p>Pais: {rocket.country}</p>
          
        </Div>
      )
    })

    return (
      <div>
        <H1>FOGUETES SPACEX</H1>
        {rockets}</div>
    )
  }
}