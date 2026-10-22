---
name: revision-juego
description: Revisa un juego web de preguntas en HTML, CSS y JavaScript sin modificar los archivos.
---

# Revisión del juego web

## Objetivo
Obtener una revisión trazable del juego de preguntas existente antes de cualquier cambio.

## Procedimiento
1. Lee `AGENTS.md`, `requisitos.md` y `app.js`.
2. Identifica dónde se almacenan preguntas, respuesta correcta, índice actual, puntuación y estado de finalización.
3. Comprueba que una respuesta correcta, una incorrecta, la última pregunta y el reinicio tienen un flujo comprensible.
4. Revisa que los controles sean utilizables con teclado y que los mensajes no dependan solo del color.
5. Comprueba que no aparecen dependencias externas, datos personales ni cambios de las preguntas acordadas.
6. Clasifica cada observación como error confirmado, riesgo o mejora opcional.

## Salida obligatoria
Devuelve una tabla con: tipo, prioridad, evidencia, consecuencia y propuesta.
No modifiques archivos ni afirmes que una prueba de navegador se ha realizado si no se ha realizado.
