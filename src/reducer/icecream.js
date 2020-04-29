import { BUY_ICECREAM } from "../actions/types";

const initialState = {
  numOfIcecreams: 20
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1
      };

    default:
      return state;
  }
};
