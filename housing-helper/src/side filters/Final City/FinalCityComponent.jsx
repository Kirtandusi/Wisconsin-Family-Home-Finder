import React, { useState } from "react";

const FinalCityComponent = ({
  cityName,
  cityDescription,
  cityImage,
  setTryAgain,
  setFinalCity,
  cityArray,
}) => {
  const [hover, setHover] = useState(null);
  const [isLeftEdge, setLeftIsEdge] = useState(null);

  const handleChange = (direction) => {
    if (direction === -1) {
      setFinalCity(cityArray[cityArray.indexOf(cityName) - 1]);
    } else if (direction === 1) {
      setFinalCity(cityArray[cityArray.indexOf(cityName) + 1]);
    }
  };

  return (
    <div className="h-screen w-[20vw]">
      <div className="w-[20vw] h-screen bg-backgroundLight flex flex-col justify-around items-center p-3">
        <div className="flex flex-col items-center mt-10">
          <p className="text-text pb-4">your city is...</p>
          <h1 className="primary-accent-text-gradient">{cityName}</h1>
          <img src={cityImage} alt="city" className="w-[90%]" />
          <p className="text-text text-sm pt-4">{cityDescription}</p>
        </div>
        {false && (
          <div className="flex flex-row w-full justify-around">
            <div
              className=" text-background border-text h-10 w-10 rounded-md flex items-center justify-center text-xl font-bold cursor-pointer"
              onMouseEnter={() => setHover(0)}
              onMouseLeave={() => setHover(null)}
              style={{ backgroundColor: hover === 0 ? "#F2F2F2" : "white" }}
              onClick={() => handleChange(-1)}
            >
              {"<"}
            </div>
            <div
              className=" text-background border-text h-10 w-10 rounded-md flex items-center justify-center text-xl font-bold cursor-pointer"
              onMouseEnter={() => setHover(1)}
              onMouseLeave={() => setHover(null)}
              style={{ backgroundColor: hover === 1 ? "#F2F2F2" : "white" }}
              onClick={() => handleChange(1)}
            >
              {">"}
            </div>
          </div>
        )}
        <div
          className="w-full h-16 flex reset-button-container mb-10"
          onClick={() => {
            setTryAgain(true);
          }}
        >
          Reset
        </div>
      </div>
    </div>
  );
};

export default FinalCityComponent;
