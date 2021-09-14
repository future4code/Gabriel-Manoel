import React from 'react';
import Etapa1 from './componentes/Etapa1';
import Etapa2 from './componentes/Etapa2';
import './App.css'

export default class app extends React.Component {
   
  dado = {
    cadastro:false
  };

  cadastrado = () => {
    this.setState({cadastro: true});
  };
  

   renderizaPagina = () => {
     if(this.dado.cadastro){
      return <Etapa2 />;
     }else {
      return <Etapa1 cadastrado = {this.cadastrado} />;
      
     }
   }



  render () {
    return (
      <div className='app'>
        
       {this.renderizaPagina()}
       
  
      </div>
      
    );
  }
}


