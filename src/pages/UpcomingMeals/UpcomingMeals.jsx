import { useEffect } from "react";
import { useState } from "react";

const UpcomingMeals = () => {
  const [userSubscription, setUserSubscription] = useState("Bronze"); // Replace with user's subscription level fetched from DB.
  const foods = [
    {
      id: 1,
      category: "Breakfast",
      title: "Pancakes",
      image: "breakfast.jpg",
      rating: 4.5,
      price: "$5.99",
    },
    {
      id: 2,
      category: "Lunch",
      title: "Grilled Chicken",
      image: "lunch.jpg",
      rating: 4.7,
      price: "$9.99",
    },
    {
      id: 3,
      category: "Dinner",
      title: "Spaghetti",
      image: "dinner.jpg",
      rating: 4.8,
      price: "$12.99",
    },
    {
      id: 4,
      category: "Breakfast",
      title: "Omelette",
      image: "breakfast2.jpg",
      rating: 4.6,
      price: "$4.99",
    },
    {
      id: 5,
      category: "Lunch",
      title: "Salmon Salad",
      image: "lunch2.jpg",
      rating: 4.9,
      price: "$10.99",
    },
    {
      id: 6,
      category: "Dinner",
      title: "Steak",
      image: "dinner2.jpg",
      rating: 5.0,
      price: "$15.99",
    },
  ];
  const [meals, setMeals] = useState(foods);
  // Fetching upcoming meals (replace with your API endpoint).
  useEffect(() => {
    fetch("/api/upcoming-meals")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.error(err));
  }, []);

  const handleLike = (mealId) => {
    if (["Silver", "Gold", "Platinum"].includes(userSubscription)) {
      // Add a like to the meal
      fetch(`/api/like-meal/${mealId}`, { method: "POST" })
        .then((res) => res.json())
        .then((updatedMeal) => {
          setMeals((prevMeals) =>
            prevMeals.map((meal) =>
              meal.id === mealId ? { ...meal, likes: updatedMeal.likes } : meal
            )
          );
        })
        .catch((err) => console.error(err));
    } else {
      alert("Upgrade your subscription to like meals.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Upcoming Meals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
          >
            <img
              src={meal.image || "/default-meal.jpg"}
              alt={meal.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-700">
              {meal.title}
            </h2>
            <p className="text-gray-500 mt-2">{meal.description}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleLike(meal.id)}
                className={`px-4 py-2 rounded-md text-white ${
                  ["Silver", "Gold", "Platinum"].includes(userSubscription)
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Like
              </button>
              <span className="text-gray-600">{meal.likes} Likes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMeals;
