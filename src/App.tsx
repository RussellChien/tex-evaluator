import { Card, TextField } from '@mui/material';
import styles from './App.module.css';
import { ChangeEvent, useState } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import evaluatex from 'evaluatex/dist/evaluatex';

export default function App() {
  const [expr, setExpr] = useState('');
  return (

    <div className={styles.header}>
      <h1 style={{color: 'White'}}>Tex Evaluator</h1>
      <p>This is my first React app!</p>
      <Card className={styles.card}>
        <h2>Evaluate Tex Expression</h2>
        <TextField variant="filled" label="Enter Tex Expression here" onChange={handleInputChange} />       
        <p><Latex>{`$$${expr}$$`}</Latex></p>
        <p><p>{evaluate(expr) ?? ''}</p></p>
    </Card>
    </div>
  );

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    setExpr(input);
  }

  function evaluate(texExpr: string): number | undefined {
    try {
      return evaluatex(texExpr)();
    } catch (error) {
      return undefined;
    }
  }
}