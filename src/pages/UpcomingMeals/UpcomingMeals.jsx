import { useContext } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import useAxiosInstance from "../../hooks/useAxiosInstance";

const UpcomingMeals = () => {
  //  subscription level fetched from DB.
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const axiosInstance = useAxiosInstance();
  const { data: upcomingMealUser = [], refetch } = useQuery({
    queryKey: ["upcomingMealUser"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/meal/upcoming-user`);
      return data;
    },
  });
  const { data: userBadge = {} } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/check-subscription/${user?.email}`
      );
      return data;
    },
  });
  const handleLike = async (likeId) => {
    if (!user) {
      toast.error("Please sign in to like meals.");
      return;
    }
    if (userBadge?.badge === "Bronze") {
      toast.error("Upgrade your subscription to like meals.");
      return;
    }
    try {
      await axiosInstance.patch(`/update-like/${likeId}`, {
        userEmail: user?.email,
      });
      toast.success("Like added successfully!");
      refetch();
    } catch (error) {
      if (error.status === 400) {
        toast.error("You've already liked this meal.");
      }
    }
  };

  // Fetching upcoming meals (replace with your API endpoint).

  // const handleLike = (mealId) => {
  //   if (["Silver", "Gold", "Platinum"].includes(userSubscription)) {
  //     // Add a like to the meal
  //     fetch(`/api/like-meal/${mealId}`, { method: "POST" })
  //       .then((res) => res.json())
  //       .then((updatedMeal) => {
  //         setMeals((prevMeals) =>
  //           prevMeals.map((meal) =>
  //             meal.id === mealId ? { ...meal, likes: updatedMeal.likes } : meal
  //           )
  //         );
  //       })
  //       .catch((err) => console.error(err));
  //   } else {
  //     alert("Upgrade your subscription to like meals.");
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Upcoming Meals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingMealUser.map((meal) => (
          <div
            key={meal?._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
          >
            <img
              src={meal?.image}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-700">
              {meal?.title}
            </h2>
            <p className="text-gray-500 mt-2">
              {meal?.description?.slice(0, 80)}...
            </p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleLike(meal._id)}
                className={`px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 ${
                  userBadge?.badge === "Bronze" && "hover:cursor-not-allowed"
                }`}
              >
                Like
              </button>
              <span className="text-gray-600">{meal?.likes} Likes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMeals;
