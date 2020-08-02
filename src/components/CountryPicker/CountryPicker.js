import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../api/Index";
import styles from "./CountryPicker.module.css";

function CountryPicker(props) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl
      className={styles.formControl}
      style={{ marginBottom: "30px" }}
    >
      <NativeSelect value={props.value} onChange={props.changed}>
        <option value="">Global</option>
        {fetchedCountries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
export default CountryPicker;
