import { motion } from "framer-motion";
import samoyed_big from "../../assets/samoyed_big.png";
import HText from "../../shared/HText";
import { SelectedPage } from "../../shared/types";

type Props = {
  setSelectedPage: (value: string) => {};
};

const Plan = ({ setSelectedPage }: Props) => {
  return (
    <>
      {/* container */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Plan)}
        className="mx-auto my-12 w-5/6 md:items-center md:justify-between md:gap-20 lg:flex"
      >
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          src={samoyed_big}
          alt=""
          className="mx-auto rounded-[28%] bg-pink-200"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col"
        >
          <div className="relative mt-12">
            <div className="before:absolute before:-left-12 before:-top-10 before:z-[-3] before:content-abstractwaves">
              <h1 className="font-Fatface text-5xl font-bold">
                {"Your Pet Is Part Of Our".toUpperCase()}{" "}
                <span className="text-pink-500">FAMILY</span>
              </h1>
            </div>
          </div>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            non voluptate placeat delectus architecto eum officia nobis nam
            dolore harum deleniti laboriosam maxime, exercitationem quam
            reprehenderit rem magnam! Enim, nobis.
          </p>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            non voluptate placeat delectus architecto eum officia nobis nam
            dolore harum deleniti laboriosam maxime, exercitationem quam
            reprehenderit rem magnam! Enim, nobis.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Plan;
