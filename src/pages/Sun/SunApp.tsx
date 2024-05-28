import { motion } from "framer-motion";

const SunApp = () => {
  return (
    <motion.div
      style={{ color: "white" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Sun
    </motion.div>
  );
};
export default SunApp;
