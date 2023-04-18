import "../css/home.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function Home() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className="div-main-home">
          <h1>Como utilizar esta herramienta</h1>
        </div>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <div>
          <h2>Paso 1:</h2>
          <div>
            <h3>
              Se debe configurar un template previo a generar el kit, esta
              configuración contempla saber que carpetas van a ir incluidas en
              el kit y que nombre va a llevar este template creado o asignado{" "}
            </h3>
            <Button
              variant="contained"
              className="btn"
              component={NavLink}
              to="/Configuracion"
            >
              Crea o elige un template
            </Button>
          </div>
          <h2>Paso 2:</h2>
          <div>
            <h3>
              Al tener el template configurado como queremos, estamos listos
              para elegirlo y cargar los archivos correspondientes en las
              carpetas seleccionadas, para luego presionar el botón 'Crear kit' y descargarlo{" "}
            </h3>
            <Button
              variant="contained"
              className="btn"
              component={NavLink}
              to="/ArmarKit"
            >
              Cargar archivos y bajar kit
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <div className="div-margin-bottom">

        </div>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default Home;
