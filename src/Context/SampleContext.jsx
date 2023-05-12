/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const SampleContext = createContext();

const SampleProvider = ({ children }) => {
  const [data, setData] = useState({});
  const providerValue = {
    data,
    setData,
  };

  return (
    <SampleContext.Provider value={providerValue}>
      {children}
    </SampleContext.Provider>
  );
};

export { SampleProvider };
export default SampleContext;
