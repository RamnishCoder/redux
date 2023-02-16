import React from "react";
import { useSelector } from "react-redux"; 

const Example = () => {
  const counter = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>redux tool kit example</h2>
      <h3>{counter}</h3>
    </div>
  );
};

export default Example;
