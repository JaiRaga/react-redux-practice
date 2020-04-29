import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../actions/icecream";

const HooksIceCreamContainer = () => {
  const icecreams = useSelector((state) => state.icecreams.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num Of icecreams - {icecreams}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy IceCreams</button>
    </div>
  );
};

export default HooksIceCreamContainer;
