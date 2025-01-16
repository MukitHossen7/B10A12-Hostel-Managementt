import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosInstance from "../../hooks/useAxiosInstance";
import PurchaseModal from "../../components/Modal/PurchaseModal";

const CheckoutPage = () => {
  const { name } = useParams();
  const [packageData, setPackageData] = useState({});
  const axiosInstance = useAxiosInstance();
  useEffect(() => {
    const fetchPackages = async () => {
      const { data } = await axiosInstance.get(`/all-premiums/${name}`);
      setPackageData(data);
    };
    fetchPackages();
  }, []);
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="py-20">
      <div
        className={`max-w-md mx-4 md:mx-auto rounded overflow-hidden shadow-lg ${packageData?.color} p-6`}
      >
        <h2 className="text-2xl font-bold text-gray-800">
          {packageData?.name}
        </h2>
        <p className="text-xl text-gray-600 mt-2">{packageData?.price}</p>
        <ul className="mt-4 text-gray-700">
          {packageData?.benefits?.map((benefit, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 w-full bg-yellow-500 text-white py-2 rounded-full hover:bg-yellow-600"
        >
          Subscribe Now
        </button>
      </div>
      <PurchaseModal closeModal={closeModal} isOpen={isOpen}></PurchaseModal>
    </div>
  );
};

export default CheckoutPage;
