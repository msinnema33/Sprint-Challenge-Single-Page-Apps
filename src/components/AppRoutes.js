import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationList from './LocationsList';
import EpisodeList from './EpisodeList';

// import Episode from './Episode';
function AppRoutes() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/CharacterList">Characters</Link>
            </li>
            <li>
              <Link to="/LocationList">Locations</Link>
            </li>
            <li>
              <Link to="/EpisodeList">Episodes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/LocationList" component={LocationList} />
          <Route path="/EpisodeList" component={EpisodeList} />
          <Route path="/CharacterList" component={CharacterList} />
        </Switch>
      </div>
    </Router>
  );
}
export default AppRoutes;

