import HText from "../../shared/HText";
import MText from "../../shared/MText";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-10 flex justify-between bg-stone-400 px-10 py-8">
      <div className="flex flex-col">
        <HText>EiEi</HText>
        <ul>
          <li>eiei</li>
          <li>foo</li>
          <li>bar</li>
          <li>meow</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <MText>EIEI</MText>
        <ul>
          <li>moew</li>
          <li>mow</li>
          <li>muuuw</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
