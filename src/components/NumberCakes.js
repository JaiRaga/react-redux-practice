import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../actions/cake";

const NumberCakes = () => {
  const [number, setNumber] = useState(1);
  const cakes = useSelector((state) => state.cakes.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {cakes}</h2>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} cakes
      </button>
    </div>
  );
};

export default NumberCakes;
