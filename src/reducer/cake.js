import { BUY_CAKE } from "../actions/types";

const initialState = {
  numOfCakes: 10
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - payload
      };

    default:
      return state;
  }
};
