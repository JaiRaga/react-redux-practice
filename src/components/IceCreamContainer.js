import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from "../actions/icecream";

function IceCreamContainer({ numOfIcecreams, buyIcecream }) {
  return (
    <div>
      <h2>Number of Icecreams: {numOfIcecreams}</h2>
      <button onClick={buyIcecream}>Buy Icecreams</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfIcecreams: state.icecreams.numOfIcecreams
});

// const mapDispatchToProps = (dispatch) => ({
//   buyIcecream: () => dispatch(buyIcecream())
// });

export default connect(mapStateToProps, { buyIcecream })(IceCreamContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
