import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState(["Pagar boleto", "Tomar água"]);


  useEffect(() => {
    const tarefaStorage = localStorage.getItem('@tarefa')

    if(tarefaStorage){
      setTarefas(JSON.parse(tarefaStorage))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
  }, [tarefas]);

  function register(e) {
    e.preventDefault();

    if (input === "") {
      alert("Coloque uma tarefa");
    } else {
      setTarefas([...tarefas, input]);
      setInput("");
    }
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>

      <form onSubmit={register}>
        <label>Nome: </label>
        <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />

        <button type="submit">Registrar</button>
      </form>

      <br />
      <br />
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
