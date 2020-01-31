import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
  
  export default function EpisodeList() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          //console.log(response.data.results)
          const episodes = response.data.results.filter(
            episode =>
              episode.name
                .toLowerCase()
                .includes(query.toLowerCase())
          );
          setData(episodes);
        });
    }, [query]);
    
    const handleInputChange = event => {
      setQuery(event.target.value);
    };
    return (
      <div className="spells">
       <h1>Episode List</h1>   
        <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by Episode"
            autoComplete="off"
          />
        </form>

        <Container>
            <Row>
        <div className="spell">
          {data.map(data => {
            return (
              <div className="character-list" key={data.id}>
                <h3 className="capital">
                  Name:  {data.name}
                </h3>
                <h3 className="capital">
                  Air Date: {data.air_date}
                </h3>
                <h3 className="capital">
                  Episode: {data.episode}
                </h3>
              </div>
            );
          })}
        </div>
        </Row>
        </Container>
      </div>
    );
  }