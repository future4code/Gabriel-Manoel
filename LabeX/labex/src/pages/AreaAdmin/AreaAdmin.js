import React from "react";
import { useHistory } from "react-router";

export const AreaAdmin = () => {
  const History = useHistory();

  const gotoAboutHome = () => {
    History.push("/");
  }

  const gotoAboutCriarViagem = () =>{
    History.push("/CriarViagem")
  }

  const gotoAboutLogout = () =>{
    History.push("/Logout")
  }

   

   return (
    <div>
      <h1>Admin</h1>

      <button onClick={gotoAboutHome}>Voltar</button>
      <button onClick={gotoAboutCriarViagem}>Criar Viagem</button>
      <button onClick={gotoAboutLogout}>Logout</button>
    </div>
  );
};
