import React from "react";
import FinalCityComponent from "./FinalCityComponent";
import cityImage from "./City Images/Madison.jpg";
import cities from "./cities";

const FinalCity = ({
  setTryAgain,
  finalCity,
  tryAgain,
  cityArray,
  setFinalCity,
}) => {
  const cityName = finalCity.city;
  const cityDescription = cities[cityName];
  return (
    <>
      {finalCity && (
        <FinalCityComponent
          cityName={cityName}
          cityImage={cityImage}
          cityDescription={cityDescription}
          setTryAgain={setTryAgain}
          cityArray={cityArray}
          setFinalCity={setFinalCity}
        />
      )}
      {/* {!finalCity && (
        <>
          <h1 className="primary-accent-text-gradient">Oops</h1>
          <p>
            Seems like your query didn't return any results, try a different
            input!
          </p>
          <div
            className="w-full h-16 flex reset-button-container mb-10"
            onClick={() => {
              setTryAgain(true);
            }}
          >
            Reset
          </div>
        </>
      )} */}
    </>
  );
};

export default FinalCity;
