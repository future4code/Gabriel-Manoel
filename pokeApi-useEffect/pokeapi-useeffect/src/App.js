import React, { useState, useEffect } from "react";
import Axios from "axios";


const App = () => {
  const [pokeList, setPokeList] = useState("");
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeName(response.data.name)
        setPokeList(response.data.results);
      })
      .catch((error) => {
        alert(error);
      });
  }, [pokeList]);

  const nomePokeList = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <div className="App">
      <select value={pokeName} onChange={nomePokeList}>
        <option></option>
        {this.pokeName.map((list)=>{
           return (
            <option key={list.name} value={list.name}>
              {list.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default App;
