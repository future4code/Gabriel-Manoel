import React, {useState} from "react";
import { HomePage } from "./pages/HomePage/HomePage"
import { MatchesPage } from "./pages/MatchesPage/MatchesPage"
import axios from "axios"

const App = () => {
  const [currentPage, setCurrentPage] = useState("home")

  const changePage = () =>{
    if (currentPage === "home"){
      setCurrentPage("matches")
    }else{
      setCurrentPage("home")
    }
  }

  
  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-manoel-maryam/clear"

  const cleanMatches = () =>{
    axios.put(url)
    .then((res)=>{
      alert("Limpeza completa!")
    })
    .catch((err)=>{
      console.log(err.response)
    })
  }
  
  return(
    <div>
      {currentPage === "home" ?  <HomePage /> :  <MatchesPage />}
      <button onClick={changePage}>{currentPage === "home" ?  "Matches" :"Home" }</button>
      <button onClick={cleanMatches}>Limpar Matches</button>
    </div>
  )
}
export default App;

