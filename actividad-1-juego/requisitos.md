# Actividad 1. Prompt para un juego web

## 1. Nombre del juego

**FinanQuiz:** juego de preguntas y respuestas para aprender conceptos básicos de educación financiera y mejorar la gestión del dinero.

## 2. Preguntas

El juego tendrá 6 preguntas sobre educación financiera, inspiradas en conceptos presentes en libros como *Padre rico, padre pobre*, de Robert Kiyosaki, y *El hombre más rico de Babilonia*, de George S. Clason.

Cada pregunta tendrá cuatro opciones y una única respuesta correcta:

### 1. Ahorro y planificación financiera

**Pregunta:** ¿Por qué es importante ahorrar una parte de los ingresos mensuales?

- A) Porque permite gastar todo el dinero sin preocuparse por el futuro.
- B) Porque ayuda a afrontar imprevistos y alcanzar objetivos financieros futuros.
- C) Porque elimina la necesidad de controlar los gastos.
- D) Porque garantiza que siempre se obtendrán beneficios de las inversiones.

**Respuesta correcta:** B.

**Explicación:** Ahorrar permite crear un fondo para emergencias y prepararse para gastos futuros sin depender necesariamente de préstamos.

### 2. Diferencias entre activos y pasivos

**Pregunta:** Desde el punto de vista de las finanzas personales, ¿cuál de las siguientes opciones describe mejor un activo?

- A) Una deuda que debemos devolver al banco.
- B) Un gasto mensual que debemos pagar obligatoriamente.
- C) Un recurso que poseemos y que tiene valor económico o puede generar ingresos.
- D) Un préstamo que hemos solicitado para comprar un producto.

**Respuesta correcta:** C.

**Explicación:** Un activo es un recurso con valor económico que poseemos. Algunos activos también pueden generar ingresos, mientras que un pasivo representa una obligación o deuda.

### 3. Interés compuesto

**Pregunta:** ¿Qué sucede cuando una cantidad de dinero genera intereses y estos se añaden al capital para generar nuevos intereses?

- A) El dinero deja de generar intereses.
- B) Los intereses se convierten automáticamente en una deuda.
- C) El capital inicial desaparece al finalizar cada periodo.
- D) Los intereses acumulados también pueden generar nuevos intereses.

**Respuesta correcta:** D.

**Explicación:** El interés compuesto permite obtener intereses tanto sobre el capital inicial como sobre los intereses acumulados. Su efecto depende del tiempo, del tipo de interés y de las condiciones del producto financiero.

### 4. Inversión y diversificación

**Pregunta:** ¿Cuál es una de las principales ventajas de diversificar una cartera de inversiones?

- A) Repartir el riesgo entre diferentes inversiones para reducir la dependencia de una sola.
- B) Garantizar que todas las inversiones produzcan beneficios.
- C) Evitar por completo cualquier pérdida económica.
- D) Invertir todo el dinero en la empresa que haya obtenido mejores resultados recientemente.

**Respuesta correcta:** A.

**Explicación:** La diversificación consiste en distribuir el dinero entre diferentes inversiones. Puede ayudar a reducir el impacto negativo de una inversión concreta, aunque no elimina todos los riesgos ni garantiza beneficios.

### 5. Presupuestos y control de gastos

**Pregunta:** ¿Cuál es el principal objetivo de elaborar un presupuesto mensual personal?

- A) Gastar todos los ingresos antes de finalizar el mes.
- B) Controlar los ingresos y los gastos para organizar mejor el dinero.
- C) Evitar tener que ahorrar una parte de los ingresos.
- D) Garantizar que todas las compras realizadas sean rentables.

**Respuesta correcta:** B.

**Explicación:** Un presupuesto permite conocer cuánto dinero entra y cuánto se gasta. De esta forma, podemos identificar gastos innecesarios, planificar el ahorro y organizar mejor nuestras prioridades financieras.

### 6. Inflación y poder adquisitivo

**Pregunta:** Si los precios de los productos aumentan un 5 % durante un año y nuestros ingresos permanecen iguales, ¿qué ocurre generalmente con nuestro poder adquisitivo?

- A) Aumenta, porque los productos tienen un precio mayor.
- B) Permanece siempre igual, independientemente de los precios.
- C) Disminuye, porque podemos comprar menos con la misma cantidad de dinero.
- D) Desaparece por completo al finalizar el año.

**Respuesta correcta:** C.

**Explicación:** La inflación es el aumento generalizado de los precios. Cuando los precios suben y nuestros ingresos no aumentan en la misma proporción, el dinero pierde poder adquisitivo y permite comprar menos bienes y servicios.

## 3. Sistema de puntuación

Cada respuesta correcta sumará 1 punto y cada respuesta incorrecta sumará 0 puntos. La puntuación máxima será de 6 puntos.

El juego mostrará la puntuación actual durante la partida y, al finalizar, indicará los puntos obtenidos y el porcentaje de aciertos.

El porcentaje se calculará dividiendo el número de respuestas correctas entre el total de preguntas y multiplicando el resultado por 100.

## 4. Condición de finalización y reinicio

La partida terminará cuando se hayan respondido las 6 preguntas.

Al finalizar, se mostrará la puntuación total, el porcentaje de aciertos y un mensaje específico según el resultado obtenido:

- De 0 a 2 puntos: «Necesitas repasar tus finanzas. ¡Sigue aprendiendo!».
- De 3 a 5 puntos: «Vas por buen camino, pero aún puedes mejorar tu inteligencia financiera».
- 6 puntos: «¡Excelente! Eres un maestro de las finanzas personales».

El jugador dispondrá de un botón para reiniciar la partida. Al pulsarlo, la puntuación volverá a cero, se restablecerá el progreso y aparecerá la primera pregunta, permitiendo jugar de nuevo sin recargar la página.

## 5. Diseño responsive

La interfaz tendrá un diseño moderno, profesional y minimalista, inspirado en aplicaciones de finanzas personales.

Se utilizarán tonos verdes, blancos y oscuros, con tarjetas para las preguntas, botones claros y una barra de progreso que indique el avance de la partida, por ejemplo, «Pregunta 3 de 6».

El diseño deberá adaptarse a diferentes tamaños de pantalla, especialmente a ordenadores, sin perder legibilidad ni funcionalidad en móviles y tabletas.

Los botones tendrán estados visuales diferenciados al pasar el cursor, recibir el foco o ser seleccionados. También se garantizará un contraste adecuado entre el texto y el fondo.

## 6. Navegación con teclado y accesibilidad

El juego deberá poder utilizarse sin necesidad de ratón.

- El jugador podrá recorrer las opciones mediante las teclas Tab y Shift + Tab.
- Podrá seleccionar una opción enfocada mediante Enter o la barra espaciadora.
- El foco del teclado deberá distinguirse claramente mediante el estado CSS `:focus-visible`.
- Se utilizarán etiquetas HTML semánticas, como `<button>`, para las opciones y los controles interactivos.
- Después de seleccionar una respuesta, las opciones quedarán deshabilitadas para impedir que el jugador responda varias veces a la misma pregunta.
- Se indicará si la respuesta es correcta o incorrecta y se mostrará la explicación correspondiente.
- Aparecerá un botón «Siguiente pregunta» para continuar después de leer la explicación.
- Al cambiar de pregunta, el foco del teclado se gestionará correctamente para facilitar la navegación.
- Al finalizar la partida, el resultado será claramente visible y el botón de reinicio será accesible mediante teclado.

Los eventos de JavaScript se implementarán en `app.js` cuando sean necesarios, evitando duplicar el comportamiento que los botones HTML ya proporcionan de forma nativa.

## 7. Tecnologías y archivos

El juego se desarrollará exclusivamente con HTML, CSS y JavaScript, utilizando tres archivos independientes:

- **`index.html`:** contendrá la estructura del juego, el área de preguntas, las opciones de respuesta, la puntuación, la barra de progreso y los botones de navegación.
- **`styles.css`:** definirá los colores, la tipografía, la disposición de los elementos, los estados de los botones y el diseño responsive.
- **`app.js`:** gestionará las preguntas, las respuestas correctas, las explicaciones, la puntuación, el porcentaje de aciertos, la actualización del progreso, el bloqueo de respuestas y el reinicio de la partida.

Los tres archivos deberán estar correctamente conectados entre sí y organizados en una misma carpeta.

## 8. Restricciones

- No se utilizarán librerías ni frameworks externos.
- No se utilizarán imágenes remotas.
- No se recopilarán ni almacenarán datos personales.
- No será necesario disponer de un servidor.
- El juego deberá funcionar localmente en el navegador al abrir `index.html`.
- Las preguntas y explicaciones deberán ser claras, educativas y financieramente correctas.
- La respuesta correcta no deberá mostrarse antes de que el jugador seleccione una opción.
- La puntuación solo se actualizará una vez por pregunta.
- No se permitirá avanzar sin responder a la pregunta actual.
- El botón de reinicio deberá restablecer correctamente todos los elementos del juego.
- No se ofrecerán recomendaciones personalizadas de inversión, ya que la finalidad del juego es exclusivamente educativa.
- El código deberá estar organizado, ser legible e incluir comentarios cuando ayuden a comprender su funcionamiento.

## 9. Objetivo final

Crear un juego web interactivo, accesible y fácil de utilizar que enseñe conceptos fundamentales de educación financiera de forma sencilla y entretenida.

El jugador podrá poner a prueba sus conocimientos sobre ahorro, gestión del dinero, inversión e inflación, recibir explicaciones educativas y conocer su resultado final.

El resultado deberá ser un juego completamente funcional, visualmente atractivo y ejecutable en un navegador sin instalar dependencias ni utilizar un servidor.

## 10. Registro de defectos y decisiones revisadas

1. **Final de la partida poco definido:** se concretó que la partida termina al responder las seis preguntas y que la pantalla final muestra los puntos, el porcentaje de aciertos y un mensaje según el resultado.
2. **Posibilidad de responder varias veces a la misma pregunta:** se decidió deshabilitar todas las opciones después de la primera selección para evitar respuestas duplicadas y cambios indebidos en la puntuación.
3. **Navegación por teclado y gestión del foco:** se especificó el uso de botones nativos, el indicador visible `:focus-visible` y el traslado del foco a «Siguiente pregunta» tras responder, a la primera opción al cambiar de pregunta y a «Reiniciar partida» al finalizar.