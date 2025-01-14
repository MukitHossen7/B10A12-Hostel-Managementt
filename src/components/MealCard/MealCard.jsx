import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{meal.title}</h3>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Price:</span> {meal.price}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Rating:</span> {meal.rating} ⭐
          </p>
          <Link to="/meal/1">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              onClick={() => console.log(`Redirect to /meal/${meal.id}`)}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
