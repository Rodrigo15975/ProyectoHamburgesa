import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const DelayChildren = ({
  children,
  tagParent,
  tagBoys,
  classParent,
  classBoys,
}) => {
  const Container = m[tagParent];
  const Boys = m[tagBoys];
  return (
    <LazyMotion features={domAnimation}>
      <Container
        className={classParent}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {React.Children.map(children, (child) => (
          <Boys className={classBoys} variants={item}>
            {child}
          </Boys>
        ))}
      </Container>
    </LazyMotion>
  );
};

export default DelayChildren;
