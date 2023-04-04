import "../css/Configuracion.css";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";

function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="div-main-config">
            <h1>Configuración</h1>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
