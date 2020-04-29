import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../actions/cake";

const HooksCakeContainer = () => {
  const cakes = useSelector((state) => state.cakes.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes - {cakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
