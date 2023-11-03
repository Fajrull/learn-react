import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/reducer/counterSlice";

const Home = () => {
  const { value } = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(5));
  };

  return (
    <>
      <h1>Redux Toolkit :D</h1>
      <p>Counter : {value}</p>
      <button onClick={handleIncrement} style={{ marginInline: "15px" }}>
        +
      </button>
      <button onClick={handleDecrement} style={{ marginInline: "15px" }}>
        -
      </button>
      <button onClick={handleIncrementByAmount}>Amount</button>
    </>
  );
};

export default Home;
