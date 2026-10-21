## Paso 2. Construir el prompt por bloques

**Rol:** Actúa como desarrollador/a frontend que crea recursos accesibles para alumnado de 2.º DAW.

**Tarea:** Construye un juego web de preguntas llamado FinanQuiz.

**Contexto:** Se ejecutará localmente al abrir `index.html`. El público es personas que quieren aprender conceptos básicos de educación financiera sin necesidad de tener conocimientos previos.

Las preguntas son:

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

## Requisitos funcionales:
- Muestra una pregunta cada vez con cuatro respuestas.
- Indica si la respuesta es correcta y actualiza la puntuación.
- Al terminar, muestra la puntuación y un botón para reiniciar.

## Requisitos de accesibilidad y calidad:
- Usa elementos HTML semánticos, etiquetas visibles y foco de teclado.
- No uses dependencias, imágenes remotas ni datos personales.
- Separa HTML, CSS y JavaScript.

## Formato de salida:
1. Muestra primero el árbol de archivos.
2. Devuelve el contenido completo de `index.html`, `styles.css` y `app.js` en bloques separados.
3. Explica cómo probarlo localmente y enumera tres pruebas manuales.

## Restricciones:
- No inventes características fuera de esta lista.
- No uses `alert()` para toda la interacción.