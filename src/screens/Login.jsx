import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <div className="loginContainer">
      <form className="formContainer">
        <h1>Login</h1>
        <div className="fieldContainer">
          <input
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button className="submitBtn" onClick={handleLogin}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
