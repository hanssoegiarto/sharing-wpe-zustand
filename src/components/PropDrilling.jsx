/* eslint-disable react/prop-types */

const Heading = ({ title }) => <h1>{title}</h1>;
const Paragraph = ({ desc }) => <p>{desc}</p>;
const Desc = ({ desc }) => <Paragraph desc={desc} />;

const Content = ({ data }) => (
  <div>
    <Heading title={data.title} />
    <Desc desc={data.desc} />
  </div>
);

const PropDrilling = () => {
  const data = {
    title: "hello title",
    desc: "hello desc",
  };

  return <Content data={data} />;
};

export default PropDrilling;
