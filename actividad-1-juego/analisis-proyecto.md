# Análisis del proyecto FinanQuiz — Actividad 1

## 1. Función de cada archivo

### `index.html` — Esqueleto estructural

Define la estructura semántica del juego sin contener lógica ni estilos:

- **`<header>`**: título "FinanQuiz", texto de progreso (`Pregunta X de 6`), puntuación actual y barra de progreso.
- **`#quiz-container`**: sección con `aria-live="polite"` que contiene el texto de la pregunta, los botones de opciones y el feedback (oculto por defecto).
- **`#results-container`**: sección con `aria-live="polite"` que muestra los resultados finales, el mensaje evaluativo y el botón de reinicio.
- Ambos contenedores finaliz y feedback están ocultos inicialmente con la clase `.hidden`.

No contiene lógica ni estilos; es un contenedor estático que `app.js` rellena dinámicamente.

### `styles.css` — Presentación visual y estados interactivos

- **Variables CSS**: colores para primario (`#2ECC71`), fondo oscuro (`#121212`, `#1E1E1E`), texto, correcto e incorrecto.
- **Layout**: contenedor centrado, barra de progreso con transición animada, grilla vertical de opciones.
- **Estados de botones**: hover, `:focus-visible` (outline verde de 3px), `:disabled` (opacidad 0.6).
- **Clases de resultado**: `.correct` (fondo verde translúcido + borde), `.incorrect` (fondo rojo translúcido + borde).
- **Feedback**: borde izquierdo verde o rojo según acierto/fallo.
- **Responsive**: media query para pantallas ≤480px que reduce padding y tamaños de fuente.
- Sin lógica JavaScript.

### `app.js` — Motor del juego

Contiene todo el comportamiento interactivo en vanilla JS:

- **Datos**: array `questions` con 6 objetos (pregunta, 4 opciones, `correctIndex`, explicación).
- **Estado**: `currentQuestionIndex` (0-5) y `score` (0-6).
- **Referencias al DOM**: todas las elementos interactivos capturados al inicio.
- **Funciones de control**: `initGame()`, `updateHeader()`, `loadQuestion()`, `handleAnswer()`, `nextQuestion()`, `showResults()`.
- **Event listeners**: enlazados al final, fuera de funciones, para ejecutarse tras cargar el DOM.
- **Autoarranque**: llamada a `initGame()` al final del archivo.

---

## 2. Flujo del juego en `app.js`

| Etapa | Función | Comportamiento observado |
|-------|---------|--------------------------|
| **Inicio** | `initGame()` | Reinicia `currentQuestionIndex=0`, `score=0`. Muestra `#quiz-container`, oculta `#results-container`. Llama a `updateHeader()` y `loadQuestion()`. |
| **Cargar pregunta** | `loadQuestion()` | Lee `questions[i]`, pinta el texto de la pregunta, genera botones dinámicamente, limpia opciones previas (`innerHTML = ''`) y feedback. Enfoca la primera opción tras 100ms. |
| **Respuesta** | `handleAnswer(idx, btn)` | Deshabilita todos los botones para evitar respuestas múltiples. Si acierta → `score++`, añade clase `.correct`. Si falla → añade `.incorrect` a la seleccionada y `.correct` a la verdadera. Muestra la explicación en el feedback y enfoca el botón "Siguiente". |
| **Avanzar** | `nextQuestion()` | Incrementa `currentQuestionIndex`. Si quedan preguntas → `updateHeader()` + `loadQuestion()`. Si no → `showResults()`. |
| **Final** | `showResults()` | Barra al 100%. Calcula porcentaje con `Math.round((score / questions.length) * 100)`. Mensaje según rango: `[0-2]` "Necesitas repasar...", `[3-5]` "Vas por buen camino...", `6` "¡Excelente! Eres un maestro...". Enfoca el botón "Reiniciar partida". |
| **Reinicio** | `restartBtn` listener | Llama a `initGame()`, restableciendo todo el estado y volviendo a mostrar la primera pregunta. |

---

## 3. Riesgos y casos a probar

### Hechos observados (sin problema detectado)

- Las respuestas múltiples están bloqueadas: los botones se deshabilitan tras el primer click.
- El feedback se limpia en cada `loadQuestion()` mediante `innerHTML = ''`.
- Los rangos de mensaje final (`0-2`, `3-5`, `6`) son correctos y cubren todos los casos posibles.
- El foco se traslada correctamente: a la primera opción al cargar, a "Siguiente" tras responder, a "Reiniciar" al finalizar.

### Riesgos potenciales (sugerencias de prueba)

| Riesgo | Nivel | Comportamiento esperado |
|--------|-------|------------------------|
| **Array de preguntas vacío** | Bajo | `questions[currentQuestionIndex]` sería `undefined` → error al acceder a `.question`. No hay validación contra longitud 0. |
| **Barra de progreso antes de responder** | Bajo | `updateHeader()` en `loadQuestion()` muestra progreso de la pregunta actual (índice / total), no de la respondida. En la pregunta 1 el progreso es 0%, lo cual puede parecer extraño pero es intencionado. |
| **Click rápido duplicado** | Muy bajo | Si dos eventos `click` llegan al mismo frame en el mismo botón antes de que se deshabiliten, `score` podría incrementarse dos veces. La probabilidad es mínima pero no imposible. |
| **Sin JS habilitado** | Bajo | El jugador vería texto "Cargando pregunta..." y botones vacíos. No hay `<noscript>` ni fallback. |
| **Accesibilidad: foco en feedback** | Muy bajo | El `aria-live="assertive"` en `#feedback-container` es correcto, pero algunos lectores de pantalla podrían no anunciar el contenido si cambia mientras ya hay un `aria-live="polite"` activo en el padre. |

### Casos concretos a probar manualmente

1. **Respuestas incorrectas consecutivas**: seleccionar la opción incorrecta en todas las preguntas → verificar que la correcta se resalta y el score se mantiene en 0.
2. **Puntuación límite**: obtener exactamente 2, 3 y 6 puntos → confirmar que el mensaje corresponde a cada rango.
3. **Navegación 100% por teclado**: Tab → Enter → Tab → Enter, en todas las preguntas, sin ratón.
4. **Reinicio durante la partida**: si se añadiera un botón de reinicio rápido, el estado debería resetearse por completo.
5. **Edge case de array vacío**: modificar el array `questions` a uno vacío → el juego debería manejar el error graceful o mostrar un mensaje.
