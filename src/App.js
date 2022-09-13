import { useState } from "react";
import classes from './App.module.css';

import Exercicios from "./components/Exercicios/Exercicios";
import Button from "./components/Button/Button";

function App() {
  const [operacao, setOperacao] = useState(null);

  return (
    <div className={classes.App}>
      {operacao ?
        <Exercicios operacao={operacao} setOperacao={setOperacao} /> :
        <>
          <div className={classes.Titulo}>Selecione uma operação</div>
          <Button texto="Soma" onClick={() => setOperacao(1)} />
          <Button texto="Subtração" onClick={() => setOperacao(2)} />
          <Button texto="Multiplicação" onClick={() => setOperacao(3)} />
          <Button texto="Divisão" onClick={() => setOperacao(4)} />
        </>
      }
    </div>
  );
}

export default App;
