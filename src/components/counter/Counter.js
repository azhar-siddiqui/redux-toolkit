import { useState } from "react";
import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  handleIncrementCount,
  handleDecrementCount,
  handleIncrementByAmount,
  handleDecrementByAmount,
  selectCount,
} from "../../redux/counterSlice/counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const incrementValue = Number(incrementAmount);

  return (
    <>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(handleDecrementCount());
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(handleIncrementCount());
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(handleIncrementByAmount(incrementValue));
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(handleDecrementByAmount(incrementAmount));
          }}
        >
          Remove Amount
        </button>
      </div>
    </>
  );
};

export default Counter;
