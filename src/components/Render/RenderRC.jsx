import React, { useContext } from "react";
import TestRenderContext from "../../Context/TestRenderContext";

const RenderRC = () => {
  const { var2, increaseVar1 } = useContext(TestRenderContext);

  console.log("RenderRC Rendered");
  return (
    <div className="bg-blue-500 rounded-lg shadow-md px-4 py-6 text-white w-96 m-8">
      <h1 className="text-3xl font-bold mb-4">React Context Example</h1>
      <div className="text-2xl font-bold mb-4">Var2: {var2}</div>
      <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full shadow-md" onClick={increaseVar1}>Increase Var 1</button>
    </div>
  );
};

export default RenderRC;
