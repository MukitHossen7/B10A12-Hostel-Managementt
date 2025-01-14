import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useEffect, useState } from "react";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
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
  const fetchMeals = async () => {
    const { data } = await axios.get(
      `/api/meals?search=${search}&category=${category}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&page=${page}`
    );
    setMeals((prevMeals) => [...prevMeals]);
    setHasMore(data.hasMore);
    setPage((prevPage) => prevPage + 1);
  };
  //   ...data?.meals
  useEffect(() => {
    setMeals([]);
    setPage(1);
    fetchMeals();
  }, [search, category, priceRange]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Meals</h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search meals..."
          className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-gray-300 px-4 py-2 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <div className="flex items-center gap-2">
          <span>Price:</span>
          <input
            type="number"
            placeholder="Min"
            className="border border-gray-300 px-2 py-1 rounded-md w-16"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            className="border border-gray-300 px-2 py-1 rounded-md w-16"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={meals.length}
        next={fetchMeals}
        hasMore={hasMore}
        loader={<h4 className="text-center my-4">Loading...</h4>}
        endMessage={
          <p className="text-center my-4">You have seen all the meals!</p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods?.map((meal) => (
            <div
              key={meal._id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-lg"
            >
              <img
                src={meal.image}
                alt={meal.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{meal.title}</h3>
              <p className="text-gray-600">{meal.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-green-600 font-bold">${meal.price}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MealsPage;
