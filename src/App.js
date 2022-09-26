import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import classes from './App.module.css';

import Exercicios from "./components/Exercicios/Exercicios";
import Button from "./components/Button/Button";

function App() {
  const [operacao, setOperacao] = useState(null);

  return (
    <div className={`${classes.App} ${classes.Flex}`}>
      <AnimatePresence>
        <LayoutGroup>
          {operacao &&
            <Exercicios operacao={operacao} setOperacao={setOperacao} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} />
          }
          {operacao === null &&
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className={classes.Flex}>
              <div className={classes.Titulo}>Selecione uma operação</div>
              <Button texto="Soma" onClick={() => setOperacao(1)} />
              <Button texto="Subtração" onClick={() => setOperacao(2)} />
              <Button texto="Multiplicação" onClick={() => setOperacao(3)} />
              <Button texto="Divisão" onClick={() => setOperacao(4)} />
            </motion.div>
          }
        </LayoutGroup>
      </AnimatePresence>
    </div>
  );
}

export default App;
