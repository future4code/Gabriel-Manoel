import React from "react";
import axios from "axios";
import styled from "styled-components";
 const CarUsuarios =styled.div`
  border:1px solid;
  width:100px;
  margin:8px;
  display:flex;
  justify-content:space-between;
 `

export default class TelaListaUsuario extends React.Component{
  
   state={
       usuarios:[]
   }

   componentDidMount(){
       this.pegarUsuarios()
   }

   pegarUsuarios = () => {
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       axios.get(url,{
         headers: {
            Authorization: "Gabriel-Manoel-Maryam"
         }
       })
       .then((resposta) =>{
          this.setState({usuarios:resposta.data})
       })
       .catch((erro)=>{
           alert("Ocorreu um problema, tente novamente")
       })
    }

    deletarUsuario = (id) =>{
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url,{
           headers:{
            Authorization: "Gabriel-Manoel-Maryam"
           }

        })
        .then((resposta)=>{
           alert("Usuário(a) deletado(a) com sucesso!")
           this.pegarUsuarios()
        })
        .catch((erro)=>{
           alert("O correu um erro, tente novamente")
        })
    }

    render(){
      
        const listaUsuarios = this.state.usuarios.map((user)=>{
          return <CarUsuarios key={user.id}>
              {user.name}
              <button onClick={()=>{this.deletarUsuario(user.id)}}>x</button>
              </CarUsuarios>
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuário</h2>
                {listaUsuarios}
            </div>
        )
    }
}