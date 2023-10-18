// MultiStepForm.tsx
import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';


const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep < 3 ? prevStep + 1 : prevStep);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep > 1 ? prevStep - 1 : prevStep);
  };

  const handleCancel = () => {
    // Implement cancel logic, e.g., navigate to a different page
  };

  const handleSubmit = () => {
    // Implement form submission logic, e.g., sending data to the server
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-6">Multi-Step Form</h1>
      <div className="mb-4">
        Step {step} of 3
        <div className="h-2 bg-blue-400 relative mt-2">
          <div
            className={`w-${(step - 1) * 33}% h-full bg-blue-600 rounded-full transition-all duration-300`}
          ></div>
        </div>
      </div>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      <div className="mt-6 space-x-2">
        {step > 1 && (
          <button onClick={handlePrevious} className="bg-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-400">
            Previous
          </button>
        )}
        {step < 3 ? (
          <button onClick={handleNext} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
            Submit
          </button>
        )}
        <button onClick={handleCancel} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
