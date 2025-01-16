import { useState } from "react";
import { useEffect } from "react";
import PackageCard from "../PackageCard/PackageCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const MembershipSection = () => {
  const [packages, setPackages] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    const fetchPackages = async () => {
      const { data } = await axiosPublic.get(`/all-premiums`);
      setPackages(data);
    };
    fetchPackages();
  }, []);
  return (
    <section className="py-12">
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-5 text-gray-800">
          Upgrade to Premium
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Choose a plan that best fits your needs and unlock premium features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages?.map((pack) => (
            <PackageCard key={pack.id} pack={pack}></PackageCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
