import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Webinars from "./components/Webinars/Webinars";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import  NotFound  from "./components/NotFound/NotFound";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/webinars">
            <Webinars></Webinars>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
