import axios from "axios";
import React from "react";
import styled from "styled-components";
import Passaro from "./img/images.jpg"


const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 70px;
  align-items: center;
  justify-items: center;
  height:50px;
`;

const DivImagem = styled.div`
 height:520px;
 margin-top:22px;
 display:grid;
 justify-items:center;
 align-items:center;
 gap:13px;
 grid-template-rows:430px 80px;
`

const Curtida = styled.div`
  height:80px;
  width:430px;
  display:flex;
  justify-content: space-evenly;
  align-items:center;
`
const Imagem = styled.img`
  height:430px;
  width:430px;
  
`


export default class HomePage extends React.Component {
   
  state= {
    profile:""
  }

  

  getProfile = () =>{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-manoel-maryam/matches"
    axios
    .get(url)
    .then((resposta)=>{
      
     console.log(resposta.data.profile)
    })
    .catch((erro)=>{
      console.log(erro.response)
    })
  }

  render() {
    return (
      <div>
        <Header>
          <span>HomePAge</span>
          <button onClick={this.props.Home}>Home</button>
        </Header>
        <hr/>
        <DivImagem>
            <Imagem src={Passaro} alt="coruja" />
            <Curtida><span>X</span> <span>X</span></Curtida>
        </DivImagem>
      </div>
    );
  }
}
