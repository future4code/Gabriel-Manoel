import React from "react";
import { useHistory } from "react-router";


export const CriarViagens = () => {
    const History = useHistory();
      
    const gotoAboutViagens = () => {
      History.push("/");
    };



    return(
        <div>
            <h1>Criar viagem</h1>
            
            <button onClick={gotoAboutViagens}>Voltar</button>
            
           
        </div>
    )
}