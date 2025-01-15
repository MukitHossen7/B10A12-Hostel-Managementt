import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const MealDetails = () => {
  const { id } = useParams();
  const [likeCount, setLikeCount] = useState(0);
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { data: detailsData = {} } = useQuery({
    queryKey: ["mealDetails", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/meal-details/${id}`);
      return data;
    },
  });
  const handleLike = () => {
    setLikeCount(likeCount + 1);
    // Update like count on server
  };

  const handleMealRequest = () => {
    alert("Meal requested!");
    // Post request to save meal and user info with pending status
  };

  const addReview = (review) => {
    setReviews([...reviews, review]);
    // Post review to server
  };

  return (
    <div>
      <div className="px-4 py-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Meal Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={detailsData?.image}
              className="rounded-lg shadow-md w-full h-96 lg:h-[500px] object-cover"
            />
          </div>

          {/* Meal Info */}
          <div className="w-full lg:w-1/2">
            <h1 className="md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              {detailsData?.title}
            </h1>
            <p className="text-gray-600 mb-4">
              By:{" "}
              <span className="font-semibold">
                {detailsData?.distributor?.name}
              </span>
            </p>
            <p className="text-gray-700 mb-4">{detailsData?.description}</p>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Ingredients:
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                {detailsData?.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <p className="text-gray-600 mb-4">
              Posted on: {detailsData?.postTime}
            </p>

            <p className="text-gray-600 mb-4">
              Rating:{" "}
              <span className="font-semibold">{detailsData?.rating}</span>
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={handleLike}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
              >
                <FaThumbsUp /> Like ({likeCount})
              </button>
              <button
                onClick={handleMealRequest}
                className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition"
              >
                Request Meal
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Reviews ({reviews.length})
          </h2>

          <div className="mb-6">
            <textarea
              placeholder="Write your review here..."
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              onClick={() => addReview("This is a dummy review.")}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
            >
              Submit Review
            </button>
          </div>

          <div>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="border-b py-2">
                  <p>{review}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">
                No reviews yet. Be the first to review!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
