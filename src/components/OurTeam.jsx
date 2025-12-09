// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function OurTeam() {
//   const [team, setTeam] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/team")
//       .then(res => setTeam(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="mt-10 text-center">
//       <h2 className="text-3xl font-bold">Our Team</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//         {team.map(member => (
//           <div key={member.id} className="p-4 border rounded shadow">
//             <img src={member.photo} alt={member.name} className="rounded-full mx-auto w-24 h-24" />
//             <h3 className="font-bold mt-2">{member.name}</h3>
//             <p className="text-gray-600">{member.role}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OurTeam() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/team").then((res) => setTeam(res.data));
  }, []);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
              <img
                src={member.image || "https://via.placeholder.com/150"}
                alt={member.name}
                className="w-100 h-100 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

