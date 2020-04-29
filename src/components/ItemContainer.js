import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../actions/cake";
import { buyIcecream } from "../actions/icecream";

const ItemContainer = ({ cake, item, buyItem }) => {
  console.log(cake);
  return (
    <div>
      {/* <h1>
        Number of {props.cake ? "Cake" : "Icecream"} - {props.item}
      </h1> */}
      <h2>
        Number of {cake ? "Cake" : "Icecream"} - {item}
      </h2>
      <button onClick={() => buyItem()}>buy Item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cakes.numOfCakes
    : state.icecreams.numOfIcecreams;

  return { item: itemState };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());

  return {
    buyItem: dispatchFunction
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
