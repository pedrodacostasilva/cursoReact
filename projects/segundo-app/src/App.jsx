import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
        });
    }

    loadApi();
  }, []);
  return (
    <div className="container">
      <header>
        <h1>React Nutri</h1>
      </header>

      {nutri.map((i) => {
        return (
          <article key={i.id} className="post">
            <h2 className="titulo">{i.titulo}</h2>
            <img src={i.capa} alt={i.titulo} className="capa"/>
            <p className="subtitulo">{i.subtitulo}</p>
            <a href="#" className="botao">Acessar</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;
