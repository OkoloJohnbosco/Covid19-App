import React, { useState, useEffect } from "react";
import { fetchCountries } from "../api/Index";

function Flag({ flag }) {
  const [flagArray, getFlagArray] = useState([]);

  useEffect(() => {
    const getFlag = async () => {
      getFlagArray(await fetchCountries());
    };
    getFlag();
  }, []);

  //   console.log(flagArray);
  let flagUrl = flagArray.find((indFlag) => indFlag.name === flag);

  return flag ? (
    <img
      src={`https://www.countryflags.io/${flagUrl.iso}/flat/64.png`}
      alt={flag}
    />
  ) : null;
}

export default Flag;
