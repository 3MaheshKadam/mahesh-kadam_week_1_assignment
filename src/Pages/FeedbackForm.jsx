import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.rating) errors.rating = "Rating is required";
    if (!formData.comments) errors.comments = "Comments are required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-8 bg-blue-50 rounded-xl shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Customer Feedback
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full py-3 px-4 bg-white border rounded-lg text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full py-3 px-4 bg-white border rounded-lg text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Rating (1-5)
          </label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            className={`w-full py-3 px-4 bg-white border rounded-lg text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.rating ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Comments
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className={`w-full py-3 px-4 bg-white border rounded-lg text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.comments ? "border-red-500" : "border-gray-300"
            }`}
            rows="4"
          ></textarea>
          {errors.comments && (
            <p className="text-red-500 text-sm mt-1">{errors.comments}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>

      {submitted && Object.keys(errors).length === 0 && (
        <div className="mt-8 p-6 bg-green-500 rounded-lg ">
          <h2 className="font-semibold text-lg text-gray-800 mb-2 ">
            Submitted Data
          </h2>
          <p className="text-gray-700">
            <strong>Name:</strong> {formData.name}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {formData.email}
          </p>
          <p className="text-gray-700">
            <strong>Rating:</strong> {formData.rating}
          </p>
          <p className="text-gray-700">
            <strong>Comments:</strong> {formData.comments}
          </p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
