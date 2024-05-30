import {
  MdOutlineAttachMoney,
  MdOutlineHealthAndSafety,
  MdOutlinePeople,
  MdOutlinePets,
} from "react-icons/md";

const WhyRelyOnUs = () => {
  const whyus = [
    {
      id: 1,
      title: "Pet Safety",
      description: "We want to ensure the safety of all abandoned pets.",
      icon: <MdOutlineHealthAndSafety />,
    },
    {
      id: 2,
      title: "Free Pets",
      description:
        "We provide free pets to loving homes willing to take care of them.",
      icon: <MdOutlinePets />,
    },
    {
      id: 3,
      title: "Affordable Care",
      description: "We offer affordable pet care services for all adopters.",
      icon: <MdOutlineAttachMoney />,
    },
    {
      id: 4,
      title: "Community Engagement",
      description:
        "We actively engage with the community to promote responsible pet ownership.",
      icon: <MdOutlinePeople />,
    },
  ];

  return (
    <div className="my-16 whyrely  py-10  ">
      <div>
        <h2 className="text-center font-semibold section-title ">
          We Work For
        </h2>
        <div className=" mt-16  w-[90%] lg:w-[70%] mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1   gap-10 lg:px-0  ">

            {whyus.map((item) => (
              <div key={item.id} className="flex lg:flex-row flex-col items-center justify-center gap-5 lg:w-[450px] scaleuphover shadowbox">
                <div className="flex items-center justify-center">
                  <span className="text-3xl bg-gray-200 rounded-full p-5 ">
                    
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h1 className="text-lg font-semibold mt-5 text-center">
                    {item.title}
                  </h1>
                  <p className="text-center mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRelyOnUs;
