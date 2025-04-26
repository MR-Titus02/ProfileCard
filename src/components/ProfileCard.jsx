import React from "react";

function ProfileCard({ name, age, bio, image }) {
  const sayHi = () => {
    console.log(`Hi from ${name}!`);
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
      <button onClick={sayHi} style={styles.button}>
        Say Hi
      </button>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProfileCard;
