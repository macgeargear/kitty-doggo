import clsx from "clsx";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import { PetInfoType } from "../shared/types";

import pawprint from "../assets/pawprint.png";
import { motion } from "framer-motion";
import { CatSpecies, DogSpecies } from "../shared/types";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
type Props = {
  infos: PetInfoType;
};

const PetCard = ({ infos }: Props) => {
  const [save, setSave] = useState(false);
  const [dogImageUrl, setDogImageUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${infos.species.toLowerCase()}/images/random`
        );
        const pics = await response.json();
        setDogImageUrl(pics.message);
        console.log(pics);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      className="w-full rounded-[16px] bg-white  p-4 duration-500 lg:flex lg:max-w-[320px] lg:lg:flex-col lg:flex-wrap lg:justify-between "
    >
      <div
        className={clsx(
          `hover:scale-120 bg-read-200 flex flex-col justify-between rounded-[18px] lg:min-h-[280px]`,
          {
            // dog
            "bg-rose-200": infos.species === DogSpecies.Samoyed,
            "bg-emerald-200": infos.species === DogSpecies.Beagle,
            "bg-lime-200": infos.species === DogSpecies.BullDog,
            "bg-pink-200": infos.species === DogSpecies.Chow2,
            "bg-green-200": infos.species === DogSpecies.Golden,
            "bg-sky-200": infos.species === DogSpecies.Pug,
            "bg-blue-200": infos.species === DogSpecies.Shihtzu,
            "bg-teal-200": infos.species === DogSpecies.Golden,
            // cat
            "bg-cyan-200": infos.species === CatSpecies.British,
            "bg-indigo-200": infos.species === CatSpecies.KhaoManee,
            "bg-violet-200": infos.species === CatSpecies.Persian,
            "bg-neutral-200": infos.species === CatSpecies.Ragdoll,
            "bg-red-200": infos.species === CatSpecies.Siamese,
          }
        )}
      >
        <div className="flex items-center justify-between px-4 pt-4">
          <h1 className="rounded-[24px] bg-white p-2">
            {new Date().toUTCString().slice(5, 16)}
          </h1>
          <button onClick={() => setSave(!save)}>
            {!save ? (
              <BookmarkIcon
                className="h-8 w-8"
                onClick={() => toast(`I love ${infos.species} 🥰`)}
              />
            ) : (
              <BookmarkIconSolid
                className="h-8 w-8"
                onClick={() => toast(`${infos.species} is not my type 😭`)}
              />
            )}
          </button>
          {/* image */}
        </div>
        <div className="relative mx-3 my-2 h-[300px] overflow-hidden rounded-3xl md:max-h-[220px] md:max-w-[330px] lg:max-h-[180px]">
          <img
            src={dogImageUrl}
            alt=""
            className="mx-auto w-full max-w-full duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="px-2">
          <div className="mx-2 flex justify-between">
            <div className="flex flex-col flex-wrap">
              <p>{infos.isHealthy ? "Healthy!💪🏻" : "not that weak😾"}</p>
              {/* <HText>{isTrained ? "Trained!!" : "not trained yet🥹"}</HText> */}
              <h1 className="font-R font-Raleway text-5xl font-bold">
                {infos.species}
              </h1>
            </div>
            <img
              src={pawprint}
              className="h-12 rounded-[50%] bg-white p-2 duration-300 ease-in-out hover:scale-110 hover:bg-cyan-500"
              alt=""
              onClick={() => toast("meowwwww~~~😻")}
            />
          </div>
          <ul className="flex flex-wrap">
            {infos.tags?.map((tag) => {
              return (
                <li
                  key={tag.id}
                  className="m-1 rounded-xl border border-black p-1 text-sm hover:bg-pink-400"
                >
                  eiei
                  {tag.tag}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4">
        <div className="flex flex-col">
          <h2>{!infos.isVacinated ? "Vacinated" : ""}</h2>
          <p className="text-gray-400">New York, NY</p>
        </div>
        <button
          className="transition-3s rounded-2xl bg-black p-2 text-white hover:bg-slate-400 hover:text-black"
          onClick={() => toast("Boo~")}
        >
          Say {infos.type === "cat" ? "Meow" : "Boo"}
        </button>
      </div>
    </motion.div>
  );
};

export default PetCard;
