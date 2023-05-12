import { useEffect } from "react";
import useSampleStore from "../store/useSampleStore";

const Heading = () => {
  const { data } = useSampleStore();
  return <h1>{data.title}</h1>;
};
const Paragraph = () => {
  const { data } = useSampleStore();
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
  const { setData } = useSampleStore();

  useEffect(() => {
    setData(data);
  }, []);

  return <Content />;
};

export default SampleRC;
