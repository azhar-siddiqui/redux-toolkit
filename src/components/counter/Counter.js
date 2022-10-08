import styles from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  handleIncrementCount,
  handleDecrementCount,
  selectCount,
} from "../../redux/counterSlice/counterSlice";
// first changes
const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

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
    </>
  );
};

export default Counter;
