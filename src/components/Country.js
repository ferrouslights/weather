import { useState } from "react";

const Country = ({ country }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      {showAll ? (
        <li>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "hide" : "show"}
          </button>
          <h2>{country.name}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <h4>Languages</h4>
          <ul>
            {country.languages.map((language) => (
              <li key={language.iso639_1}>{language.name}</li>
            ))}
          </ul>
          <br />
          <img
            src={country.flag}
            width="400px"
            alt={`${country}'s flag`}
            style={{
              borderStyle: "solid",
              borderWidth: "5px",
              borderColor: "#000000",
            }}
          />
        </li>
      ) : (
        <li key={country.numericCode} region={country.region}>
          {country.name} -
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "hide" : "show"}
          </button>
        </li>
      )}
    </div>
  );
};

export default Country;
