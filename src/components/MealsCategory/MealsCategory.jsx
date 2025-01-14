import { useState } from "react";

const MealsCategory = () => {
  const [activeTab, setActiveTab] = useState("All Meals");

  const categories = ["Breakfast", "Lunch", "Dinner", "All Meals"];

  // Sample meal data for demonstration
  const meals = [
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

  const filteredMeals =
    activeTab === "All Meals"
      ? meals
      : meals.filter((meal) => meal.category === activeTab);

  return (
    <section className="py-10 w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
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
                  ? "bg-green-500 text-white"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMeals.map((meal) => (
          <div
            key={meal.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={meal.image}
              alt={meal.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {meal.title}
              </h3>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Price:</span> {meal.price}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Rating:</span> {meal.rating} ⭐
              </p>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                onClick={() => console.log(`Redirect to /meal/${meal.id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MealsCategory;
