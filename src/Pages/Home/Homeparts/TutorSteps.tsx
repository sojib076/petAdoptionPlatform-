

const stepsData = [
  {
    number: "1",
    title: "CREATE USER PROFILE",
    description: "Create your profile in minutes with sign up information.",
    bgColor: "bg-pink-300",
    position: "left"
  },
  {
    number: "2",
    title: "Find Pet on you Location",
    description: "You can find pets on your location and adopt them.",
    bgColor: "bg-blue-300",
    position: "right"
  },
  {
    number: "3",
    title: "Post Your Pet for Adoption",
    description: "Post your pet for adoption and find a new home for them.",
    bgColor: "bg-yellow-500",
    position: "left"
  },
  {
    number: "4",
    title: "Help Others Find Their Pet",
    description: "Help others find their pet by Donating",
    bgColor: "bg-pink-300",
    position: "right"
  }
];

const TutorSteps = () => {
  return (
    <div className="bg-[#E5EEFF] p-6 md:p-10 relative my-16">
      <h2 className="text-center font-semibold section-title">
        How It Works
      </h2>
      <div className="relative flex flex-col space-y-10 lg:mt-10 md:mt-0">

        {stepsData.map((step, index) => {
          const isLeft = step.position === "left";
          return (
            <div key={index} className="lg:w-[80%] mx-auto lg:mt-10 mt-5 hover:scale-110 transition-all pb-2">
              <div className={`relative flex items-center bg-[white] ${isLeft ? "flex-row" : "flex-row-reverse"} lg:p-4 
              p-3 shadow-xl shadow-[#E5EEFF]`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-full text-white ${step.bgColor} z-10 `}>
                  <span className="text-lg font-bold">{step.number}</span>
                </div>
                <div className={`flex-1 ${isLeft ? "lg:pl-8 pl-6" : "lg:pr-8 pr-6"}`}>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-gray-600 text-justify">{step.description}</p>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TutorSteps;
