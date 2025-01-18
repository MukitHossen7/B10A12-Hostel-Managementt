import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AllMealCard = ({ meal }) => {
  return (
    <div>
      <div
        key={meal._id}
        className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-lg"
      >
        <img
          src={meal?.image}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="flex justify-between mt-4 items-center">
          <h3 className="text-xl font-semibold">{meal?.title}</h3>
          <span className="bg-green-200 text-gray-900 px-3 text-sm rounded-full font-medium">
            {meal?.category}
          </span>
        </div>
        <p className="text-gray-600 text-base mt-2">
          {meal?.description.slice(0, 30)}...
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-600 font-bold">${meal?.price}</span>
          <Link to={`/meal/${meal._id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllMealCard;
