import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";

const ViewMeals = () => {
  const { id } = useParams();
  const axiosInstance = useAxiosInstance();

  const { data: meals = {} } = useQuery({
    queryKey: ["meals", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/view-meal/${id}`);
      return data;
    },
  });
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className=" p-8 md:p-16 bg-white  shadow-md rounded-md">
          <div className="flex flex-col gap-8 lg:flex-row items-center ">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
              <img
                src={meals?.image}
                className="w-full h-full lg:h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 shadow-lg"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 tracking-wide">
                {meals?.title}
              </h1>
              <p className="mt-2 text-base lg:text-xl text-gray-600">
                {meals?.description}
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <span className="px-6 py-2 bg-teal-200 text-teal-700 rounded-full text-sm">
                  {meals?.category}
                </span>
                <span className="text-sm text-gray-500">{meals?.postTime}</span>
              </div>

              {/* Ingredients Section */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-700">
                  Ingredients:
                </h2>
                <ul className="list-inside list-disc text-gray-600">
                  {meals?.ingredients?.map((ingredient, index) => (
                    <li key={index} className="mt-2">
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <div>
                  <h3 className="text-2xl font-bold text-teal-600 mt-3">
                    Price: ${meals?.price}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
            {/* Price and Distributor */}
            <div className="mt-6 flex justify-between items-center bg-white shadow-md px-4 py-2 rounded-md">
              <div className=" ">
                <h4 className="font-semibold text-gray-800 text-xl mb-2">
                  Distributor
                </h4>
                <p className="text-gray-500">
                  Name: {meals?.distributor?.name}
                </p>
                <p className="text-gray-500">
                  Email: {meals?.distributor?.email}
                </p>
              </div>
            </div>

            {/* Rating, Likes, Reviews */}
            <div className="mt-6 flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">★</span>
                <span>{meals?.rating}</span>
                <span className="text-sm">/ 5</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>❤️</span>
                <span>{meals?.likes}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>💬</span>
                <span>{meals?.reviewsCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMeals;
