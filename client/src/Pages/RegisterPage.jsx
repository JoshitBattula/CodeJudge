import React, { useState } from "react";
import { MdPerson } from "react-icons/md";

const RegisterPage = () => {
  const [inputData, setInputData] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
    github: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(inputData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setMessage(data.message);
      setInputData({
        userName: "",
        email: "",
        password: "",
        phone: "",
        github: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Registration unsuccessful. Please try again.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-4xl text-gray-900 font-bold mb-6 flex items-center">
        <MdPerson className="mr-2" /> Register
      </h2>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            name="userName"
            type="text"
            value={inputData.userName}
            onChange={handleInputChange}
            required
            placeholder="Full Name"
            className="bg-gray-200 text-gray-900 border border-gray-300 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
          <input
            name="email"
            type="email"
            value={inputData.email}
            onChange={handleInputChange}
            required
            placeholder="Email"
            className="bg-gray-200 text-gray-900 border border-gray-300 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
          <input
            name="password"
            type="password"
            value={inputData.password}
            onChange={handleInputChange}
            required
            placeholder="Password"
            className="bg-gray-200 text-gray-900 border border-gray-300 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
          <input
            name="phone"
            type="tel"
            value={inputData.phone}
            onChange={handleInputChange}
            required
            placeholder="Phone"
            className="bg-gray-200 text-gray-900 border border-gray-300 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
          <input
            name="github"
            type="url"
            value={inputData.github}
            onChange={handleInputChange}
            required
            placeholder="GitHub Link"
            className="bg-gray-200 text-gray-900 border border-gray-300 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
          />
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition ease-in-out duration-150"
            type="submit"
          >
            Register
          </button>
          {message && <p className="text-center text-red-500 mt-4">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
