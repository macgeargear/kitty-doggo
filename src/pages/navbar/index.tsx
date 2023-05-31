import { useState } from "react";
import Link from "../../pages/navbar/Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import pawprint from "../../assets/pawprint.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "bg-gray-20 drop-shadow" : "";
  return (
    <nav className={clsx("sticky left-0 top-0", "z-30 bg-rose-200", {})}>
      <div className={`${navbarBackground} ${flexBetween}  w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-4`}>
            {/* Left side */}
            <img alt="logo" src={pawprint} className="h-16" />
            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* inner left */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <h1 className="font-Fatface text-4xl font-bold">Meow Foo</h1>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Plan"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <button className="rounded-lg bg-pink-400 px-4 py-2">
                    Sign In
                  </button>
                  <button>Become a Member</button>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="bg-secondary-500 rounded-full p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-black" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-rose-300 drop-shadow-xl"
        >
          {/* close icon */}
          <div className="flex items-center justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default navbar;
