import Country from "./Country";
import CountryInfo from "./CountryInfo";

const Countries = ({ countriesToShow }) => {
  if (countriesToShow.length > 10) {
    return <p>Please narrow your search</p>;
  } else if (countriesToShow.length === 1) {
    console.log("length 1!");
    return (
      <ul>
        {countriesToShow.map((country) => (
          <CountryInfo
            country={country}
            key={country.numericCode}
          />
        ))}
      </ul>
    );
  } else {
      console.log('length > 1');
    return (
      <div>
        <ul>
          {countriesToShow.map((country) => (
            <Country
              country={country}
              key={country.numericCode}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default Countries;
