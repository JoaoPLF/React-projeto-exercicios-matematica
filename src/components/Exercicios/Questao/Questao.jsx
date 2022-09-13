import Button from "../../Button/Button";
import classes from "./Questao.module.css";

const arrayAlternativas = (resultado) => {
  const indexResultado = Math.floor(Math.random() * 4);

  const array = [...Array(4)].map((value, index) => {
    if (index === indexResultado) return resultado;
    else {
      const r = Math.random();
      if (r >= 0.5) return (resultado + 1 + Math.floor(Math.random() * 10));
      else return (resultado - 1 - Math.floor(Math.random() * 10));
    }
  });

  return array;
};

const Questao = ({ n1, n2, resultado, simbolo, addQuestao }) => {
  return (
    <>
      <span className={classes.Pergunta}>{`${n1} ${simbolo} ${n2}`}</span>
      {arrayAlternativas(resultado).map((value, index) => 
        <Button texto={value} style={{ gridArea: `alternativa${index+1}` }} key={index} onClick={() => addQuestao(value === resultado)}></Button>
      )}
    </>
  );
};

export default Questao;