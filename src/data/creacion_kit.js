import React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export const createAndDownloadFolder = () => {

    const zip = new JSZip();
    const folder = zip.folder("my-folder"); // Crea una carpeta llamada 'my-folder'
    folder.file("example.txt", "Este es un archivo de texto de ejemplo."); // Crea un archivo 'example.txt' con contenido en la carpeta

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "my-folder.zip"); // Descarga la carpeta comprimida como 'my-folder.zip'
    });
};
