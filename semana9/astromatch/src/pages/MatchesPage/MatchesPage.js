import React from "react";
import styled from "styled-components";

const Header = styled.header`
 display:grid;
 grid-template-columns:1fr 94px ;
 align-items:center;
 justify-items:center;
`

export default class MatchesPage extends React.Component {
  render() {
    return (
      <Header>
        <spam>MatchesPage</spam>
        <button onClick={this.props.Matches}>MatchesPage</button>
        gsag
      </Header>
    );
  }
}
