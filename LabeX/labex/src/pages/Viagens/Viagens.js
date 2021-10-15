import axios from "axios";
import React, {useEffect, useHistory} from "react";



const useProtectedPage = () => {
    const history = useHistory();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token === null) {
        console.log("Não está logado!!!");
        history.push("/login");
      }
    }, []);
  };


export const Viagens = () => {
    useProtectedPage();
  useEffect(() => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/3bUbdB1gvPzWrThpazVC",
      {
        headers: {
          auth: token,
        },
      }
    );
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("Deu erro: ", err.response);
    }, []);

  const History = useHistory();

  const gotoAboutViagens = () => {
    History.push("/");
  };

  const gotoAboutInscrever = () => {
    History.push("/Inscrever");
  };
  
  return (
    <div>
      <button onClick={gotoAboutViagens}>Voltar</button>
      <button onClick={gotoAboutInscrever}>Inscrever-se</button>
      <h1>Lista de Viagens</h1>
    </div>
  );
};
