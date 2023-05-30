import pawprint from "../assets/pawprint.png";

type Props = {
  species: string;
  logo: string;
};

const PetCards = ({ species, logo }: Props) => {
  return (
    <div className="flex max-w-[260px] flex-col rounded-[16px] bg-white p-4">
      <div className={`rounded-[18px] bg-pink-300`}>
        <div className="flex items-center justify-between p-4">
          <h1 className="rounded-[24px] bg-white p-2">30 May, 2023</h1>
          <img
            src={pawprint}
            alt=""
            className="h-8 rounded-[50%] bg-white p-2"
          />
        </div>
        <div className="flex justify-between gap-4 p-4">
          <div className="">
            <p>Amazom</p>
            <h1>Senior UI/UX Designer</h1>
          </div>
          <img
            src={pawprint}
            className="h-12 rounded-[50%] bg-white p-2"
            alt=""
          />
        </div>
        <div className="flex flex-wrap p-2">
          <button className="m-1 rounded-xl border border-black p-1 text-sm">
            Meow Foo
          </button>
          <button className="m-1 rounded-xl border border-black p-1 text-sm">
            Meow Bar
          </button>
          <button className="m-1 rounded-xl border border-black p-1 text-sm">
            Meow Baz
          </button>
          <button className="m-1 rounded-xl border border-black p-1 text-sm">
            Meow Eiei
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-2">
        <div className="flex flex-col">
          <h2>$120/hr</h2>
          <p className="text-gray-400">New York, NY</p>
        </div>
        <button className="transition-3s rounded-2xl bg-black p-2 text-white hover:bg-slate-400 hover:text-black">
          Say Meow
        </button>
      </div>
    </div>
  );
};

export default PetCards;
