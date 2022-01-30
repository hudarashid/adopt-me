import { useState, useEffect } from "react";

const localCache = {}; //store data locally so that react no need to rerender

//directly export out, and pass function here---
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded"); //not yet load

  //when does useEffect re-run?when use input new animal => initialise at below closing }, [animal]
  useEffect(() => {
    if (!animal) {
      setBreedList([]); //if no animal, set empty breedList
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]); //if i had history, set it by access the localCache
    } else {
      requestBreedList(); //else, get from API
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading"); //fetching data from API, so loading

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const json = await res.json();
      localCache[animal] = json.breeds || []; //if site crash & can't load, it gonna return empty array
      setBreedList(localCache[animal]);
      setStatus("loaded"); //then loaded
    }
  }, [animal]); //everytime animal changes, we gonna get brand new api

  return [breedList, status];
}
