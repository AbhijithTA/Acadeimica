import { useState } from "react";
import companyLogo from "../public/logo.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        {/* Company Logo */}
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-32 h-32 mb-8" // Adjust the width and height as needed
        />

        {/* Website Under Construction Message */}
        <h1 className="text-6xl font-bold text-gray-800 mb-8">
          Website Under Construction
        </h1>

        {/* Email Address */}
        <div className="text-2xl text-gray-600">
          <span className="font-semibold">Contact us at:</span>
          <a
            href="mailto:info@example.com"
            className="ml-2 text-blue-600 hover:text-blue-800 transition duration-300"
          >
            acadamica.org@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
