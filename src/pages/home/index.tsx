import { motion } from "framer-motion";
import PetCards from "../../components/PetCards";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="mx-auto bg-rose-200 p-5">
      <div className="mx-24 mt-8 flex items-center justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex items-center justify-center "
        >
          <h1 className="text-3xl font-bold">Find your lovely cat</h1>
          <button className="ml-4 mr-4 rounded-[18px] border border-black p-1 text-sm">
            999
          </button>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex"
        >
          <p className="text-gray-400">sort by: </p>
          <p className="text-bold ml-1">Last Meow</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-4 h-6 w-6"
          >
            <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
          </svg>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="mt-6 flex flex-wrap justify-center gap-4"
      >
        <PetCards species={"threetail"} logo={"meowfoo"} />
        <PetCards species={"threetail"} logo={"meowfoo"} />
        <PetCards species={"threetail"} logo={"meowfoo"} />
        <PetCards species={"threetail"} logo={"meowfoo"} />
        <PetCards species={"threetail"} logo={"meowfoo"} />
        <PetCards species={"threetail"} logo={"meowfoo"} />
        <PetCards species={"threetail"} logo={"meowfoo"} />
      </motion.div>
    </div>
  );
};

export default Home;
