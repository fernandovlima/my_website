import { motion } from "framer-motion";
import { getIcon } from "../../utils/getIcon";

type Props = {
  technology: string;
};

export function Technology({ technology }: Props) {
  return (
    <motion.div
      className={`bg-gray-medium w-10 h-10 md:h-12 md:w-12 lg:h-12 lg:w-12 rounded-full flex  flex-col justify-evenly items-center p-0 group 
      transition-colors duration-200 ease-in-out hover:bg-gray-light/20`}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {getIcon(technology)}
    </motion.div>
  );
}
