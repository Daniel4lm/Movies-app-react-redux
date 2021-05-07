import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/redux-hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  changeStatus,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const { count, status } = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>Count: {count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <span className={styles.value}>Status: {status}</span>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(changeStatus(Math.ceil(Math.random() * 3)))}
        >
          Change status
        </button>
      </div>
    </div>
  );
}
