import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';
import { Container, Row } from 'reactstrap';


export default function LocationsList() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response => {
         //console.log(response.data.results)
          const locations = response.data.results.filter(
            location =>
              location.name
                .toLowerCase()
                .includes(query.toLowerCase())
          );
         setData(locations);
        });
    }, [query]);
    
    const handleInputChange = event => {
      setQuery(event.target.value);
    };
    return (
      <div className="location">
        <h1>List of Locations</h1>  
        <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by Location"
            autoComplete="off"
          />
        </form>
        <Container>
            <Row>
        <div className="location">
          {data.map(data => {
            return <LocationCard key={data.id}
            name = {data.name}
            dimension = {data.dimension}
            type = {data.type}
            />
          })}
        </div>
        </Row>
        </Container>
      </div>
    );
}
