import { m, LazyMotion, domAnimation } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, x: "-10%" },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "10%" },
};

const PageTransition = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.article initial="initial" animate="enter" exit="exit" variants={pageTransition}>
        {children}
      </m.article>
    </LazyMotion>
  );
};

export default PageTransition;
