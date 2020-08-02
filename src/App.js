import React, { Component } from "react";

import styles from "./App.module.css";
import Charts from "./components/Chart/Chart";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./components/api/Index";
import Flag from "./components/Flags/Flag";
import coronaImage from "./images/image.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (event) => {
    let country = event.target.value;
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.Container}>
        <img
          src={coronaImage}
          alt="Corona"
          style={{ maxWidth: "200px", margin: "50px auto 0" }}
        />
        <Cards data={data || {}} />
        <div className={styles.Country}>
          <Flag flag={country} />
          <CountryPicker
            value={this.state.country}
            changed={this.handleCountryChange}
          />
        </div>
        <Charts country={country} data={data} />
      </div>
    );
  }
}

export default App;
