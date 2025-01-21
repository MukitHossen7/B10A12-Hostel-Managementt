// import bannerImg from "../../../src/assets/images/slider-2.jpg";
// const Banner = () => {
//   return (
//     <section className="relative bg-gray-100">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center "
//         style={{
//           backgroundImage: `url(${bannerImg})`,
//         }}
//       ></div>
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6  space-y-6">
//         <h1 className="text-4xl md:text-5xl font-bold">
//           Welcome to the Hostel Management System
//         </h1>
//         <p className="text-lg md:text-xl max-w-2xl">
//           Easily manage student meals, reviews, and requests efficiently in your
//           university hostel.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search for meals or reviews..."
//             className="w-full sm:w-72 px-4 py-2 rounded-lg text-black focus:outline-none"
//           />
//           <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold">
//             Search
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

// import bannerImg from "../../../src/assets/images/slider-2.jpg";

// const Banner = () => {
//   return (
//     <section className="relative bg-gray-100 h-[550px] md:h-[650px]">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${bannerImg})`,
//         }}
//       ></div>
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 space-y-6 h-full">
//         <h1 className="text-4xl md:text-5xl font-bold">
//           Welcome to the Hostel Management System
//         </h1>
//         <p className="text-lg md:text-xl max-w-2xl">
//           Easily manage student meals, reviews, and requests efficiently in your
//           university hostel.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
//           <input
//             type="text"
//             placeholder="Search for meals or reviews..."
//             className="w-full sm:w-72 px-4 py-2 rounded-lg text-black focus:outline-none"
//           />
//           <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold">
//             Search
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;
import bannerImg from "../../../src/assets/images/slider-2.jpg";

const Banner = () => {
  return (
    <section className="relative bg-gray-100 h-[300px] md:h-[550px]">
      {/* Background Image */}
      <div
        className="absolute inset-0  w-full h-full"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundOrigin: "center",
          //   backgroundAttachment: "fixed",
          backgroundClip: "border-box",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-800 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 space-y-5 h-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Welcome to the <br></br> Hostel Management
        </h1>
        <p className="text-base md:text-lg lg:text-xl md:max-w-xl  lg:max-w-2xl text-gray-100">
          Easily manage student meals, reviews, and requests efficiently in your
          university hostel.
        </p>
        <div className="flex flex-row w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search for meals or reviews..."
            className="w-full sm:w-72 px-4 py-2 rounded-l-lg text-black focus:outline-none bg-gray-100"
          />
          <button className="hover:bg-blue-900 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-r-lg font-semibold">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
