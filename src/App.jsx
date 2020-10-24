import React from "react";
import Home from "./components/home/Home";
import {Provider} from "react-redux";
import ReduxStore from "./store/index";
function App() {
  return (
    <>
      <Provider store={ReduxStore}>
        <Home />
      </Provider>

    </>
  );
}

export default App;
