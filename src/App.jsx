import "./App.css";
import PropDrilling from "./components/PropDrilling";
import SampleRC from "./components/SampleRC";
import { SampleProvider } from "./Context/SampleContext";
import { TestRenderProvider } from "./Context/TestRenderContext";
import SampleZustand from "./components/SampleZustand";
import Swapi from "./components/Swapi";

import RenderRC from "./components/Render/RenderRC";
import RenderZustand from "./components/Render/RenderZustand";

function App() {
  return (
    <div className="flex flex-col space-y-6">
      {/* <PropDrilling /> */}
      {/* <SampleProvider>
        <SampleRC />
      </SampleProvider> */}
      {/* <SampleZustand /> */}
      <Swapi />
      {/* <TestRenderProvider>
        <RenderRC />
      </TestRenderProvider> */}
      {/* <RenderZustand /> */}
    </div>
  );
}

export default App;
