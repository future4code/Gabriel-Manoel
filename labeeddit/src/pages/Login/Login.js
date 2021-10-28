import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "../../api/api";

const Login = () => {
  const [form, onChange, clear] = useState({ email: "", password: ""});
  

  const onSubmitForm = (event) => {
    // login() 
    console.log(form) 
    event.preventDefault()
  };

  const history = useHistory()
  
  const handleClikc = () =>{
      history.push("/cadastro")
  }

  const login = () =>{
     api
      .post(`https://labeddit.herokuapp.com/${form}`)
      .then((resposta)=>resposta.data)
  }
 
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          required
          type="email"
          placeholder="email"
        />
        <br />
        <input
          name="password"
          value={form.password}
          onChange={onChange}
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
