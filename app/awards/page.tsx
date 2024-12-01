// "use client";
// import React, { useState } from "react";

// const awardsList = [
//   {
//     id: 1,
//     title: "Golden Boot",
//     description:
//       "Awarded to the top goal scorer of the tournament. In 2024, Erling Haaland claimed the award for his outstanding scoring record.",
//     image: "/golden-boot.jpg",
//   },
//   {
//     id: 2,
//     title: "Golden Ball",
//     description:
//       "Given to the best player of the tournament. In 2024, Lionel Messi received this honor for his consistent brilliance.",
//     image: "/golden-ball.jpg",
//   },
//   {
//     id: 3,
//     title: "Golden Glove",
//     description:
//       "Awarded to the best goalkeeper of the tournament. Emiliano Martínez won the award in 2024 for his incredible saves.",
//     image: "/golden-glove.jpg",
//   },
//   {
//     id: 4,
//     title: "Fair Play Award",
//     description:
//       "Awarded to the team with the best disciplinary record. Argentina won the award in 2024 for their exemplary sportsmanship.",
//     image: "/fair-play.jpg",
//   },
//   {
//     id: 5,
//     title: "Best Young Player",
//     description:
//       "Given to the most outstanding young player of the tournament. In 2024, Jude Bellingham received this award for his dynamic midfield performances.",
//     image: "/young.jpg",
//   },
//   {
//     id: 6,
//     title: "Ballon d'Or",
//     description:
//       "The prestigious award given to the best footballer in the world. Lionel Messi won his 8th Ballon d'Or in 2024, further solidifying his legacy as one of the greatest players in football history.",
//     image: "/ball-n.jpg",
//   },
// ];

// export default function AwardsPage() {
//   const [selectedAward, setSelectedAward] = useState<any | null>(null);

//   const handleCardClick = (award: any) => {
//     setSelectedAward(award);
//   };

//   const closeModal = () => {
//     setSelectedAward(null);
//   };

//   return (
//     <div
//       className="bg-cover bg-center bg-no-repeat min-h-screen"
//       style={{ backgroundImage: "url('back-award.jpg')" }}
//     >
//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
//         <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Football Awards</h1>
//         </div>
//       </header>

//       {/* Main content */}
//       <main className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-8 text-white">
//           Awards
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {awardsList.map((award) => (
//             <div
//               key={award.id}
//               onClick={() => handleCardClick(award)}
//               className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition transform"
//             >
//               <img
//                 src={award.image}
//                 alt={award.title}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{award.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Modal */}
//       {selectedAward && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               ✖
//             </button>
//             <img
//               src={selectedAward.image}
//               alt={selectedAward.title}
//               className="w-full h-56 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-2xl font-bold mb-2">{selectedAward.title}</h3>
//             <p className="text-gray-600">{selectedAward.description}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import Header from "@/components/Header"; // Import the header component

const awardsList = [
      {
        id: 1,
        title: "Golden Boot",
        description:
          "Awarded to the top goal scorer of the tournament. In 2024, Erling Haaland claimed the award for his outstanding scoring record.",
        image: "/golden-boot.jpg",
      },
      {
        id: 2,
        title: "Golden Ball",
        description:
          "Given to the best player of the tournament. In 2024, Lionel Messi received this honor for his consistent brilliance.",
        image: "/golden-ball.jpg",
      },
      {
        id: 3,
        title: "Golden Glove",
        description:
          "Awarded to the best goalkeeper of the tournament. Emiliano Martínez won the award in 2024 for his incredible saves.",
        image: "/golden-glove.jpg",
      },
      {
        id: 4,
        title: "Fair Play Award",
        description:
          "Awarded to the team with the best disciplinary record. Argentina won the award in 2024 for their exemplary sportsmanship.",
        image: "/fair-play.jpg",
      },
      {
        id: 5,
        title: "Best Young Player",
        description:
          "Given to the most outstanding young player of the tournament. In 2024, Jude Bellingham received this award for his dynamic midfield performances.",
        image: "/young.jpg",
      },
      {
        id: 6,
        title: "Ballon d'Or",
        description:
          "The prestigious award given to the best footballer in the world. Lionel Messi won his 8th Ballon d'Or in 2024, further solidifying his legacy as one of the greatest players in football history.",
        image: "/ball-n.jpg",
      },
    ];

export default function AwardsPage() {
  const [selectedAward, setSelectedAward] = useState<any | null>(null);

  const handleCardClick = (award: any) => {
    setSelectedAward(award);
  };

  const closeModal = () => {
    setSelectedAward(null);
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-full"
      style={{ backgroundImage: "url('back-award.jpg')" }}
    >
      <Header /> 

      {/* Main content */}
      <main className="pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsList.map((award) => (
            <div
              key={award.id}
              onClick={() => handleCardClick(award)}
              className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition transform"
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{award.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <img
              src={selectedAward.image}
              alt={selectedAward.title}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedAward.title}</h3>
            <p className="text-gray-600">{selectedAward.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
