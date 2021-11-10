import axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [tarot, setTarot] = useState([]);
  console.log(tarot);

  useEffect(() => {
    fetch("/public/tarot.json")
      .then((tarot) => setTarot(tarot))
      .catch((error) => {
        document.write(error);
      });
  }, []);

  return <div>gf</div>;
};

export default Home;
