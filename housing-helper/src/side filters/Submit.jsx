import React, { useState, useEffect } from "react";
import HandleJson from "./HandleJson";

const Submit = ({ rankingArray, setFinalCity, setTryAgain, setCityArray }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonColor, setButtonColor] = useState("bg-primary");

  const checkSubmission = () => {
    if (rankingArray.includes(null)) {
      setErrorMessage("Please fill out each region");
    } else if (rankingArray[3] < 22200) {
      setErrorMessage("Please enter a budget greater than 22200.");
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setTryAgain(false);
    HandleJson({ rankingArray, setFinalCity, setCityArray });
    //HandleJson({ rankingArray, setFinalCity });
    //setFinalCityName(() =>{});  API CALL TO BACKEND WHERE WE GET THE NUMBER 1 CITY
  };

  return (
    <>
      <div
        className={`submit-button-container w-2/5 h-12 flex justify text-text justify-center items-center font-medium ${buttonColor} cursor-pointer`}
        onClick={checkSubmission}
        onMouseEnter={() => setButtonColor("bg-primaryLight")}
        onMouseLeave={() => setButtonColor("bg-primary")}
      >
        Submit
      </div>
      {errorMessage && (
        <h2 className="text-secondary font-medium text-center">
          {errorMessage}
        </h2>
      )}
    </>
  );
};

export default Submit;
