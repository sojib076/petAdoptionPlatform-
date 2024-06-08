
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Happypets = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: updogRef, inView: updogInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="my-[10%] lg:my-0">
      <div className="lg:flex gap-2.5 items-center justify-between">
        <motion.div
          className="lg:h-[601.08px] pl-[40px]"
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/assets/humancarrypet.png" alt="Human carrying pet" />
        </motion.div>
        <div className="flex flex-col items-center">
          <motion.div
            className="lg:my-0 my-5"
            ref={updogRef}
            initial={{ opacity: 0, y: -50 }}
            animate={updogInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
              <img src="/public/updog.png" alt="" />
          </motion.div>
          <motion.div
            className="lg:ml-20"
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="lg:banner-title section-title font-bold lg:text-left text-center">
              Happy pets, <br />
              happy humans
            </h2>
            <p className="section-text lg:w-[70%] lg:mt-[30px] text-[#2E3031] lg:p-0 p-5 text-justify">
              Pops of color that will dazzle your wardrobe year round! Pops of
              color that will dazzle your wardrobe year round! Pops of color that
              will dazzle your wardrobe year round!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Happypets;
