import { useParams } from "react-router-dom";
import useAxiosInstance from "../../../../hooks/useAxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { BsCurrencyDollar } from "react-icons/bs";

const ViewMealsReviews = () => {
  const axiosInstance = useAxiosInstance();
  const { id } = useParams();
  console.log(id);
  const { data: reviews = {} } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/users-reviews/${id}`);
      return data;
    },
  });
  return (
    <div>
      <div className="py-10 px-3 lg:px-5 flex justify-center items-center">
        <Helmet>
          <title>View Meals || Hostel Management</title>
        </Helmet>
        <div className="bg-white shadow rounded-md p-4 w-full">
          <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-md">
              <img
                src={reviews?.foodData?.foodImg}
                className="w-full h-full lg:h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 shadow-lg"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-800 tracking-wide">
                {reviews?.foodData?.title}
              </h1>
              <p className="mt-2 text-base lg:text-lg text-gray-600">
                {reviews?.foodData?.description}
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <span className="px-4  bg-gray-200 text-gray-700 rounded-full text-sm">
                  {reviews?.foodData?.category}
                </span>
                <span className="text-sm text-gray-700">
                  {reviews?.foodData?.postTime}
                </span>
              </div>

              {/* Ingredients Section */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-700">
                  Ingredients:
                </h2>
                <ul className="list-inside list-disc text-gray-600">
                  {reviews?.foodData?.ingredients?.map((ingredient, index) => (
                    <li key={index} className="mt-2">
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <div>
                  <h3 className="text-xl lg:text-2xl font-medium text-blue-600 mt-3 flex items-center gap-1">
                    <BsCurrencyDollar className="text-2xl" />
                    {reviews?.foodData?.price}
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
                  Name: {reviews?.foodData?.distributor?.name}
                </p>
                <p className="text-gray-500">
                  Email: {reviews?.foodData?.distributor?.email}
                </p>
              </div>
            </div>

            {/* Rating, Likes, Reviews */}
            <div className="mt-6 flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">★</span>
                <span>{reviews?.foodData?.rating}</span>
                <span className="text-sm">/ 5</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>❤️</span>
                <span>{reviews?.foodData?.likes}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>💬</span>
                <span>{reviews?.foodData?.review}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMealsReviews;
