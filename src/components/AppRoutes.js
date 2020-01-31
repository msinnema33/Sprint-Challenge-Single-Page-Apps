import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
// import Location from "./Location";
// import Episode from './Episode';
function AppRoutes() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Characters</Link>
            </li>
            {/* <li>
              <Link to="/Location">Locations</Link>
            </li>
            <li>
              <Link to="/Episode">Episodes</Link>
            </li> */}
          </ul>
        </nav>
        <Switch>
          {/* <Route path="/Location" component={Location} />
          <Route path="/Episode" component={Episode} /> */}
          <Route path="/" component={CharacterList} />
        </Switch>
      </div>
    </Router>
  );
}
export default AppRoutes;

