import { useState, useEffect } from "react";
import Questao from "./Questao/Questao";
import Button from "../Button/Button";
import classes from "./Exercicios.module.css";

const simbolo = (operacao) => {
  switch (operacao) {
    case 1: return "+";
    case 2: return "-";
    case 3: return "*";
    case 4: return "/";
    default: return "";
  }
};

const Exercicios = ({ operacao, setOperacao }) => {
  const [questoes, setQuestoes] = useState([]);
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    const novo1 = (Math.floor(Math.random() * 100));
    let novo2 = (Math.floor((Math.random() * 100) + 1));

    switch (operacao) {
      case 1: {
        setResultado(novo1 + novo2);
        break;
      }

      case 2: {
        setResultado(novo1 - novo2);
        break;
      }

      case 3: {
        setResultado(novo1 * novo2);
        break;
      }

      case 4: {
        while (novo2 > novo1) {
          novo2 = (1 + Math.floor(Math.random() * 100));
        }

        setResultado(Math.trunc(novo1 / novo2));
        break;
      }

      default: break;
    }

    setN1(novo1);
    setN2(novo2);
  }, [operacao, questoes.length]);

  const addQuestao = (acerto) => {
    setQuestoes([...questoes, { n1, n2, resultado, acerto }]);
  };

  if (questoes.length < 10) {
    return (
      <div className={classes.Exercicios}>
        <div style={{ gridArea: "questao" }}>{`Questão ${questoes.length + 1} de 10`}</div>
        <div className={classes.ProgressBack}>
          <div className={classes.ProgressBar} style={{ width: `${(questoes.length + 1) * 10}%` }} />
        </div>
        <Questao n1={n1} n2={n2} resultado={resultado} simbolo={simbolo(operacao)} addQuestao={addQuestao} />
      </div>
    );
  }
  else {
    const acertos = questoes.reduce((prev, q) => q.acerto ? (prev + 1) : prev, 0);

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className={classes.Resultado}>{`Você acertou ${acertos > 1 ? (acertos + " questões") : (acertos + " questão")}!`}</div>
        {questoes.map((q, index) => (
          <div className={classes.Questao} style={{ backgroundColor: (q.acerto ? "lightgreen" : "salmon") }}>{`${(index + 1)}) ${q.n1} ${simbolo(operacao)} ${q.n2} = ${q.resultado}`}</div>
        ))}
        <Button texto="Início" onClick={() => setOperacao(null)} />
      </div>
    );
  }

};

export default Exercicios;