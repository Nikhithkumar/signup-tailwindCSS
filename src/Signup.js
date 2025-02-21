import { useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function Signup() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phoneNo: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneNo) {
      newErrors.phoneNo = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNo)) {
      newErrors.phoneNo = "Phone number must be 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      navigate("/success")
      
    } else {
      alert("Please correct the errors in the form");
    }
  };

  return (
    <div className="App flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 pl-9">
      <h1 className="text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-10">
        Hello world!
      </h1>
      <div className="p-10 bg-white shadow-2xl rounded-3xl max-w-lg w-full mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmitForm}>
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-800">First Name</label>
            <input
              type="text"
              className={`mt-2 p-3 border rounded-xl focus:ring-4 focus:outline-none transition duration-300 ${
                errors.firstName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-400"
              }`}
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-800">Last Name</label>
            <input
              type="text"
              className={`mt-2 p-3 border rounded-xl focus:ring-4 focus:outline-none transition duration-300 ${
                errors.lastName ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-400"
              }`}
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-800">Middle Name</label>
            <input
              type="text"
              className="mt-2 p-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-400 focus:outline-none transition duration-300"
              value={formData.middleName}
              onChange={(e) =>
                setFormData({ ...formData, middleName: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-800">Email</label>
            <input
              type="email"
              className={`mt-2 p-3 border rounded-xl focus:ring-4 focus:outline-none transition duration-300 ${
                errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-400"
              }`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-800">Phone No</label>
            <input
              type="tel"
              className={`mt-2 p-3 border rounded-xl focus:ring-4 focus:outline-none transition duration-300 ${
                errors.phoneNo ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-400"
              }`}
              value={formData.phoneNo}
              onChange={(e) =>
                setFormData({ ...formData, phoneNo: e.target.value })
              }
            />
            {errors.phoneNo && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNo}</p>
            )}
          </div>

          <div className="col-span-full">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-xl hover:from-blue-600 hover:to-purple-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
