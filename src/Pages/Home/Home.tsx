import Banner from "./Homeparts/Banner";
import Happypets from "./Homeparts/Happypets";
import TutorSteps from "./Homeparts/TutorSteps";

import Whatwebest from "./Homeparts/Whatwebest";
import WhyRelyOnUs from "./Homeparts/WhyRelyOnUs";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Banner></Banner>
      <Happypets></Happypets>
      <Whatwebest></Whatwebest>
      <TutorSteps></TutorSteps>
      <WhyRelyOnUs></WhyRelyOnUs>
   
    </div>
  );
};

export default Home;
