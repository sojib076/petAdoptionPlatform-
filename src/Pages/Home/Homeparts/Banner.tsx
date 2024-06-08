
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <div className="bg-[#F8A7B9] lg:w-[100%] lg:h-[400px] lg:flex flex-row lg:justify-center lg:items-end">
        <motion.div
          className="lg:w-[50%] p-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="banner-title">
            Free Adoption, <br />
            from us
          </h1>
          <div className="lg:flex lg:gap-10 flex-row gap-5 lg:w-full w-[70%]">
            <motion.button
              className="custom-button bg-black text-white mt-5 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Learn more
            </motion.button>
            <motion.button
              className="custom-button bg-[#FFD100] text-black mt-5 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Make a reservation
            </motion.button>
          </div>
        </motion.div>

        <div className="lg:w-[50%] flex items-end lg:mt-0">
          <motion.img
            src="/assets/cat.png"
            className="mb-[-7%] w-[40%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            src="/assets/dog.png"
            className="w-[40%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
      </div>
      <motion.div
        className="h-[54px] flex-col items-start section-text p-10 my-10 lg:mt-0 font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div>
          Throughout New York City <br />
          Dog Walking & Pet Sitting Services
        </div>
        <h6 className="lg:ml-[5%] mt-2">4.9 Yelp reviews</h6>
      </motion.div>
    </>
  );
};

export default Banner;
