import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import ReactStars from "react-rating-stars-component";
const MealDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const axiosInstance = useAxiosInstance();
  const { data: detailsData = {}, refetch } = useQuery({
    queryKey: ["mealDetails", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/meal-details/${id}`);
      return data;
    },
  });
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/reviews/${id}`);
      return data;
    },
  });
  console.log(reviews);
  const handleMealRequest = () => {
    console.log("request is working");
  };

  const handleLike = async (likeId) => {
    if (!user) {
      toast.error("Please Login!");
      return;
    }
    await axiosInstance.patch(`/update-like/${likeId}`);
    toast.success("Like added successfully!");
    refetch();
  };
  const handleReview = async (e) => {
    e.preventDefault();
    const description = e.target.description.value;
    const rating = parseInt(e.target.rating.value);
    const reviewData = {
      description,
      rating,
      foodId: detailsData?._id,
      foodImg: detailsData?.image,
    };
    console.log(reviewData);
    try {
      await axiosPublic.post(`/reviews`, reviewData);
      await axiosPublic.patch(`/update-reviews/${detailsData?._id}`);
      e.target.reset();
    } catch (error) {
      console.log(error);
    } finally {
      refetch();
    }
  };

  return (
    <div>
      <div className="px-4 py-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Meal Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={detailsData?.image}
              className="rounded-lg shadow-md w-full h-96 lg:h-[450px] object-cover"
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
                onClick={() => handleLike(detailsData._id)}
                className={`flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition `}
              >
                <FaThumbsUp /> Like({detailsData?.likes})
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
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[40%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Reviews ({detailsData?.reviewsCount})
            </h2>

            <div className="mb-6">
              <form
                onSubmit={handleReview}
                className="bg-white shadow-md rounded-md p-4"
              >
                <div className="">
                  <textarea
                    name="description"
                    placeholder="Write your review here..."
                    className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="2"
                    required
                  ></textarea>

                  {/* Rating Dropdown */}
                  <div className="mt-4">
                    <label
                      htmlFor="rating"
                      className="block mb-2 text-base font-medium text-gray-700"
                    >
                      Rate your experience
                    </label>
                    <select
                      id="rating"
                      name="rating"
                      required
                      className="w-full border rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="" disabled selected>
                        Select a rating
                      </option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </select>
                  </div>
                </div>

                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">
                  Submit Review
                </button>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-[60%] lg:mt-12">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review._id} className="py-2">
                  <div className="bg-white shadow-md rounded-md px-4 py-4 border border-gray-100 flex items-center gap-4">
                    <div>
                      <img
                        src={review?.foodImg}
                        className="w-14 h-14 object-cover rounded-md"
                      ></img>
                    </div>
                    <div className="">
                      <p className="text-lg font-semibold -mb-1">
                        {review?.description}
                      </p>
                      <div>
                        <ReactStars
                          count={5}
                          value={review?.rating}
                          size={24}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor={
                            review?.rating >= 4
                              ? "#4caf50"
                              : review?.rating >= 3
                              ? "#ffc107"
                              : "#f44336"
                          }
                        />
                      </div>
                    </div>
                  </div>
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
