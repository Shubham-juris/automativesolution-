import React from 'react';

const teamMembers = [
  {
    name: "Rahul Mehta",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Sharma",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rajiv Verma",
    role: "Service Network Lead",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg w-60">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
