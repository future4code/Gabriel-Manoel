import React from "react";
import Userlist from "../UserList";
import styled from "styled-components"

const Div = styled.div`
display:grid;
grid-template-rows:50px;
border:1px solid;
width:30%;
height:200px;
margin:0 auto;
`

const Label = styled.label`
 display:block;
`
const Button = styled.button`
 width:100px;
 height:50px;
 margin:0 auto;
`

const header = {
    headers: {
        Authorization: "Gabriel-Manoel-maryam"
    }
}
export default class Register extends React.Component {

   state = {
       nome: [],
       email: []
   }

   getAllUsers = () =>{
       const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
   }

    render() {
        return (
            <Div>
                <div>
                    <Label>Nome:</Label>
                    <input value = {this.state.nome} onChange={this} />
                </div>
                <div>
                    <Label>Email:</Label>
                    <input />
                </div>
                <Button>Salvar</Button>
            </Div>
        )
    }
}