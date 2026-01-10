import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import API from "../Apis/axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.query.trim()
    ) {
      toast.info("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      await API.post("/api/query", formData);
      toast.success("Query submitted. We’ll contact you soon!");
      setFormData({ name: "", email: "", query: "" });
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-3xl font-semibold mb-8">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="
          max-w-3xl
          mx-auto
          bg-white
          dark:bg-gray-800
          rounded-xl
          shadow-lg
          p-6
          space-y-6
        "
      >
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 rounded border focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 rounded border focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        </div>

        {/* Query */}
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Your Message</label>
          <textarea
            name="query"
            rows="5"
            value={formData.query}
            onChange={handleChange}
            placeholder="Write your query here..."
            className="p-2 rounded border focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            required
          />
        </div>

        {/* Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="
              px-6
              py-2
              rounded
              bg-blue-600
              text-white
              font-semibold
              hover:bg-blue-700
              disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
