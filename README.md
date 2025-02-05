# Amigo Secreto

Este proyecto es una aplicación web sencilla que permite ingresar el nombre de varios amigos y, mediante un sorteo aleatorio, elegir un "Amigo Secreto". La aplicación valida las entradas, muestra una lista de nombres y realiza el sorteo de forma inmediata.

## Tabla de Contenido

- [Descripción](#descripci%C3%B3n)
- [Características](#caracter%C3%ADsticas)
- [Tecnologías Utilizadas](#tecnolog%C3%ADas-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Uso](#instalaci%C3%B3n-y-uso)
- [Revisión y Validación del Código](#revisi%C3%B3n-y-validaci%C3%B3n-del-c%C3%B3digo)
- [Mejoras Futuras](#mejoras-futuras)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción

La aplicación **Amigo Secreto** permite:

- Agregar nombres de amigos a una lista.
- Mostrar la lista de nombres ingresados en pantalla.
- Realizar un sorteo aleatorio para elegir el "Amigo Secreto".
- Mostrar el resultado del sorteo y reiniciar la lista para permitir un nuevo sorteo.

## Características

- **Interfaz Sencilla:** El diseño se centra en la usabilidad y la claridad.
- **Validación de Entrada:** Se asegura de que el usuario no ingrese un nombre vacío.
- **Sorteo Aleatorio:** Utiliza `Math.random()` para seleccionar aleatoriamente un nombre de la lista.
- **Actualización Dinámica:** Se actualiza la interfaz de usuario conforme se agregan nombres y se realiza el sorteo.
- **Accesibilidad:** Uso de atributos ARIA para mejorar la accesibilidad.

## Tecnologías Utilizadas

- **HTML5:** Para estructurar el contenido.
- **CSS3:** Para el diseño y la presentación (incluye enlaces a W3.CSS y Google Fonts).
- **JavaScript:** Para la lógica de la aplicación y manipulación del DOM.
- **Font Awesome:** Para los íconos.

## Estructura del Proyecto

```AmigoSecreto/ 
├── index.html         # Archivo principal HTML. 
├── style.css          # Archivo de estilos CSS. 
├── app.js             # Lógica de la aplicación en JavaScript. 
└── assets/     
    ├── amigo-secreto.png            # Imagen representativa.     
    └── play_circle_outline.png      # Ícono para el botón de sorteo.
```

## Instalación y Uso

1. **Clonar o descargar el repositorio:**
   
    ```
       git clone https://github.com/tu_usuario/AmigoSecreto.git
       cd AmigoSecreto
    ```
    
3. **Abrir el proyecto:**
    
    - Abre el archivo `index.html` en tu navegador web favorito.
4. **Uso de la aplicación:**
    
    - **Agregar Nombres:** Escribe un nombre en el campo de entrada y presiona el botón "Añadir". Cada nombre se agregará a la lista mostrada.
    - **Realizar el Sorteo:** Una vez agregados los nombres, haz clic en el botón "Sortear amigo". Se elegirá aleatoriamente un nombre, el cual se mostrará en la pantalla. La lista se limpiará para permitir un nuevo sorteo.

## Revisión y Validación del Código

### HTML

- **Estructura:**  
    El documento HTML utiliza etiquetas semánticas (`<main>`, `<header>`, `<section>`) que mejoran la accesibilidad y la organización del contenido.
    
- **Accesibilidad:**  
    Se han añadido atributos ARIA (como `aria-labelledby` y `aria-live`) para mejorar la experiencia de usuarios con necesidades especiales.
    
- **Recursos Externos:**  
    Se cargan correctamente hojas de estilo externas y fuentes desde Google Fonts, W3.CSS y Font Awesome.
    

### JavaScript

- **Validación:**  
    El código verifica que el campo de entrada no esté vacío antes de añadir un nombre, mostrando una alerta en caso de error.
    
- **Lógica de Sorteo:**  
    Se utiliza `Math.random()` para seleccionar un nombre de forma aleatoria. Al finalizar el sorteo, se limpia la lista y se reinicia el arreglo de nombres.
    
### CSS

- El archivo `style.css` se incluye correctamente. Se recomienda revisar su contenido para asegurarse de que cumple con el diseño y los estándares deseados.

## Mejoras Futuras

- **Persistencia de Datos:**  
    Implementar almacenamiento local (por ejemplo, utilizando `localStorage`) para conservar la lista de nombres en caso de que se recargue la página.
    
- **Mejora de la Interfaz:**  
    Añadir transiciones, animaciones y feedback visual para mejorar la interacción del usuario.
    
- **Validación Avanzada:**  
    Implementar validaciones más robustas, como evitar nombres duplicados o restringir la cantidad mínima/máxima de participantes.
    
- **Testeo:**  
    Agregar tests unitarios para la lógica de JavaScript y garantizar el correcto funcionamiento de la aplicación.
    

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

4. Realiza un fork del repositorio.
5. Crea una rama para tu mejora o corrección.
6. Envía un Pull Request con tus cambios y una breve descripción de los mismos.

## Licencia

Este proyecto se distribuye bajo la MIT License.
