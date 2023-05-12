import React from "react";
import useRenderStore from "../../store/useRenderStore";
import { shallow } from "zustand/shallow";

const RenderZustand = () => {
  const { var2, increaseVar1 } = useRenderStore(
    (state) => ({ var2: state.var2, increaseVar1: state.increaseVar1 }),
    shallow
  );

  console.log("RenderZustand Rendered");
  return (
    <div className="bg-green-500 rounded-lg shadow-md px-4 py-6 text-white w-96 m-8">
      <h1 className="text-3xl font-bold mb-4">Zustand Example</h1>
      <div className="text-2xl font-bold mb-4">Var2: {var2}</div>
      <button
        className="bg-white text-green-500 font-bold py-2 px-4 rounded-full shadow-md"
        onClick={increaseVar1}
      >
        Increase Var 1
      </button>
    </div>
  );
};

export default RenderZustand;
