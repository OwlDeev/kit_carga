import "../css/ArmarKit.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { createAndDownloadFolder } from "../data/creacion_kit";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function Home() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="div-main-armarKit">
            <h1>Armar kit</h1>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <div className="div-upload-files">
            <div className="div-name-upload-files">
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Carpeta principal</TableCell>
                      <TableCell>Sub-carpeta</TableCell>
                      <TableCell></TableCell>
                      <TableCell>Archivo subido</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1_Sitio</TableCell>
                      <TableCell>Ws</TableCell>
                      <TableCell>
                        <Button variant="contained" component="label">
                          Subir
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>{" "}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1_Sitio</TableCell>
                      <TableCell>Web</TableCell>
                      <TableCell>
                        <Button variant="contained" component="label">
                          Subir
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>{" "}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2_Base_de_Datos</TableCell>
                      <TableCell>1_Tablas</TableCell>
                      <TableCell>
                        <Button variant="contained" component="label">
                          Subir
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>{" "}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <div className="div-button-template">
            <FormControl className="select-template">
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
            <Button
              endIcon={<DownloadIcon />}
              variant="contained"
              className="btn"
              onClick={createAndDownloadFolder}
            >
              Crear kit
            </Button>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

export default Home;
