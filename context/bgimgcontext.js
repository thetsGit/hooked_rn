import React, { useState, useEffect } from "react";

export const BgimgContext = React.createContext();

export const BgimgProvider = ({ children }) => {
  const images = [
    require("../assets/images/homebg.jpg"),
    require("../assets/images/homebg2.jpg"),
    require("../assets/images/homebg3.jpg"),
    require("../assets/images/homebg4.jpg"),
  ];
  const [imgIndex, setimgIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      imgIndex === 3 ? setimgIndex(0) : setimgIndex(imgIndex + 1);
    }, 3000);
    return () => {};
  }, [imgIndex]);
  return (
    <BgimgContext.Provider value={images[imgIndex]}>
      {children}
    </BgimgContext.Provider>
  );
};
