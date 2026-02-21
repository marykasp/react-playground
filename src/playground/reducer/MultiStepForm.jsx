import React from "react";

export const MultiStepForm = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-700">
        Multi Step Form w/ Reducer
      </h3>

      {/* display each form based on current step*/}

      {/* buttons */}
      <div className="flex gap-3 mt-6">
        <button>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
};
