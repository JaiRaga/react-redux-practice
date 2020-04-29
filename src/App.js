import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import store from "./store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import NumberCakes from "./components/NumberCakes";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <ItemContainer cake />
        <ItemContainer />

        <CakeContainer />
        <HooksCakeContainer />

        <IceCreamContainer />
        <HooksIceCreamContainer />

        <NumberCakes />
      </div>
    </Provider>
  );
}

export default App;
