const Banner = () => {
  return (
    <>
      <div className="bg-[#F8A7B9] lg:w-[100%] lg:-[550px]  lg:flex  flex-row lg:justify-center  lg:items-end ">
        <div className="lg:w-[50%] p-5">
          <h1 className="banner-title ">
            Free Adoption , <br />
            from us
          </h1>
          <div className="lg:flex lg:gap-10 flex-row gap-5 lg:w-full w-[70%]">
            <button className="custom-button bg-black text-white mt-5 rounded-full ">
              {" "}
              Learn more
            </button>
            <button className="custom-button bg-[#FFD100] text-black mt-5 rounded-full ">
              {" "}
              Make a reservation
            </button>
          </div>
        </div>

        <div className="lg:w-[50%] flex items-end lg:mt-0 ">
          <img src="/assets/cat.png" className=" mb-[-7%]  w-[50%]" />
          <img src="/assets/dog.png" className=" w-[50%]" />
        </div>
      </div>
      <div className="h-[54px] flex-col items-start section-text p-10 my-10 lg:mt-0 font-bold">
        <div>
          Throughout New York City <br />
          Dog Walking & Pet Sitting Services
        </div>
        <h6 className="lg:ml-[5%] mt-2">4,9 Yelp reviews</h6>
      </div>
    </>
  );
};

export default Banner;
