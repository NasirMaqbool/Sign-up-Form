import React, { useState } from "react";
import Image from "../component/image/images.webp";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    Contact: "",
    email: "",
    Password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.Contact) formErrors.Contact = "Contact is required";
    if (!formData.email) formErrors.Gmail = "Gmail is required";
    if (!formData.Password) formErrors.Password = "Password is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-300 flex items-center justify-center  bg-gray-700">
        <img
          src={Image}
          className="w-[700px] h-[300] p-4 rounded-full border-solid"
        />
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full p-2 border rounded ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.name}
                onChange={handleChange}
                placeholder="Nasir Maqbool"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Contact Number
              </label>
              <input
                type="Contact"
                id="Contact"
                name="Contact"
                className={`w-full p-2 border rounded ${
                  errors.Contact ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.Contact}
                onChange={handleChange}
                placeholder="+923049820447"
              />
              {errors.Contact && (
                <p className="text-red-500 text-sm mt-1">{errors.Contact}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="Gmail"
              >
                Gmail
              </label>
              <input
                type="Gmail"
                id="Gmail"
                name="Gmail"
                className={`w-full p-2 border rounded ${
                  errors.Gmail ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.email}
                onChange={handleChange}
                placeholder="nasirmaqbool271@gmail.com"
              />
              {errors.Gmail && (
                <p className="text-red-500 text-sm mt-1">{errors.Gmail}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                type="password"
                id="Password"
                name="Password"
                className={`w-full p-2 border rounded ${
                  errors.Password ? "border-red-500" : "border-gray-300"
                }`}
                value={formData.Password}
                onChange={handleChange}
                placeholder="********"
              />
              {errors.Password && (
                <p className="text-red-500 text-sm mt-1">{errors.Password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-500px bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
            <button
              type="submit"
              className="w-500px bg-blue-500 text-white p-2 rounded hover:bg-blue-600 m-1 transition duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
