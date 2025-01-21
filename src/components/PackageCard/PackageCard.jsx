import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PackageCard = ({ pack }) => {
  return (
    <Link to={`/checkout/${pack?.name}`}>
      <div
        className={`p-6 rounded-lg shadow-lg ${
          pack?.name === "Gold" && "bg-amber-300"
        } ${pack?.name === "Silver" && "bg-gray-200"} ${
          pack?.name === "Platinum" && "bg-blue-300"
        } hover:scale-105 transform transition-all`}
      >
        <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
          {pack?.name} Package
        </h3>
        <p className="text-2xl font-semibold text-center text-gray-700 mb-4">
          ${pack.price}/Per Month
        </p>
      </div>
    </Link>
  );
};

export default PackageCard;
