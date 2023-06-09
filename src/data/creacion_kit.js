import JSZip from "jszip";
import { saveAs } from "file-saver";

export const initializeZipGenerator = () => {

  const selectedFiles = {};

  function handleFileSelect(folder) {
    return function (event) {
      selectedFiles[folder] = event.target.files;
    };
  }

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
    saveAs(content, "kit.zip");
  }

  function readFileAsText(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error.target.error);
      reader.readAsText(file);
    });
  }
};
