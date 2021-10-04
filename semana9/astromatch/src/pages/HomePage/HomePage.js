import React from "react";
import styled from "styled-components";

const Header = styled.header`
 display:grid;
 grid-template-columns:1fr 70px ;
 align-items:center;
 justify-items:center;
`


export default class HomePage extends React.Component{
    render(){
        return (
            <Header>
               <span>HomePAge</span>
               <button onClick={this.props.Home}>Home</button>
            </Header>
        )
    }
}
