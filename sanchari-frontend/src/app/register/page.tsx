"use client";

import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Register = () => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Regular expression to ensure the password is alphanumeric
  const isAlphanumeric = /^[a-zA-Z0-9]*$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    if (passwordError) {
      console.log("Password error exists. Cannot submit.");
      return;
    }
    console.log({ name, email, password });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Ensure password is alphanumeric
    if (isAlphanumeric.test(value) || value === "") {
      setPassword(value);
      setPasswordError(""); // Clear error if valid
    } else {
      setPasswordError("Password should be alphanumeric.");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 shadow-lg rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 text-black"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={isPasswordVisible ? "text" : "password"} // Toggle input type
                value={password}
                placeholder="Enter your Password"
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 text-black"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {isPasswordVisible ? (
                  <HiEyeOff size={20} />
                ) : (
                  <HiEye size={20} />
                )}
              </button>
            </div>
            {passwordError && (
              <p className="text-sm text-red-500 mt-2">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
