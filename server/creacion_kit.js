export const executeFunction = () => {
  const fs = require("fs");
  const path = require("path");

  function crearCarpeta(nombreCarpeta) {
    if (!fs.existsSync(nombreCarpeta)) {
      fs.mkdirSync(nombreCarpeta);
    }
  }

  const carpetaPrincipal = "kit";

  // Crear carpeta principal
  crearCarpeta(carpetaPrincipal);

  // Crear subcarpetas de "1_Sitio"
  const carpetaSitio = path.join(carpetaPrincipal, "1_Sitio");
  crearCarpeta(carpetaSitio);
  crearCarpeta(path.join(carpetaSitio, "Web"));
  crearCarpeta(path.join(carpetaSitio, "Ws"));

  // Crear subcarpetas de "2_Base_de_Datos"
  const carpetaBd = path.join(carpetaPrincipal, "2_Base_de_Datos");
  crearCarpeta(carpetaBd);
  const subcarpetasBd = [
    "1_Tablas",
    "2_Alter",
    "3_paso_a_paso",
    "4_Indices",
    "5_Datos",
    "6_Servicios",
    "7_Funciones",
    "8_Mensajes",
    "9_Triggers",
  ];
  for (const subcarpeta of subcarpetasBd) {
    crearCarpeta(path.join(carpetaBd, subcarpeta));
  }

  // Crear carpeta "3_Reportes"
  const carpetaReportes = path.join(carpetaPrincipal, "3_Reportes");
  crearCarpeta(carpetaReportes);
};
