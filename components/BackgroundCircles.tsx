import { motion } from "framer-motion";
export default function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center z-0"
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0, 3, 0, 5, 0, 8, 1],
        borderRadius: ["20%", "30%", "50%", "70%", "90%"],
      }}
      transition={{ duration: 2 }}
    >
      <div
        className={
          "absolute border border-[#333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"
        }
      />{" "}
      <div
        className={
          "absolute border border-[#333] rounded-full h-[300px] w-[300px] mt-52 animate-ping"
        }
      />{" "}
      <div
        className={
          "absolute border border-[#333] rounded-full h-[500px] w-[500px] mt-52 animate-ping"
        }
      />
      <div
        className={
          "absolute border border-[#F7AB0A] rounded-full opacity-20 h-[650px] mt-52 w-[650px] animate-pulse"
        }
      />
      <div
        className={
          "absolute border border-[#333] rounded-full h-[800px] w-[800px] mt-52 animate-ping"
        }
      />
    </motion.div>
  );
}
