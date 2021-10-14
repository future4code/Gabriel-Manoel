import React from "react";
import { useHistory } from "react-router";


export const Viagens = () => {
    const History = useHistory();
      
    const gotoAboutViagens = () => {
      History.push("/");
    };

    const gotoAboutInscrever = () =>{
        History.push("/Inscrever")
    }

    return(
        <div>
            
            <button onClick={gotoAboutViagens}>Voltar</button>
            <button onClick={gotoAboutInscrever}>Inscrever-se</button>
            <h1>Lista de Viagens</h1>
        </div>
    )
}