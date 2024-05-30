import { useState } from "react";
import Select, { MultiValue } from "react-select";
import { LocationOption, Product } from "../../context/Types";
import { Link } from "react-router-dom";
import Loadingcom from "../../components/Loading/Loading";
import { startLoading } from "../../context/features/loading/loadingSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const locations: LocationOption[] = [
  { value: "dhaka", label: "Dhaka" },
  { value: "chittagong", label: "Chittagong" },
  { value: "sylhet", label: "Sylhet" },
  { value: "khulna", label: "Khulna" },
  { value: "barishal", label: "Barishal" },
  { value: "rajshahi", label: "Rajshahi" },
];
const PetList = () => {
  const defaultLocation: LocationOption = { value: "dhaka", label: "Dhaka" };
  const [selectedLocations, setSelectedLocations] = useState<MultiValue<LocationOption>>([defaultLocation]);

  console.log(selectedLocations);
  const [selectedOption, setSelectedOption] = useState<string>("all");
  console.log(selectedOption);

  const products: Product[] = [
    {
      petid: 1,
      imageUrl:
        "https://img.freepik.com/free-photo/old-rusty-fishing-boat-slope-along-shore-lake_181624-44902.jpg?w=740&t=st=1716548250~exp=1716548850~hmac=ec5b5d712b91437f2322a0bdd8b7806df17c74d9297d9008f3763a4b45a96f25",
      productName: "Product 1",
      productDescription: "Description for Product 1 goes here.",
    },
    {
      petid: 2,
      imageUrl:
        "https://img.freepik.com/free-photo/wooden-boats_114579-44.jpg?size=626&ext=jpg",
      productName: "Product 2",
      productDescription: "Description for Product 2 goes here.",
    },
    {
      petid: 3,
      imageUrl:
        "https://img.freepik.com/free-photo/wooden-boats_114579-44.jpg?size=626&ext=jpg",
      productName: "Product 2",
      productDescription: "Description for Product 2 goes here.",
    },
    {
      petid: 4,
      imageUrl:
        "https://img.freepik.com/free-photo/wooden-boats_114579-44.jpg?size=626&ext=jpg",
      productName: "Product 2",
      productDescription: "Description for Product 2 goes here.",
    },
    {
      petid: 5,
      imageUrl:
        "https://img.freepik.com/free-photo/wooden-boats_114579-44.jpg?size=626&ext=jpg",
      productName: "Product 2",
      productDescription: "Description for Product 2 goes here.",
    },
  ];

  const Loading = useSelector(
    (state: any) => state.loading.isLoading,
  ) as boolean;
  const dispatch = useDispatch();
  const handelLoadMore = () => {
    dispatch(startLoading());
  };
  
  return Loading ? (
    <Loadingcom />
  ) : (
    <>
      <div className="font-[Fredoka]">
        <h1 className="my-10 lg:px-10 px-5"> Home / Pet List /</h1>
        <div className=" grid lg:grid-cols-1 lg:px-10 px-4">
          <div className="">
            <div className="location-selector">
              <Select
                isMulti
                name="locations"
                options={locations}
                className="basic-multi-select lg:w-[90%] mb-4"
                classNamePrefix="select"
                placeholder={defaultLocation.label}
                onChange={(selectedOptions) =>
                  setSelectedLocations(
                    selectedOptions as MultiValue<LocationOption>,
                  )
                }
              />
            </div>
            <h1>
              <span className="text-2xl font-bold">Pet List</span>
            </h1>
            <div className="lg:flex lg:justify-between lg:items-center">
              <h1>Your search location has 8 pets available</h1>
              <div className="flex  gap-5 items-center lg:mt-0 mt-4">
                <div>
                  <input
                    type="radio"
                    name="type"
                    id="cat"
                    value="cat"
                    className="mr-2"
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label htmlFor="cat" className="font-['Readex']">
                    Cat
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="type"
                    id="dog"
                    value="dog"
                    className="mr-2"
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  <label htmlFor="dog">Dog</label>
                </div>
              </div>
            </div>
          </div>

          <div className=" grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-0 lg:gap-0 ">
            {products.map((product) => (
              <div key={product.petid} className="carddesign ">
                <img
                  className="lg:h-48 lg:w-full  object-cover object-center"
                  src={product.imageUrl}
                />
                <div className="lg:p-4 px-2">
                  <h2 className="mb-2 text-lg font-medium  text-gray-900">
                    {product.productName}
                  </h2>
                  <p className="mb-2 text-base  text-gray-700">
                    {product.productDescription}
                  </p>
                  <div className=" ">
                    <Link
                      to={`/petdetails/${product.petid}`}
                      className="text-black"
                      onClick={handelLoadMore}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default PetList;
