/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

const TestRenderContext = createContext();

const TestRenderProvider = ({ children }) => {
  const [var1, setVar1] = useState(0);
  const [var2, setVar2] = useState(0);

  const increaseVar1 = () => {
    console.log("increase var 1 clicked");
    setVar1((prevState) => (prevState += 1));
  };

  const increaseVar2 = () => {
    console.log("increase var 2 clicked");
    setVar2((prevState) => (prevState += 1));
  };

  const providerValue = {
    var1,
    var2,
    increaseVar1,
    increaseVar2,
  };

  return (
    <TestRenderContext.Provider value={providerValue}>
      {children}
    </TestRenderContext.Provider>
  );
};

export { TestRenderProvider };
export default TestRenderContext;
