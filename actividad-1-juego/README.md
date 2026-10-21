# FinanQuiz

FinanQuiz es un juego web interactivo de preguntas y respuestas diseñado para enseñar conceptos básicos de educación financiera y ayudar a mejorar la gestión del dinero de forma sencilla.

## 🚀 Características
- **Educativo:** 6 preguntas basadas en libros de referencia (como *Padre rico, padre pobre*). Temas: ahorro, activos/pasivos, interés compuesto, inversión, presupuestos e inflación.
- **Sin dependencias:** Construido exclusivamente con HTML5, CSS3 y JavaScript puro (Vanilla JS).
- **Accesibilidad total:** 
  - Navegación 100% mediante teclado (teclas `Tab` y `Shift + Tab`).
  - Selección de opciones con `Enter` o `Espacio`.
  - Foco claramente visible (atributo `:focus-visible` de CSS).
  - Etiquetas HTML semánticas (`<button>`, `<main>`, `<section>`, `aria-live`).
- **Diseño Responsive y Minimalista:** Estética profesional basada en apps financieras (colores oscuros, tarjetas y detalles en verde).
- **Lógica de Resultados Completa:** Evita respuestas múltiples, muestra barra de progreso en tiempo real, suma la puntuación, calcula porcentajes e imprime un mensaje de evaluación de nivel (0-2, 3-5, 6 puntos).

## 📂 Estructura de archivos
```text
actividad-1-juego/
├── index.html             # Estructura del juego y contenedores de vistas
├── styles.css             # Estilos, variables de color y diseño responsive
├── app.js                 # Base de datos de preguntas y lógica del juego
├── README.md              # Documentación del proyecto
├── requisitos.md          # Requisitos que debe cumplir el juego
├── revisionPrompt.txt     # Respuestas a la revisión de los prompts antes de ejecutarlo
└── prompt-v1.md           # Prompt para el desarrollo del juego
```

## ▶️ Cómo ejecutar el juego

1. Descarga o descomprime la carpeta `actividad-1-juego`.
2. Abre la carpeta y haz doble clic en `index.html`.
3. El juego se abrirá en el navegador predeterminado. No hace falta instalar dependencias, iniciar un servidor ni tener conexión a Internet.

También puedes abrir `index.html` desde el navegador con la opción **Abrir archivo**.

## ✅ Pruebas manuales

Realiza estas comprobaciones en el navegador:

1. **Respuesta correcta:** en la primera pregunta, selecciona la opción B. Debe indicarse que la respuesta es correcta, mostrar la explicación y aumentar la puntuación a 1.
2. **Respuesta incorrecta:** reinicia la partida y selecciona la opción A en la primera pregunta. Debe indicarse que la respuesta es incorrecta, mostrarse la explicación y mantenerse la puntuación en 0. Las opciones deben quedar deshabilitadas para evitar una segunda respuesta.
3. **Última pregunta y resultado:** responde las seis preguntas, avanzando con «Siguiente pregunta». Después de la sexta respuesta debe mostrarse el resultado final con los puntos obtenidos, el porcentaje y el mensaje correspondiente.
4. **Reinicio:** desde la pantalla de resultados, pulsa «Reiniciar partida». Debe aparecer de nuevo la pregunta 1, con la puntuación en 0 y el progreso restablecido.
5. **Navegación con teclado:** recorre las opciones con `Tab` y `Shift + Tab`, selecciona una con `Enter` o la barra espaciadora y usa el botón «Siguiente pregunta» también con el teclado. El foco debe ser visible y trasladarse a la siguiente pregunta.