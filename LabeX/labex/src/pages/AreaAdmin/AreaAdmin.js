import React from "react";
import { useHistory } from "react-router";

export const AreaAdmin = () => {
  const History = useHistory();

  const gotoAboutHome = () => {
    History.push("/Home")
   
  }
   return (
    <div>
      <h1>Admin</h1>

      <button onClick={gotoAboutHome}>Voltar</button>
      <button>Criar Viagem</button>
      <button>Logout</button>
    </div>
  );
};
