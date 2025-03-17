import React from "react";

const styles = {
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // backgroundColor: "#f4f4f4",
  },
  form: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
  },
  input: {
    padding: "12px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "0.3s",
  },
  inputFocus: {
    borderColor: "#007bff",
  },
  button: {
    padding: "12px",
    width: "100%",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};


const handleLogin = (e) => {
  e.preventDefault()
}
const Login = () => {
  return (
    <div style={styles.loginContainer}>
      <form style={styles.form}>
        <input type="text" placeholder="Enter your username" style={styles.input} />
        <input type="password" placeholder="Enter your password" style={styles.input} />
        <button
        onClick={handleLogin}
         style={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
