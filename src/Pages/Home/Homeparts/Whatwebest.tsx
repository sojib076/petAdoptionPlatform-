
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LuCat } from "react-icons/lu";
import { MdMoney, MdOutlineLocationOn, MdOutlinePets } from "react-icons/md";

const Whatwebest = () => {
  const whythisplatform = [
    {
      id: 1,
      title: "Free Adoption",
      description: "This platform is to connect people to get a free adoption.",
      icon: <LuCat />,
    },
    {
      id: 2,
      title: "Home for All pets",
      description: "Get a Pet or give pet for adoption.",
      icon: <MdOutlinePets />,
    },
    {
      id: 3,
      title: "Your Location",
      description: "You can find the pet near your location.",
      icon: <MdOutlineLocationOn />,
    },
    {
      id: 4,
      title: "Can I donate money?",
      description: "Yes, you can donate money to help the pets.",
      icon: <MdMoney />,
    },
  ];

  return (
    <div className="lg:mt-0 whatwebg">
      <div>
        <h1 className="text-center section-title font-semibold p-5">
          Why this Platform?
        </h1>
      </div>
      <div className="lg:mt-[70px] mt-10 text-left">
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:px-[70px] gap-10">
          {whythisplatform.map((item) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={item.id}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.9 }}
                className="flex flex-col items-center justify-center w-[90%] lg:w-[240px] shadowbox scaleuphover mx-auto"
              >
                <div className="flex items-center justify-center bg-gray-100 w-16 h-16 rounded-full hover:animate-spin">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h1 className="text-lg font-semibold mt-5">{item.title}</h1>
                <p className="mt-2 text-justify section-text">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Whatwebest;
