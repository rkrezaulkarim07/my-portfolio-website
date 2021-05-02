import Home from "./components/Home/Home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
