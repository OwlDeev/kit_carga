import "../css/Configuracion.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";

function Home() {
  // CHECK TEMPLATE -- INICIO
  const [checked1, setChecked1] = useState([true, false]);
  const [checked3, setChecked3] = useState([true, false]);

  const handleChange1_1 = (event) => {
    setChecked1([event.target.checked, event.target.checked]);
  };

  const handleChange1_2 = (event) => {
    setChecked1([event.target.checked, checked1[1]]);
  };

  const handleChange1_3 = (event) => {
    setChecked1([checked1[0], event.target.checked]);
  };

  const handleChange3_1 = (event) => {
    setChecked3([event.target.checked, event.target.checked]);
  };

  const [checked2, setChecked2] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleChangeParent = (event) => {
    const { checked } = event.target;
    setChecked2([
      checked,
      checked,
      checked,
      checked,
      checked,
      checked,
      checked,
      checked,
      checked,
      checked,
    ]);
  };

  const handleChangeChild2 = (event, index) => {
    const { checked } = event.target;
    const newChecked = [...checked2];
    newChecked[index] = checked;
    setChecked2(newChecked);
  };

  const children2 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="1_Tablas"
        control={
          <Checkbox
            checked={checked2[1]}
            onChange={(event) => handleChangeChild2(event, 1)}
          />
        }
      />
      <FormControlLabel
        label="2_Alter"
        control={
          <Checkbox
            checked={checked2[2]}
            onChange={(event) => handleChangeChild2(event, 2)}
          />
        }
      />
      <FormControlLabel
        label="3_paso_a_paso"
        control={
          <Checkbox
            checked={checked2[3]}
            onChange={(event) => handleChangeChild2(event, 3)}
          />
        }
      />
      <FormControlLabel
        label="4_Indices"
        control={
          <Checkbox
            checked={checked2[4]}
            onChange={(event) => handleChangeChild2(event, 4)}
          />
        }
      />
      <FormControlLabel
        label="5_Datos"
        control={
          <Checkbox
            checked={checked2[5]}
            onChange={(event) => handleChangeChild2(event, 5)}
          />
        }
      />
      <FormControlLabel
        label="6_Servicios"
        control={
          <Checkbox
            checked={checked2[6]}
            onChange={(event) => handleChangeChild2(event, 6)}
          />
        }
      />
      <FormControlLabel
        label="7_Funciones"
        control={
          <Checkbox
            checked={checked2[7]}
            onChange={(event) => handleChangeChild2(event, 7)}
          />
        }
      />
      <FormControlLabel
        label="8_Mensajes"
        control={
          <Checkbox
            checked={checked2[8]}
            onChange={(event) => handleChangeChild2(event, 8)}
          />
        }
      />
      <FormControlLabel
        label="9_Triggers"
        control={
          <Checkbox
            checked={checked2[9]}
            onChange={(event) => handleChangeChild2(event, 9)}
          />
        }
      />
    </Box>
  );

  const children1 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="Web"
        control={<Checkbox checked1={checked1[0]} onChange={handleChange1_2} />}
      />
      <FormControlLabel
        label="Ws"
        control={<Checkbox checked1={checked1[1]} onChange={handleChange1_3} />}
      />
    </Box>
  );

  //CHECK TEMPLATE -- FIN

  //SELECT TEMPLATE -- INICIO
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //SELECT TEMPLATE -- FIN

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="div-main-config">
            <h1>Configuración</h1>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <div className="div-template-choose">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Elige un template
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Elige un template"
                onChange={handleChange}
              >
                <MenuItem value={10}>Uno</MenuItem>
                <MenuItem value={20}>Dos</MenuItem>
                <MenuItem value={30}>Tres</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <div className="div-template">
            <div className="div-conf-carpeta">
              <FormControlLabel
                label="1_Sitio"
                control={
                  <Checkbox
                    checked={checked1[0] && checked1[1]}
                    indeterminate={checked1[0] !== checked1[1]}
                    onChange={handleChange1_1}
                  />
                }
              />
              {children1}
            </div>

            <div className="div-conf-carpeta">
              <FormControlLabel
                label="2_Base_de_Datos"
                control={
                  <Checkbox
                    checked={checked2.every(Boolean)}
                    indeterminate={
                      !checked2.every(Boolean) && checked2.some(Boolean)
                    }
                    onChange={handleChangeParent}
                  />
                }
              />
              {children2}
            </div>

            <div className="div-conf-carpeta">
              <FormControlLabel
                label="3_Reportes"
                control={
                  <Checkbox checked={checked3[0]} onChange={handleChange3_1} />
                }
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <div className="div-button-template">
            <Button variant="contained" endIcon={<DeleteIcon />}>
              Eliminar
            </Button>
            <Button variant="contained" endIcon={<AddBoxIcon />}>
              Nuevo
            </Button>
            <Button variant="outlined" startIcon={<SaveIcon />}>
              Guardar
            </Button>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <div className="div-margin-bottom"></div>
    </>
  );
}

export default Home;
