import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { stopLoading } from "../../../context/features/loading/loadingSlice";
import { useEffect, useState } from "react";

const AdminPetDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);
  const data = useLoaderData();

  const dispatch = useDispatch();
  dispatch(stopLoading());
  const imageurl = [
    "/assets/humancarrypet.png",
    "/assets/dog.png",
    "/assets/cat.png",
  ];
  const [bigImage, setBigImage] = useState(imageurl[0]);
  const [animationClass, setAnimationClass] = useState("");

  const handleImageClick = (url: string) => {
    setAnimationClass("animate-pulse");
    setTimeout(() => {
      setBigImage(url);
      setAnimationClass("");
    }, 300);
  };
  return (
    <>
      <div className="grid lg:grid-cols-2 lg:p-10 overflow-hidden ">
        <div className="flex  flex-col-reverse justify-evenly sticky">
          <div className="grid lg:grid-flow-col  grid-cols-3 mt-5 p-2 ">
            {imageurl.map((url, index) => (
              <img
                src={url}
                alt="pet"
                className="w-20 h-20 cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                onClick={() => handleImageClick(url)}
                key={index}
              />
            ))}
          </div>
          <img
            src={bigImage}
            alt="pet"
            className={`w-96 h-96  ${animationClass}`}
          />
        </div>
        <div>
          <div className=" w-[95%]  lg:mt-[5%]  mt-10 p-5 lg:p-0">
            <h1 className=" lg:text-2xl text-xl font-semibold text-gray-800">
              ACANA Singles Grain Free Limited Ingredient Diet Duck and Pear
              Formula Dog Treats
            </h1>
            <h1 className="my-2 font-bold"> Description : </h1>
            <p className=" text-xm  text-black text-justify lg:pb-5 pb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus dolor cum pariatur error, adipisci, quo perferendis
              mollitia possimus repellat unde ipsa labore aliquid nulla est vero
              nisi, maiores debitis ipsum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Unde rerum velit tenetur ut nemo,
              ullam animi cumque, eius amet perspiciatis molestiae explicabo
              laborum, optio minus quo corporis impedit dolores voluptas!.Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
              dolor cum pariatur error, adipisci, quo perferendis mollitia
              possimus repellat unde ipsa labore aliquid nulla est vero nisi,
              maiores debitis ipsum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Unde rerum velit tenetur ut nemo, ullam animi
              cumque, eius amet perspiciatis molestiae explicabo laborum, optio
              minus quo corporis impedit dolores voluptas
            </p>
            <div className="mt-6 flex gap-5 ">
              <button className="lg:w-[40%] bg-yellow-500 custom-button   font-bold  rounded hover:bg-yellow-600">
                Block This Pet 
              </button>
              <button className="lg:w-[40%] bg-yellow-500 custom-button   font-bold  rounded hover:bg-yellow-600">
                Block User 
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default AdminPetDetails;
