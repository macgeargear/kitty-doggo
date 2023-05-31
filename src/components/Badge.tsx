import pawprint from "../assets/pawprint.png";
import MText from "../shared/MText";
import HText from "../shared/MText";

type Props = {
  logo?: string;
  status: number;
  type: string;
};

const Badge = ({ status, type }: Props) => {
  return (
    <div className="my-4 flex min-w-[140px] flex-col items-center justify-center rounded-[38px] bg-white p-4">
      <img
        src={pawprint}
        alt=""
        className="m-4 h-14 rounded-[50%] bg-pink-200 p-4"
      />
      <HText>{status}</HText>
      <p>{type}</p>
    </div>
  );
};

export default Badge;
