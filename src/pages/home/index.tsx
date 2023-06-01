import { motion } from "framer-motion";
import { petInfos } from "../../data/data.ts";
import PetCard from "../../components/PetCard.tsx";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { PetInfoType, SelectedPage } from "../../shared/types.ts";
import Dropdown from "../../components/Dropdown.tsx";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="mx-auto bg-rose-200 p-5">
      <div className="mx-24 mt-8 flex items-center justify-between">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex items-center justify-between "
        >
          <div className="flex items-center justify-center">
            <h1 className="font-Fatface text-3xl font-bold">
              Find your lovely cat
            </h1>
            <button className="ml-4 mr-4 rounded-[18px] border border-black p-1 text-sm">
              {petInfos.length * 100}
            </button>
          </div>
          <Dropdown />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex"
        >
          <label htmlFor="cat">cat</label>
          <input type="checkbox" id="cat" />
          <label htmlFor="cat">dog</label>
          <input type="checkbox" id="dog" />

          <p className="text-gray-400">sort by: </p>
          <p className="text-bold ml-1">Last Meow</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-4 h-6 w-6"
          >
            <AdjustmentsHorizontalIcon />
          </svg>
        </motion.div>
      </div>
      <div className="w-full items-center justify-center gap-6 md:flex md:flex-wrap">
        {petInfos.map((info) => {
          return (
            <div
              className="mt-6 gap-4 duration-300 ease-in-out hover:scale-105 lg:flex lg:flex-wrap lg:justify-center"
              onClick={() => console.log(imageUrl)}
            >
              <PetCard infos={info} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
