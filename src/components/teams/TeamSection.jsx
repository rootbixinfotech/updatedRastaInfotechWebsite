import React from "react";

// Replace these with real image imports
import team1 from "../../assets/team/img1.jpg";
import team2 from "../../assets/team/img2.jpg";
import team3 from "../../assets/team/img3.jpg";
import team4 from "../../assets/team/img4.jpg";

const teamMembers = [
  { img: team1, name: "John Doe", role: "Director" },
  { img: team2, name: "Mike Doe", role: "Senior Designer" },
  { img: team3, name: "Jane Doe", role: "Senior Designer" },
  { img: team4, name: "Karen Doe", role: "Project Manager" },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-6 bg-white" id="team">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">MEET THE TEAM</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-gray-800 mb-12 ">
          Introducing the Professionals Driving Our Success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[250px] object-cover rounded"
              />
              <h3 className="mt-4 text-lg font-semibold">{member.name} </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
