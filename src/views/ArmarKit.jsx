import "../css/ArmarKit.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { createAndDownloadFolder } from '../data/creacion_kit'

function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="div-main-armarKit">
            <h1>Armar kit</h1>
            <Button variant="contained" className="btn" onClick={createAndDownloadFolder()}>
            Crear carpetas
          </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
