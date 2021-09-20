import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import Usuario from './components/DadosUsuario/Usuario'


class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Usuario
               dadosMap

/>
        <Post
          nomeUsuario={'joao'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'amanda'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </div>
    );
  }
}

export default App;

