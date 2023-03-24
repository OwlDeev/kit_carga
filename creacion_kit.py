import os

def crear_carpeta(nombre_carpeta):
    if not os.path.exists(nombre_carpeta):
        os.makedirs(nombre_carpeta)

carpeta_principal = "kit"

# Crear carpeta principal
crear_carpeta(carpeta_principal)

# Crear subcarpetas de "1_Sitio"
carpeta_sitio = os.path.join(carpeta_principal, "1_Sitio")
crear_carpeta(carpeta_sitio)
crear_carpeta(os.path.join(carpeta_sitio, "Web"))
crear_carpeta(os.path.join(carpeta_sitio, "Ws"))

# Crear subcarpetas de "2_Base_de_Datos"
carpeta_bd = os.path.join(carpeta_principal, "2_Base_de_Datos")
crear_carpeta(carpeta_bd)
subcarpetas_bd = ["1_Tablas", "2_Alter", "3_paso_a_paso", "4_Indices", "5_Datos", "6_Servicios", "7_Funciones", "8_Mensajes", "9_Triggers"]
for subcarpeta in subcarpetas_bd:
    crear_carpeta(os.path.join(carpeta_bd, subcarpeta))

# Crear carpeta "3_Reportes"
carpeta_reportes = os.path.join(carpeta_principal, "3_Reportes")
crear_carpeta(carpeta_reportes)