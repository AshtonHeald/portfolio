import { TypeAnimation } from "react-type-animation";

const Typewriter = ({ textSequence }) => {
  return (
    <TypeAnimation
      className="text-primary"
      preRenderFirstString={true}
      sequence={textSequence}
      wrapper="span"
      cursor={false}
      repeat={Infinity}
      style={{ fontSize: "1em" }}
    />
  );
};

export default Typewriter;
