import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { stopLoading } from "../../context/features/loading/loadingSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const Petdetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fakedata = useLoaderData() as any
  const data = fakedata?.data as Detailspage
  const dispatch = useDispatch();
  dispatch(stopLoading());
  const imageurl = [
    data?.imageOne,
    data?.imageTwo,
    data?.imageTwo,
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


  const handelapply = async () => {
    const petinfo = {
      petname: data?.petname,
      petid: data?._id,
      addedEmail: data?.userEmail,
    }
    const token = localStorage.getItem("token"); // Get the token from local storage
    try{
         await axios.post(`${process.env.data_url}/requestpet/applypet`, {
        petinfo
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
   
    }catch(error:any){
      console.error('Error applying for pet:', error.response ? error.response.data : error.message);
    }
    
  }

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
              Pet Name : {data?.petname}
            </h1>
            <h1 className="my-2 font-bold"> Description : </h1>

            <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>

            <div className="mt-6">
              <button className="lg:w-[50%] bg-yellow-500 custom-button   font-bold  rounded hover:bg-yellow-600" onClick={handelapply}>
                Apply Now for Adoption
              </button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Petdetails;
