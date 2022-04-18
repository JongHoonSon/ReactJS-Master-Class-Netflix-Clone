import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path={["/tv", "/tvs/:tvId"]}>
            <Tv />
          </Route>
          <Route path={["/search", "/search/:id"]}>
            <Search />
          </Route>
          <Route path={["/", "/movies/:movieId"]}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Router>
  );
}

export default App;
