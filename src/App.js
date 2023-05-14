import "./css/App.css";
import Home from "./views/Home";
import AppBar from "./components/AppBar";
import Configuracion from './views/Configuracion'
import ArmarKit from './views/ArmarKit'
import Footer from "./views/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar></AppBar>
        <Container>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/armarKit" element={<ArmarKit />} />
          </Routes>
        </Container>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
