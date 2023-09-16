import React from "react";
import { db } from "../config/firebase-config";
import { getDocs, getDoc, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const Preferences = () => {
  const [userPref, setUserPref] = useState([]);
  const userPreferencesRef = collection(db, "userPreferences");

  // New user Variables
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState(null);
  const [sports, setSports] = useState(false);
  const [movies, setMovies] = useState(false);
  const [foods, setFoods] = useState(false);

  useEffect(() => {
    const GetUserPref = async () => {
      // READ THE DATA
      // SET THE MOVIE LIST
      try {
        const data = await getDocs(userPreferencesRef);
        // data is the variable of the data
        // the .docs function gets into the documents of the data
        // the .map() then loops through the documents
        // then you use the .data() in order to access the data in the document
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserPref(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    // makes it so that the async function runs 24/7 (could be useful for location tracking)
    GetUserPref();
  }, []);

  // THIS IS HOW TO ADD NEW DOCUMENTS TO A USER on submit
  const OnSubmitUser = async () => {
    try {
      await addDoc(userPreferencesRef, {
        gender: gender,
        race: race,
        age: age,
        spors: sports,
        movies: movies,
        foods: foods,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Race"
          onChange={(e) => setRace(e.target.value)}
        />
        <input type="checkbox" onChange={(e) => setAge(e.target.checked)} />
        <label htmlFor="">Is 18</label>
        <button onClick={OnSubmitUser}>Submit User Information</button>
      </div>
      <div>
        {userPref.map((user) => (
          <div>
            <h1>User Gender: {userPref.gender}</h1>
            <p>User Race: {userPref.race}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preferences;
