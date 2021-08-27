import React, {useState, useEffect} from "react"
import axios from "axios"
import Countries from "./components/Countries"

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState(countries)


  const hook = () => {
    console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  };

  //pulls from local json db for init state
  useEffect(hook, []);
  console.log("render ", countries.length, " countries");

  const handleSearchChange = (event) => {
    console.log(event.target.value);
      setCountriesToShow(
        countries.filter(
          (country) =>
            country.name
              .toLowerCase()
              .indexOf(event.target.value.toLowerCase()) !== -1
        )
      );
    
  };

  return (
    <div>
      <h1>Search Countries</h1>
      <div>
        Search: <input onChange={handleSearchChange} />
      </div>
      <div>
        <Countries countriesToShow={countriesToShow} />
      </div>
    </div>
  )
}

export default App