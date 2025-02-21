import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-md w-full">
        <div className="text-green-500 text-6xl mb-4">
          ✅
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Success!</h1>
        <p className="text-gray-600 mb-6">
          Your form has been submitted successfully. Thank you!
        </p>
        <button
          onClick={handleGoBack}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-600 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Success;
