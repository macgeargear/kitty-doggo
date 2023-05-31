import React from "react";
import Badge from "../../components/Badge";
import { motion } from "framer-motion";

type Props = {};

const Service = (props: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      className="mx-auto my-12 w-5/6"
    >
      <div className="mx-auto gap-8  rounded-[48px] bg-rose-100 p-8 md:justify-evenly lg:flex">
        <Badge status={95} type={"award"} />
        <Badge status={96} type={"client"} />
        <Badge status={97} type={"Employee"} />
        <Badge status={98} type={"Protection"} />
      </div>
    </motion.div>
  );
};

export default Service;
