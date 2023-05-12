import { useContext, useEffect } from "react";
import SampleContext from "../Context/SampleContext";

const Heading = () => {
  const { data } = useContext(SampleContext);
  return <h1>{data.title}</h1>;
};
const Paragraph = () => {
  const { data } = useContext(SampleContext);
  return <p>{data.desc}</p>;
};
const Desc = () => {
  return <Paragraph />;
};
const Content = () => {
  return (
    <div>
      <Heading />
      <Desc />
    </div>
  );
};

const SampleRC = () => {
  const data = { title: "hello title", desc: "hello desc" };
  const { setData } = useContext(SampleContext);

  useEffect(() => {
    setData(data);
  }, []);

  return <Content />;
};

export default SampleRC;
