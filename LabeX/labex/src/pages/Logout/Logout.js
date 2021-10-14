import React,{useState} from "react"
import axios from "axios"

import { useHistory } from "react-router"


export const Logout =  () => {

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   
   const onChangeEmail = (event) => {
    setEmail(event.target.value)
   }
   
   const onChangePassword = (event) =>{
    setPassword(event.target.value)
   }

   const onLogout = () => {
       console.log(email, password)
       const body = {
        email: email,
        password: password
    }
       axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-manoel-maryam/login", body)
       .then((res)=>{
           console.log(res.data)
       }).catch((err)=>{
           console.log(err.response)
       })
      
   }
   
    
    // axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-manoel-maryam/populate")
    // .then((res)=>{
    //   console.log('Deu certo: ', res.data)
    // }).catch((err)=>{
    //     console.log('Deu Errado: ', err.response)
    // })

   const History = useHistory()
   
   const gotoAboutLogout = () => {
    History.push("/");
  };


   return(
       <div>
          <h1>Login</h1>

          <p><input
           placeholder="email"
           type="email"
           value={email}
           onChange={onChangeEmail}
           /></p>

          <p><input 
          placeholder="password"
          type="password"
          value={password}
          onChange={onChangePassword}
          /></p>

          <button onClick={gotoAboutLogout}>Voltar</button>
          <button ocClick={onLogout}>Entrar</button>
       </div>
   )
}