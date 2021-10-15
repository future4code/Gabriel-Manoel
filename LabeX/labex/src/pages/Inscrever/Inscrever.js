import React from "react";
import { useHistory } from "react-router";


export const Inscrever = () => {
    const History = useHistory();
      
    const gotoAboutInscrever = () => {
      History.push("/");
    };



    return(
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <div>
                <select>
                    <option>viagem de verão</option>
                </select>
            </div>
            <button onClick={gotoAboutInscrever}>Voltar</button>
            <button>Enviar</button>
            
           
        </div>
    )
}