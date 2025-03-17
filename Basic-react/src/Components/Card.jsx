import React from "react";
import ToggleBtn from "./ToggleBtn";
const Card = () => {
  const user = {
    name: "Johnathan Doe",
    email: "johnathan.doe@example.com",
    bio: "🚀 Passionate Full Stack Developer with expertise in MERN stack, cloud computing, and scalable web applications. Enthusiastic about open-source contributions and AI-driven solutions.",
    location: "📍 San Francisco, CA",
    experience: "💼 5+ years experience in software development",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "AWS", "GraphQL"],
    interests: "🎮 Gaming | 📚 Tech Blogs | 🌍 Traveling",
  };

  return (
    <div style={styles.card}>
      <img
        src="https://via.placeholder.com/120"
        alt="Profile"
        style={styles.avatar}
      />
      <ToggleBtn />
      <h2 style={styles.name}>{user.name}</h2>
      <p style={styles.email}>{user.email}</p>
      <p style={styles.bio}>{user.bio}</p>
      <p style={styles.detail}>{user.location}</p>
      <p style={styles.detail}>{user.experience}</p>
      <p style={styles.skills}>
        <strong>Skills:</strong> {user.skills.join(", ")}
      </p>
      <p style={styles.interests}>
        <strong>Interests:</strong> {user.interests}
      </p>
      <button style={styles.button}>Follow</button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    textAlign: "center",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif",
    transition: "0.3s ease-in-out",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  name: {
    fontSize: "22px",
    color: "#333",
    margin: "10px 0",
  },
  email: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "15px",
  },
  bio: {
    fontSize: "16px",
    color: "#444",
    fontStyle: "italic",
    marginBottom: "15px",
  },
  detail: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  skills: {
    fontSize: "14px",
    color: "#222",
    marginBottom: "10px",
  },
  interests: {
    fontSize: "14px",
    color: "#222",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default Card;
