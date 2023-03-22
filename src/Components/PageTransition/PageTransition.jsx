import { m, LazyMotion, domAnimation } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, x: "-10%" },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "10%" },
};

const variants = {
  enter: {
    opacity: 0,
    width: "90%",
    height: "90%",
  },
  center: {
    opacity: 1,
    width: "100%",
    height: "100%",
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    width: 0,
    height: 0,
  },
};

const PageTransition = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.article initial="enter" animate="center" exit="exit" variants={variants}>
        {children}
      </m.article>
    </LazyMotion>
  );
};

export default PageTransition;
