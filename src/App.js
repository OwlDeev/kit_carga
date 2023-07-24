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
            <Route path="/kit_carga/home" element={<Home />} />
            <Route exact path="/kit_carga" element={<Home />} />
            <Route path="/kit_carga/configuracion" element={<Configuracion />} />
            <Route path="/kit_carga/armarKit" element={<ArmarKit />} />
          </Routes>
        </Container>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
