import React, { useEffect, useState } from 'react';
import './App.css';
import api from "./services/api"


export default function App() {
  const [livros, setLivros] = useState([])

  useEffect(() => {
    api.get("/")
      .then(({ data }) => {
        setLivros(data.livros);
        console.log(livros)

      })

      // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])


  return (
    <div className="App">

    </div>
  );
}

