import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Container, Row } from 'reactstrap';

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
    <div className="char">
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

      <Container>
        <Row>
      <div className="char">
        {data.map(data => {
          return <CharacterCard key={data.id}
            name = {data.name}
            status = {data.status}
            species = {data.species}
            // origin = {data.origin.name}
            />
          // (
          //   <div className="character-list " key={data.id}>
          //     <h3 className="capital">
          //       Name:  {data.name}
          //     </h3>
          //     <h3 className="capital">
          //       Status: {data.status}
          //     </h3>
          //     <h3 className="capital">
          //       Species: {data.species}
          //     </h3>
          //     <h3 className="capital">
          //       Origin: {data.origin.name}
          //     </h3>
          //   </div>
          // );
        })}
      </div>
      </Row>
      </Container>
    </div>
  )
}
