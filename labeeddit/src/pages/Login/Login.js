import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "../../api/api";

const Login = () => {
  const [form, setForm,clear] = useState({ email: "", password: ""});
  

  const onSubmitForm = (event) => {
    login() 
    console.log(form) 
    event.preventDefault()
  };

  const updateSearchInput = e => {
    setForm(e.target.value);
  };
  

  const history = useHistory()
  
  const handleClikc = () =>{
      history.push("/cadastro")
  }

  const login = () =>{
     api
      .post(`https://labeddit.herokuapp.com/`,form)
      .then((resposta)=>resposta.data)
  }
 
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          name="email"
          
          onChange={updateSearchInput}
          required
          type="email"
          placeholder="email"
        />
        <br />
        <input
          name="password"
         
          onChange={updateSearchInput}
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
