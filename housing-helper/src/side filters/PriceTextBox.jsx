import React, { useState } from "react";

const PriceTextBox = ({ setPriceValue }) => {
  const [price, setPrice] = useState("");
  const [isValidPrice, setIsValidPrice] = useState(false);

  const handleInputChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    checkValidity(newPrice);
  };

  const checkValidity = (value) => {
    if (value.length > 0) {
      setIsValidPrice(true);
      setPriceValue(value);
    } else {
      setIsValidPrice(false);
    }
  };

  return (
    <div className="h-12 w-full flex justify-center">
      <input
        className="input-container w-3/5"
        type="text"
        value={price}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PriceTextBox;
