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
          <article key={i.id}>

          </article>
        )
      })}
    </div>
  );
}

export default App;
