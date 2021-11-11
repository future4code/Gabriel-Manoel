import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [tarots, setTarot] = useState([]);
  const [imageCard, setImageBackCard] = useState(" ")
  console.log(tarots);
  
  const endereco = "dados/tarot.json";

  useEffect(() => {
    axios
      .get(endereco)
      .then((response) => {
        setTarot(response.data.cards);
        setImageBackCard(response.data.imageBackCard)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {tarots.map((tarot) => (
          <li key={tarot.name}>{tarot.name}
          <img src={tarot.imageBackCard}/>
          </li>

          
        ))}
      </ul>
    </div>
  );
};

export default Home;
