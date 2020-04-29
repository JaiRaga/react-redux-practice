import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../actions/cake";

function CakeContainer({ numOfCakes, buyCake }) {
  return (
    <div>
      <h2>Number of Cakes: {numOfCakes}</h2>
      <button onClick={() => buyCake()}>Buy Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.cakes.numOfCakes
});

// const mapDispatchToProps = (dispatch) => ({
//   buyCake: () => dispatch(buyCake())
// });

export default connect(mapStateToProps, { buyCake })(CakeContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
