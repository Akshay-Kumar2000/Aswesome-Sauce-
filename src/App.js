import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Booking } from "./components/Pages/Booking";
import { Footer } from "./components/MainFooter/Footer/Footer";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/booking" component={Booking} />
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
