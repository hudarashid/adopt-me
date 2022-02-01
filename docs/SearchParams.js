import { useEffect, useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import useBreedList from "./useBreedList";
import Results from "./Results";

//list of animals that you wanna choose from dropdown
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  //this is hooks - NEVER EVER put this into the for loop/if statment
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState(""); //if put dog in the string -it will preselect animal in the select option
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal); //fetch from breed api(which is from useBreedList comp)
  const [theme, setTheme] = useContext(ThemeContext);

  //get the API here
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //empty [] is only calling the object when I need, prevent from keep calling the API

  async function requestPets() {
    //res => response
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    //json is whtever i got back from API
    const json = await res.json();

    setPets(json.pets);
  }

  //destructuring of the above const
  //   const locationTuple = useState("Seattle, WA");
  //   const location = locationTuple[0];
  //   const setLocation = locationTuple[1];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault(); //prevent page from refreshing
          requestPets(); //the form capture API and submit button (don't put onSubmit on the button tag coz maybe unable to capture the whole form info)
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)} //enabler to type into input box -> to keep track of the changes of the input state, by using hooks
            value={location} //print out the Seattle, WA
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option value=""></option>{" "}
            {/*blank option of user didnt select anything & map=> if we want to write return, we have to put curly braces before*/}
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option value=""></option>
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="darkBlue">Dark Blue</option>
            <option value="peru">Peru</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>{" "}
        {/*button now dark blue */}
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

//inside the html, we can assign JS variable with curly braces {}
