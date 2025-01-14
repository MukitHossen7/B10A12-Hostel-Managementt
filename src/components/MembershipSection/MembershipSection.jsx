const MembershipSection = () => {
  const packages = [
    {
      name: "Silver",
      price: "$10/month",
      benefits: ["Basic Features", "Email Support", "1 Meal Request Per Day"],
      color: "bg-gray-200",
    },
    {
      name: "Gold",
      price: "$20/month",
      benefits: [
        "All Silver Benefits",
        "Priority Support",
        "5 Meal Requests Per Day",
      ],
      color: "bg-yellow-300",
    },
    {
      name: "Platinum",
      price: "$30/month",
      benefits: [
        "All Gold Benefits",
        "24/7 Support",
        "Unlimited Meal Requests",
      ],
      color: "bg-blue-300",
    },
  ];

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
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${pkg.color} hover:scale-105 transform transition-all`}
            >
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
                {pkg.name} Package
              </h3>
              <p className="text-2xl font-semibold text-center text-gray-700 mb-4">
                {pkg.price}
              </p>
              <ul className="mb-6 text-gray-600 space-y-2">
                {pkg.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <span className="material-icons text-green-500 mr-2">
                      check_circle
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
