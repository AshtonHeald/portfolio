import { TypeAnimation } from "react-type-animation";

const Typewriter = ({
  textSequence,
}: {
  textSequence: (string | number)[];
}) => {
  return (
    <TypeAnimation
      className="bg-primary text-secondary"
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
