const Happypets = () => {
  return (
    <div className=" my-[10%]  lg:my-0">
      <div className=" lg:flex   gap-2.5 items-center justify-between  ">
        <div className=" lg:h-[601.08px] pl-[40px]  ">
          <img src="/assets/humancarrypet.png" alt="" />
        </div>
        <div className=" flex flex-col items-center ">
          <div className=" lg:my-0 my-5 ">
            <img src="/public/updog.png" alt="" />
          </div>
          <div className="lg:ml-20">
            <h2 className=" lg:banner-title section-title font-bold lg:text-left text-center">
              Happy pets, <br />
              happy humans
            </h2>
            <p className="sectin-text lg:w-[70%]  lg:mt-[30px] text-[#2E3031] lg:p-0 p-5 text-justify">
              {" "}
              pops of color that will dazzle your wardrobe year round! pops of
              color that will dazzle your wardrobe year round!pops of color that
              will dazzle your wardrobe year round!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Happypets;
