import React from "react";
import HomePage from "./pages/HomePage/HomePage.js";
import MatchesPage from "./pages/MatchesPage/MatchesPage.js";
import styled from "styled-components";
import "./App.css"

const Componente = styled.div`
   border: 1px solid;
   width: 450px;
   height:600px;
   margin:35px auto 0;
   border-radius:8px;
`

export default class App extends React.Component {
  state = {
    pagina: true
  };

  Home = () => {
    this.setState({ pagina: false });
  };

  MatchesPage = () => {
    this.setState({ pagina: true });
  };

  paginas = () => {
    if (this.state.pagina) {
      return <HomePage Home={this.Home} />;
    } else {
      return <MatchesPage Matches={this.MatchesPage} />;
    }
  };

  render() {
    return (
      <Componente>
        {this.paginas()}
      </Componente>
    );
  }
}
