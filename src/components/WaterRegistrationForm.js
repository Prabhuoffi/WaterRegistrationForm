import emailjs from "@emailjs/browser";
import { useState } from "react";

function WaterRegistrationForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    phoneNumber: "",
    address: "",
    quantity: "",
    deliveryPreferences: "",
    feedback: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h4d47bb",
        "template_hp721j8",
        e.target,
        "BPl7ojs25TN0EKZ3Z"
      )
      .then(
        () => {
          alert("Form submitted successfully!");
          setFormData({
            fullname: "",
            phoneNumber: "",
            address: "",
            quantity: "",
            deliveryPreferences: "",
            feedback: "",
            agreeToTerms: false,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-md mx-auto p-6 bg-gray-50 rounded-md shadow-md "
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-500">
        Welcome to Customer Registration
      </h2>
      <div className="mb-4">
        <label htmlFor="fullname" className="block mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block mb-1">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="deliveryPreferences" className="block mb-1">
          How many days to be return?
        </label>
        <input
          type="number"
          id="deliveryPreferences"
          name="deliveryPreferences"
          value={formData.deliveryPreferences}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block mb-1">
          Address
        </label>
        <textarea
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="feedback" className="block mb-1">
          Feedback
        </label>
        <textarea
          type="message"
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md py-6 px-3 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="agreeToTerms" className="flex items-center">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
            className="mr-2"
          />
          I agree to these terms
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500  text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default WaterRegistrationForm;
