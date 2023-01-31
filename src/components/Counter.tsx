import {useState} from "react";
import classes from "./Counter.module.scss"

export const Counter = () => {
  const [count, setCount] = useState(0);
  const inc = () =>  setCount((prevState) => prevState + 1)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc} className={classes.button}>counter!!</button>
    </div>
  );
};