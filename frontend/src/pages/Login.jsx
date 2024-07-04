import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const { loading, login } = useLogin();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-yellow-500"> ChatY</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            className="text-sm mt-2 inline-block hover:underline hover:text-blue-600 cursor-pointer"
            onClick={() => nav("/signup")}
          >
            Don't have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
