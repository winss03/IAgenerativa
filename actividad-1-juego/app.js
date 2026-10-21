// Base de datos de preguntas
const questions = [
    {
        question: "¿Por qué es importante ahorrar una parte de los ingresos mensuales?",
        options: [
            "A) Porque permite gastar todo el dinero sin preocuparse por el futuro.",
            "B) Porque ayuda a afrontar imprevistos y alcanzar objetivos financieros futuros.",
            "C) Porque elimina la necesidad de controlar los gastos.",
            "D) Porque garantiza que siempre se obtendrán beneficios de las inversiones."
        ],
        correctIndex: 1,
        explanation: "Ahorrar permite crear un fondo para emergencias y prepararse para gastos futuros sin depender necesariamente de préstamos."
    },
    {
        question: "Desde el punto de vista de las finanzas personales, ¿cuál de las siguientes opciones describe mejor un activo?",
        options: [
            "A) Una deuda que debemos devolver al banco.",
            "B) Un gasto mensual que debemos pagar obligatoriamente.",
            "C) Un recurso que poseemos y que tiene valor económico o puede generar ingresos.",
            "D) Un préstamo que hemos solicitado para comprar un producto."
        ],
        correctIndex: 2,
        explanation: "Un activo es un recurso con valor económico que poseemos. Algunos activos también pueden generar ingresos, mientras que un pasivo representa una obligación o deuda."
    },
    {
        question: "¿Qué sucede cuando una cantidad de dinero genera intereses y estos se añaden al capital para generar nuevos intereses?",
        options: [
            "A) El dinero deja de generar intereses.",
            "B) Los intereses se convierten automáticamente en una deuda.",
            "C) El capital inicial desaparece al finalizar cada periodo.",
            "D) Los intereses acumulados también pueden generar nuevos intereses."
        ],
        correctIndex: 3,
        explanation: "El interés compuesto permite obtener intereses tanto sobre el capital inicial como sobre los intereses acumulados. Su efecto depende del tiempo y del tipo de interés."
    },
    {
        question: "¿Cuál es una de las principales ventajas de diversificar una cartera de inversiones?",
        options: [
            "A) Repartir el riesgo entre diferentes inversiones para reducir la dependencia de una sola.",
            "B) Garantizar que todas las inversiones produzcan beneficios.",
            "C) Evitar por completo cualquier pérdida económica.",
            "D) Invertir todo el dinero en la empresa con mejores resultados recientes."
        ],
        correctIndex: 0,
        explanation: "La diversificación consiste en distribuir el dinero. Ayuda a reducir el impacto negativo de una inversión concreta, aunque no elimina todos los riesgos."
    },
    {
        question: "¿Cuál es el principal objetivo de elaborar un presupuesto mensual personal?",
        options: [
            "A) Gastar todos los ingresos antes de finalizar el mes.",
            "B) Controlar los ingresos y los gastos para organizar mejor el dinero.",
            "C) Evitar tener que ahorrar una parte de los ingresos.",
            "D) Garantizar que todas las compras realizadas sean rentables."
        ],
        correctIndex: 1,
        explanation: "Un presupuesto permite conocer cuánto entra y cuánto se gasta. Identifica gastos innecesarios, planifica el ahorro y organiza prioridades financieras."
    },
    {
        question: "Si los precios aumentan un 5 % en un año y nuestros ingresos permanecen iguales, ¿qué ocurre con nuestro poder adquisitivo?",
        options: [
            "A) Aumenta, porque los productos tienen un precio mayor.",
            "B) Permanece siempre igual, independientemente de los precios.",
            "C) Disminuye, porque podemos comprar menos con la misma cantidad de dinero.",
            "D) Desaparece por completo al finalizar el año."
        ],
        correctIndex: 2,
        explanation: "La inflación es el aumento de precios. Cuando suben y los ingresos no, el dinero pierde poder adquisitivo y permite comprar menos bienes y servicios."
    }
];

// Variables de estado
let currentQuestionIndex = 0;
let score = 0;

// Referencias al DOM
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score-text');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackExplanation = document.getElementById('feedback-explanation');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const finalScoreText = document.getElementById('final-score-text');
const finalPercentageText = document.getElementById('final-percentage-text');
const finalMessage = document.getElementById('final-message');
const restartBtn = document.getElementById('restart-btn');

// Inicializar juego
function initGame() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    updateHeader();
    loadQuestion();
}

// Actualizar cabecera (texto y barra)
function updateHeader() {
    progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
    scoreText.textContent = `Puntuación: ${score}`;
    const progressPercent = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

// Cargar pregunta actual
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    
    // Limpiar opciones previas y feedback
    optionsContainer.innerHTML = '';
    feedbackContainer.classList.add('hidden');
    
    // Generar botones de opciones
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        // Soporte semántico y accesibilidad
        button.setAttribute('role', 'button');
        button.tabIndex = 0;
        
        button.addEventListener('click', () => handleAnswer(index, button));
        optionsContainer.appendChild(button);
    });

    // Accesibilidad: Enfocar la primera opción al cargar la pregunta
    setTimeout(() => {
        const firstOption = optionsContainer.querySelector('.option-btn');
        if (firstOption) firstOption.focus();
    }, 100);
}

// Manejar la respuesta del usuario
function handleAnswer(selectedIndex, selectedButton) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correctIndex;
    
    // Deshabilitar todos los botones para evitar múltiples respuestas
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
        feedbackTitle.textContent = "¡Respuesta Correcta!";
        feedbackContainer.classList.remove('incorrect-feedback');
    } else {
        selectedButton.classList.add('incorrect');
        feedbackTitle.textContent = "Respuesta Incorrecta";
        feedbackContainer.classList.add('incorrect-feedback');
        // Resaltar también la correcta
        allButtons[currentQuestion.correctIndex].classList.add('correct');
    }
    
    updateHeader();
    
    // Mostrar explicación
    feedbackExplanation.textContent = currentQuestion.explanation;
    feedbackContainer.classList.remove('hidden');
    
    // Accesibilidad: Mover el foco al botón de siguiente
    nextBtn.focus();
}

// Pasar a la siguiente pregunta o finalizar
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        updateHeader();
        loadQuestion();
    } else {
        showResults();
    }
}

// Mostrar pantalla final de resultados
function showResults() {
    // Completar barra de progreso
    progressBar.style.width = '100%';
    
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    const percentage = Math.round((score / questions.length) * 100);
    
    finalScoreText.textContent = `${score} puntos`;
    finalPercentageText.textContent = `${percentage}% de aciertos`;
    
    if (score >= 0 && score <= 2) {
        finalMessage.textContent = "Necesitas repasar tus finanzas. ¡Sigue aprendiendo!";
    } else if (score >= 3 && score <= 5) {
        finalMessage.textContent = "Vas por buen camino, pero aún puedes mejorar tu inteligencia financiera.";
    } else if (score === 6) {
        finalMessage.textContent = "¡Excelente! Eres un maestro de las finanzas personales.";
    }
    
    // Accesibilidad: Mover el foco al botón de reiniciar
    restartBtn.focus();
}

// Event Listeners principales
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initGame);

// Arrancar el juego por primera vez
initGame();