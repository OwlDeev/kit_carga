import "../css/ArmarKit.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { initializeZipGenerator } from "../data/creacion_kit";
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
import React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

function ArmarKit() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const selectedFiles = {};

  const handleFileSelect = (folder) => (event) => {
    selectedFiles[folder] = event.target.files;
  };

  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  };

  async function createAndDownloadFolder() {
    // Agrega controladores de eventos para cada elemento de entrada de archivo

    const zip = new JSZip();

    // Creamos la carpeta principal
    const carpetaPrincipal = zip.folder("MiCarpeta");

    // Creamos la primera subcarpeta llamada "1_Sitio"
    const subFolder1 = carpetaPrincipal.folder("1_Sitio");

    // Creamos dos subcarpetas dentro de la primera subcarpeta
    subFolder1.folder("Web");
    subFolder1.folder("Ws");

    // Creamos la segunda subcarpeta llamada "2_Base_de_Datos"
    const subFolder2 = carpetaPrincipal.folder("2_Base_de_Datos");

    // Creamos 9 subcarpetas dentro de la segunda subcarpeta
    subFolder2.folder("1_Tablas");
    subFolder2.folder("2_Alter");
    subFolder2.folder("3_paso_a_paso");
    subFolder2.folder("4_Indices");
    subFolder2.folder("5_Datos");
    subFolder2.folder("6_Servicios");
    subFolder2.folder("7_Funciones");
    subFolder2.folder("8_Mensajes");
    subFolder2.folder("9_Triggers");

    // Creamos la tercera subcarpeta llamada "3_Reportes"
    carpetaPrincipal.folder("3_Reportes");

    // Añade los archivos seleccionados a las carpetas/subcarpetas correspondientes
    for (const folder in selectedFiles) {
      const targetFolder = zip.folder(`MiCarpeta/${folder}`);
      for (const file of selectedFiles[folder]) {
        const fileContent = await readFileAsText(file);
        targetFolder.file(file.name, fileContent);
      }
    }

    // Genera y descarga el archivo ZIP
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "mi_archivo.zip");
  }

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
                        <input type="file" id="file-input-ws" multiple onChange={handleFileSelect('1_Sitio/Ws')}/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1_Sitio</TableCell>
                      <TableCell>Web</TableCell>
                      <TableCell>
                        <input type="file" id="file-input-web" multiple onChange={handleFileSelect('1_Sitio/Web')}/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2_Base_de_Datos</TableCell>
                      <TableCell>1_Tablas</TableCell>
                      <TableCell>
                        <input type="file" id="file-input-tablas" multiple onChange={handleFileSelect('2_Base_de_Datos/1_Tablas')}/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2_Base_de_Datos</TableCell>
                      <TableCell>2_Alter</TableCell>
                      <TableCell>
                        <input type="file" id="file-input-alter" multiple onChange={handleFileSelect('2_Base_de_Datos/2_Alter')}/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2_Base_de_Datos</TableCell>
                      <TableCell>3_paso_a_paso</TableCell>
                      <TableCell>
                        <input type="file" id="file-input-pasoapaso" multiple onChange={handleFileSelect('2_Base_de_Datos/3_paso_a_paso')}/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2_Base_de_Datos</TableCell>
                      <TableCell>4_Indices</TableCell>
                      <TableCell>
                        <input type="file" id="file-input-indices" multiple onChange={handleFileSelect('2_Base_de_Datos/4_Indices')}/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2_Base_de_Datos</TableCell>
                      <TableCell>5_Datos</TableCell>
                      <TableCell>
                        <input type="file" id="file-input-datos" multiple onChange={handleFileSelect('2_Base_de_Datos/5_Datos')}/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2_Base_de_Datos</TableCell>
                      <TableCell>6_Servicios</TableCell>
                      <TableCell>
                        <input type="file" id="file-input-servicios" multiple onChange={handleFileSelect('2_Base_de_Datos/6_Servicios')}/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2_Base_de_Datos</TableCell>
                      <TableCell>7_Funciones</TableCell>
                      <TableCell>
                        <input type="file" id="file-input-funciones" multiple onChange={handleFileSelect('2_Base_de_Datos/7_Funciones')}/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2_Base_de_Datos</TableCell>
                      <TableCell>8_Mensajes</TableCell>
                      <TableCell>
                        <input type="file" id="file-input-mensajes" multiple onChange={handleFileSelect('2_Base_de_Datos/8_Mensajes')}/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2_Base_de_Datos</TableCell>
                      <TableCell>9_Triggers</TableCell>
                      <TableCell>
                        <input type="file" id="file-input-triggers" multiple onChange={handleFileSelect('2_Base_de_Datos/9_Triggers')}/>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3_Reportes</TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <input type="file" id="file-input-reportes" multiple onChange={handleFileSelect('3_Reportes')}/>
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
            <Button variant="contained" onClick={createAndDownloadFolder}>Generar kit</Button>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

export default ArmarKit;
