import "../styles/App.scss";
import firtsData from "../data/data.json";
import { useState } from "react";

function App() {
  //variables estado
  const [data, setData] = useState(firtsData);
  const [newPhrase, setNewPhrase] = useState({
    quote: "",
    character: "",
  });

  const handleNewPhrase = (ev) => {
    setNewPhrase({
      ...newPhrase,
      [ev.target.id]: ev.target.value,
    });
  };

  const handleBtn = (ev) => {
    ev.preventDefault();
    setData([...data, newPhrase]);
  };

  //pintar listado frases
  const htmlData = data.map((phrase, index) => {
    return (
      <li className="eachPhrase" key={index}>
        <p>{phrase.quote}</p>
        <p className="character">{phrase.character}</p>
      </li>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <ul>{htmlData}</ul>
        <form className="form">
          <h2> Añadir una nueva frase</h2>
          <input
            className="newPhrase"
            type="text"
            name="frase"
            id="frase"
            placeholder="frase"
            value={newPhrase.quote}
            onChange={handleNewPhrase}
          />
          <input
            className="newPhrase"
            type="text"
            name="personaje"
            id="personaje"
            placeholder="personaje"
            value={newPhrase.character}
            onChange={handleNewPhrase}
          />
          <input
            className="btn"
            type="submit"
            value="Añadir"
            onClick={handleBtn}
          />
        </form>
      </main>
    </div>
  );
}

export default App;