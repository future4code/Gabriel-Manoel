import React from "react";
import { useHistory } from "react-router";


export const Viagens = () => {
    const History = useHistory();
      
    const gotoAboutViagens = () => {
      History.push("/Home");
    };



    return(
        <div>
            <h1>Viagens</h1>
            <button onClick={gotoAboutViagens}>Voltar</button>
            <button>Inscrever-se</button>
        </div>
    )
}