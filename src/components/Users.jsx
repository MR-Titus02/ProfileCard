import React from "react";
import ProfileCard from "./ProfileCard";

function Users() {
  const profiles = [
    {
      name: "John Doe",
      age: 24,
      bio: "Full-stack developer and cybersecurity learner.",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Ava Williams",
      age: 29,
      bio: "Designer who loves minimalistic art and coffee.",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Ethan Brown",
      age: 32,
      bio: "Backend engineer with a passion for cloud computing.",
      image: "https://i.pravatar.cc/100?img=3",
    },
    {
      name: "Sophia Lee",
      age: 27,
      bio: "Marketing expert, traveler, and foodie.",
      image: "https://i.pravatar.cc/100?img=4",
    },
    {
      name: "Liam Johnson",
      age: 22,
      bio: "Student, gamer, and aspiring software engineer.",
      image: "https://i.pravatar.cc/100?img=5",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          age={profile.age}
          bio={profile.bio}
          image={profile.image}
        />
      ))}
    </div>
  );
}

export default Users;
