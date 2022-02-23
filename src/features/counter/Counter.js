import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementAsync } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="incrementAsync value"
          onClick={() => dispatch(incrementAsync())}
        >
          incrementAsync
        </button>
      </div>
    </div>
  )
}