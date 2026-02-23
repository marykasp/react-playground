import React from "react";

const initialState = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  },
};

function reducer(state, action) {
  if (action.type === "next") {
    return {
      ...state,
      currentStep: state.currentStep + 1,
    };
  } else if (action.type == "prev") {
    return {
      ...state,
      currentStep: state.currentStep - 1,
    };
  } else if (action.type === "change") {
    return {
      ...state,
      formData: { ...state.formData, [action.name]: action.value },
    };
  } else if (action.type === "submit") {
    return initialState;
  } else {
    throw new Error("This action is not used!");
  }
}

export const MultiStepForm = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { currentStep, formData } = state;

  const handleNextStep = () => {
    dispatch({ type: "next" });
  };

  const handlePrevStep = () => {
    dispatch({ type: "prev" });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    dispatch({ type: "change", [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form is being submitted!");
    dispatch({ type: "submit" });
  };

  if (currentStep === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div>
          <label>Step {currentStep} of 3 </label>
          <progress
            className="w-56 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            value={currentStep}
            max="3"
          />
        </div>

        {/* inputs */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          onClick={handleNextStep}
          className="rounded-md bg-amber-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg"
        >
          Next
        </button>
      </form>
    );
  } else if (currentStep === 2) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Address</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress
            className="w-56 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            value={currentStep}
            max="3"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            required
            name="address"
            id="address"
            type="address"
            placeholder="What is your address?"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            required
            name="city"
            id="city"
            placeholder="What city do you live in?"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <input
            required
            name="zipcode"
            id="zipcode"
            type="number"
            placeholder="What is your zipcode?"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </div>
        <div className="flex w-max gap-4">
          <button
            type="button"
            onClick={handleNextStep}
            className="rounded-md bg-amber-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg"
          >
            Next
          </button>

          <button
            type="button"
            className="rounded-md bg-amber-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg"
            onClick={handlePrevStep}
          >
            Previous
          </button>
        </div>
      </form>
    );
  } else if (currentStep === 3) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Confirm your information:</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress
            className="w-56 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"
            value={currentStep}
            max="3"
          />
        </div>
        <table>
          <tbody>
            {Object.keys(formData).map((key) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{formData[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex w-max gap-4 my-2">
          <button
            type="submit"
            className="rounded-md bg-amber-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg"
          >
            Submit
          </button>

          <button
            type="button"
            className="rounded-md bg-amber-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg"
            onClick={handlePrevStep}
          >
            Previous
          </button>
        </div>
      </form>
    );
  } else {
    return null;
  }
};
