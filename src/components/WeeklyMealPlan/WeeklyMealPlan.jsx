const WeeklyMealPlan = () => {
  const meals = [
    { day: "Monday", meal: "Grilled Chicken with Rice", time: "Lunch" },
    { day: "Tuesday", meal: "Vegetable Pasta", time: "Dinner" },
    { day: "Wednesday", meal: "Beef Curry with Bread", time: "Lunch" },
    { day: "Thursday", meal: "Fried Fish with Salad", time: "Dinner" },
    { day: "Friday", meal: "Chicken Biryani", time: "Lunch" },
    { day: "Saturday", meal: "Paneer Butter Masala with Naan", time: "Dinner" },
    { day: "Sunday", meal: "Mixed Veg Soup with Rolls", time: "Lunch" },
  ];

  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto p-6 bg-white shadow rounded-md mt-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-4">
        Weekly Meal Plan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">{meal.day}</h3>
            <p className="text-gray-600">Meal: {meal.meal}</p>
            <p className="text-gray-600">Time: {meal.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyMealPlan;
