import "../css/ArmarKit.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
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
  TextField,
  Box,
} from "@mui/material";
import React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import CustomizedSnackbars from "../components/CustomizedSnackbars";
import { useForm } from "react-hook-form";

function ArmarKit() {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [countAlert, setCountAlert] = useState(0);
  const [tipoAlertaMsj, setTipoAlertaMsj] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createAndDownloadFolder(data.nombre);
  };

  //ALERTA AL GENERAR KIT
  //FIN ALERTA AL GENERAR KIT

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

  async function createAndDownloadFolder(nombreCarpetaPrincipal) {
    // Agrega controladores de eventos para cada elemento de entrada de archivo

    const zip = new JSZip();

    // Creamos la carpeta principal
    const carpetaPrincipal = zip.folder(nombreCarpetaPrincipal);

    // Añade los archivos seleccionados a las carpetas/subcarpetas correspondientes
    for (const folder in selectedFiles) {
      if (selectedFiles[folder].length > 0) {
        // Solo crear la carpeta si tiene archivos
        const targetFolder = zip.folder(`${nombreCarpetaPrincipal}/${folder}`);
        for (const file of selectedFiles[folder]) {
          const fileContent = await readFileAsText(file);
          targetFolder.file(file.name, fileContent);
        }
      }
    }

    // Genera y descarga el archivo ZIP
    if (Object.keys(selectedFiles).length !== 0) {
      const content = await zip.generateAsync({ type: "blob" });
      setTipoAlertaMsj("success");
      saveAs(content, "kit-de-carga.zip");
    } else {
      setTipoAlertaMsj("warning");
    }
    setCountAlert(countAlert + 1);
    setAlerta(true);
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
                        <input
                          type="file"
                          id="file-input-ws"
                          multiple
                          onChange={handleFileSelect("1_Sitio/Ws")}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1_Sitio/Web</TableCell>
                      <TableCell>Bin</TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-web"
                          multiple
                          onChange={handleFileSelect("1_Sitio/Web/Bin")}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1_Sitio/Web</TableCell>
                      <TableCell>Web del proyecto</TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-web"
                          multiple
                          onChange={handleFileSelect("1_Sitio/Web/Web")}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2_Base_de_Datos</TableCell>
                      <TableCell>1_Tablas</TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-tablas"
                          multiple
                          onChange={handleFileSelect(
                            "2_Base_de_Datos/1_Tablas"
                          )}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>2_Alter</TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-alter"
                          multiple
                          onChange={handleFileSelect("2_Base_de_Datos/2_Alter")}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>3_paso_a_paso</TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-pasoapaso"
                          multiple
                          onChange={handleFileSelect(
                            "2_Base_de_Datos/3_paso_a_paso"
                          )}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>4_Indices</TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-indices"
                          multiple
                          onChange={handleFileSelect(
                            "2_Base_de_Datos/4_Indices"
                          )}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>5_Datos</TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-datos"
                          multiple
                          onChange={handleFileSelect("2_Base_de_Datos/5_Datos")}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>6_Servicios</TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-servicios"
                          multiple
                          onChange={handleFileSelect(
                            "2_Base_de_Datos/6_Servicios"
                          )}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>7_Funciones</TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-funciones"
                          multiple
                          onChange={handleFileSelect(
                            "2_Base_de_Datos/7_Funciones"
                          )}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>8_Mensajes</TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-mensajes"
                          multiple
                          onChange={handleFileSelect(
                            "2_Base_de_Datos/8_Mensajes"
                          )}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>9_Triggers</TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-triggers"
                          multiple
                          onChange={handleFileSelect(
                            "2_Base_de_Datos/9_Triggers"
                          )}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3_Reportes</TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <input
                          type="file"
                          id="file-input-reportes"
                          multiple
                          onChange={handleFileSelect("3_Reportes")}
                        />
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
            <form onSubmit={handleSubmit(onSubmit)} className="formBtnTxf">
                <TextField
                  className="txfNombreKit"
                  id="outlined-basic"
                  label="Nombre kit"
                  variant="outlined"
                  {...register("nombre", {
                    required: "Este campo es requerido",
                  })}
                  error={Boolean(errors.nombre)}
                  helperText={errors.nombre?.message}
                  placeholder="Ingresa el nombre de tu proyecto"
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="btnGenerarKit"
                >
                  Generar kit
                </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      {alerta ? (
        <CustomizedSnackbars
          tipoAlerta={tipoAlertaMsj}
          alerta={countAlert}
        ></CustomizedSnackbars>
      ) : (
        <></>
      )}
    </>
  );
}

export default ArmarKit;
