import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";


const PageSwiper = ({ children }) => {
  const location = useLocation();
  const direction = location.state?.direction || 0;




  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={location.pathname}
        custom={direction}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
				ease: "easeInOut",
				duration: 1,
				delay: 0.5,
			}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageSwiper;
