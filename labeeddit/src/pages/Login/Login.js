import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = e =>{
    login()
    e.preventDefault()
   console.log(email, password)
  }

  const login = () =>{
     axios
      .post(`https://labeddit.herokuapp.com/${email}/${password}`)
      .then((resposta)=>resposta.data)
      .catch((err)=>{
        if(err.response.status === 404) {
          console.log(err);
        }
      });

      
  }

  const history = useHistory()
    const handleClikc = () =>{
        history.push("/cadastro")
    }
 
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          name="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required
          placeholder="email"
        />
        <br />
        <input
          name="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          required
          type="password"
          placeholder="senha"
        />
        <br />
        <button type={"submit"}>Entrar</button>
      </form>
      <button onClick={handleClikc}>Cadastrar</button>
    </div>
  );
};

export default Login;
