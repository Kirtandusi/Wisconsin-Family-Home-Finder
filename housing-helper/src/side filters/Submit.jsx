import React, { useState, useEffect } from "react";

const Submit = ({ rankingArray, setFinalCityName, setTryAgain }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [buttonColor, setButtonColor] = useState("bg-primary");

  const checkSubmission = () => {
    console.log(rankingArray);
    console.log(rankingArray);
    if (rankingArray.includes(null)) {
      setErrorMessage("Please fill out each region");
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setTryAgain(false);
    setFinalCityName("Madison");
    //setFinalCityName(() =>{});  API CALL TO BACKEND WHERE WE GET THE NUMBER 1 CITY
  };

  return (
    <>
      <div
        className={`submit-button-container w-2/5 h-14 flex justify text-text justify-center items-center font-medium ${buttonColor} cursor-pointer`}
        onClick={checkSubmission}
        onMouseEnter={() => setButtonColor("bg-primaryLight")}
        onMouseLeave={() => setButtonColor("bg-primary")}
      >
        Submit
      </div>
      {errorMessage && (
        <h2 className="text-secondary font-medium">{errorMessage}</h2>
      )}
    </>
  );
};

export default Submit;
