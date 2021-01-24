import './App.css';
import backgroundImg from "./assets/images/grey-wood.jpg"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    // <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundRepeat: "no-repeat", height: "100%", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
    
    // </div>

    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
