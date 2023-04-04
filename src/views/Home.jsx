import "../css/home.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className="div-main-home">
          <h1>Como utilizar esta herramienta</h1>
          <h2>Se utiliza de la siguiente forma</h2>
          <Button variant="contained" className="btn" component={NavLink}
              to="/armarKit">
            Armar tu kit
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default Home;
