import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
      //console.log(response.data.results)
        const characters = response.data.results.filter(
          character =>
            character.name
              .toLowerCase()
              .includes(query.toLowerCase())
        );
      //   console.log(characters);
      //   console.log("rick and morty characters", response);
        setData(characters);
      //   console.log('this is the ', data);
      });
  }, [query]);
  //console.log('this is the ', data);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div className="spells">
      <h1>Character List</h1>  
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by Character"
          autoComplete="off"
        />
      </form>
      <div className="spell">
        {data.map(data => {
          return (
            <div
              className="character-list "
              key={data.id}
            >
              <h3 className="capital">
                Name:  {data.name}
              </h3>
              <h3 className="capital">
                Status: {data.status}
              </h3>
              <h3 className="capital">
                Species: {data.species}
              </h3>
              <h3 className="capital">
                Origin: {data.origin.name}
              </h3>
              {/* <h3 className="capital">
                More info: {data.url}
              </h3> */}
            </div>
          );
        })}
      </div>
    </div>
  )
}
