import { useEffect, useState } from "react";
import MealCard from "../MealCard/MealCard";
import useAxiosPublic from "./../../hooks/useAxiosPublic";

const MealsCategory = () => {
  const [activeTab, setActiveTab] = useState("All Meals");
  const [meals, setMeals] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const { data } = await axiosPublic.get(
          `/all-meals?category=${activeTab}`
        );
        setMeals(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMeals();
  }, [activeTab]);
  const categories = ["Breakfast", "Lunch", "Dinner", "All Meals"];
  return (
    <section className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pt-4 pb-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
        Meals by Category
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg font-semibold 
              ${
                activeTab === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-gray-100"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } 
            `}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Meal Cards */}
      {meals.length === 0 ? (
        <p className="text-center text-gray-800 font-semibold text-3xl py-16 italic">
          No meals found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals?.slice(0, 3).map((meal) => (
            <MealCard key={meal._id} meal={meal}></MealCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default MealsCategory;
