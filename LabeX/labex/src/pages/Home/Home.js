import React from "react";
import { useHistory } from "react-router";

export const Home = () => {


       const History = useHistory();
      
        const gotoAboutHome = () => {
          History.push("/Viagens");
        };

        const gotoAboutAdmin = () => {
            History.push("/Admin");
          };


    return(
        <div>
            <h1>Home</h1>
            <button onClick={gotoAboutHome}>Ver Viajens</button>
            <button onClick={gotoAboutAdmin}>Área de Admin</button>
        </div>
    )
}