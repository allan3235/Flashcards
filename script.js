const flashcards = [
    {
        pregunta: "¿Qué es el Cómputo Bioinspirado?",
        respuesta: "Es un campo de estudio que busca resolver problemas informáticos utilizando modelos de biología. Se relaciona con el conexionismo, comportamiento social y surgimiento."
    },
    {
        pregunta: "¿Cuáles son los principales campos de investigación del Cómputo Bioinspirado?",
        respuesta: "<ul><li>Algoritmos evolutivos</li><li>Inteligencia de enjambre</li><li>Redes neuronales artificiales</li><li>Sistemas inmunológicos artificiales</li><li>Geometría fractal</li><li>Vida artificial</li><li>Computación de ADN</li><li>Computación cuántica</li></ul>"
    },
    {
        pregunta: "¿Qué es la Inteligencia Artificial (IA)?",
        respuesta: "Es un área emocionante con gran potencial que históricamente se ha dirigido por cuatro enfoques: Pensando como Humano, Pensando Racionalmente, Actuando como Humano y Actuando Racionalmente."
    },
    {
        pregunta: "¿Qué significa 'Pensando como Humano' en IA?",
        respuesta: "Es el esfuerzo de hacer que las computadoras piensen como seres humanos, usando automación de actividades con el pensamiento humano como forma de razonamiento y solución de problemas."
    },
    {
        pregunta: "¿Qué significa 'Pensando Racionalmente' en IA?",
        respuesta: "Es el estudio de las facultades mentales a través del uso de modelos computacionales, enfocándose en el razonamiento lógico y correcto."
    },
    {
        pregunta: "¿Qué significa 'Actuando como Humano' en IA?",
        respuesta: "Es el arte de crear máquinas que realicen funciones que requieren inteligencia cuando las realiza un ser humano."
    },
    {
        pregunta: "¿Qué significa 'Actuando Racionalmente' en IA?",
        respuesta: "Es el estudio del diseño de agentes inteligentes que se preocupan por el comportamiento inteligente en artefactos."
    },
    {
        pregunta: "¿Qué es Crossover/Recombinación?",
        respuesta: "<strong>Crossover:</strong> Explorativo - es un operador genético fundamental utilizado en los algoritmos evolutivos para generar nuevos individuos (descendencia) a partir de dos individuos padres seleccionados de la población actual.<br><strong>Mutación:</strong> Explotativa - crea divisiones aleatorias pequeñas, manteniéndose cerca del padre."
    },
    {
        pregunta: "¿Cuál es la diferencia entre Exploración y Explotación? (cómputo evolutivo.)",
        respuesta: "<strong>Exploración:</strong> Descubrimiento de áreas prometedoras en el espacio de búsqueda, ganando información sobre el problema.<br><strong>Explotación:</strong> Optimización dentro de un área prometedora, utilizando información."
    },
    {
        pregunta: "¿Qué es un Enjambre (Swarm)?",
        respuesta: "Es una colección débilmente estructurada de agentes que interactúan. Los agentes son individuos que pertenecen a un grupo, pueden comunicarse e interactuar entre sí, pero no siempre actúan como grupo."
    },
    {
        pregunta: "¿Qué características tiene un Enjambre?",
        respuesta: "<ul><li>Está compuesto de muchos individuos</li><li>Los individuos son homogéneos</li><li>Interacción local basada en reglas simples</li><li>Auto-organización (sin control centralizado)</li></ul>"
    },
    {
        pregunta: "¿Qué es la Inteligencia de Enjambre?",
        respuesta: "Es una técnica de Inteligencia Artificial basada en el comportamiento colectivo observado en sistemas naturales (como hormigas, aves o abejas). Opera en sistemas descentralizados y auto-organizados donde agentes simples interactúan entre sí y con el ambiente, generando inteligencia emergente sin estructuras centralizadas de control."
    },
    {
        pregunta: "¿En qué se basa la Inteligencia de Enjambre?",
        respuesta: "La Inteligencia de Enjambre se basa en el comportamiento colectivo y descentralizado de sistemas naturales autoorganizados. Sus pilares son la interacción social, la autorregulación y el seguimiento de reglas locales simples (como se observa en colonias de hormigas, bandadas de aves o bancos de peces) para resolver problemas complejos sin un control central."
    },
    {
        pregunta: "¿Cuáles son los tres tipos de Complejidad Computacional principales?",
        respuesta: "<strong>P (Polynomial time):</strong> Problemas resolubles en tiempo polinómico.<br><strong>NP (Nondeterministic Polynomial):</strong> Problemas verificables en tiempo polinómico.<br><strong>NP-Complete:</strong> Los más difíciles en NP."
    },
    {
        pregunta: "¿Qué es PSO (Particle Swarm Optimization)?",
        respuesta: "Es un algoritmo de optimización basado en el comportamiento colectivo de insectos o microorganismos. Utiliza múltiples partículas que tienen una posición, velocidad personal, mejor posición personal y mejor posición global."
    },
    {
        pregunta: "¿Qué elementos tiene el esquema PSO?",
        respuesta: "<ul><li>Position X: Posición actual de la partícula</li><li>Personal best: Mejor posición encontrada por esa partícula</li><li>Global best: Mejor posición encontrada por todo el enjambre</li><li>New Velocity: Velocidad actualizada hacia los objetivos</li></ul>"
    },
    {
        pregunta: "¿Qué es Clustering?",
        respuesta: "Es la clasificación de objetos en diferentes grupos. Más precisamente, es la partición de un conjunto de datos en subconjuntos (clusters) donde los datos en cada subconjunto comparten rasgos o características comunes según una medida de distancia definida."
    },
    {
        pregunta: "¿Qué es Distancia Euclidiana?",
        respuesta: "También llamada 2-norm distance. Es la distancia más común. Se calcula como la raíz cuadrada de la suma de las diferencias al cuadrado entre coordenadas. Es la distancia en línea recta entre dos puntos."
    },
    {
        pregunta: "¿Qué es Distancia Manhattan?",
        respuesta: "Llamada también distancia L1. Se calcula como la suma del valor absoluto de las diferencias entre coordenadas. Es el camino en forma de grid, como moverse en las calles de Manhattan (norte-sur, este-oeste)."
    },
    {
        pregunta: "¿Cuál es la diferencia entre Distancia Euclidiana y Manhattan?",
        respuesta: "<strong>Euclidiana:</strong> Camino en línea recta diagonal (verde en el mapa).<br><strong>Manhattan:</strong> Camino solo horizontal y vertical en grid (azul en el mapa)."
    },
    {
        pregunta: "¿Qué es K-Means?",
        respuesta: "Es un algoritmo de clustering que agrupa datos en K clusters. Requiere decidir el número de clusters de antemano y utiliza centroides para representar cada cluster."
    },
    {
        pregunta: "¿Cuál es el Paso 1 del algoritmo K-Means?",
        respuesta: "Decidir el número K de clusters deseados. Esta es una decisión crítica que influye en el resultado final del clustering."
    },
    {
        pregunta: "¿Cuál es el Paso 2 del algoritmo K-Means?",
        respuesta: "Crear una partición inicial que clasifique los datos en K clusters. Se pueden asignar aleatoriamente o de manera determinística (tomar los primeros K muestras como clusters de un elemento)."
    },
    {
        pregunta: "¿Cuál es el Paso 3 del algoritmo K-Means?",
        respuesta: "Asignar cada muestra de entrenamiento restante (N - K) al cluster con el centroide más cercano. Después de cada asignación, se recalcula el centroide del cluster."
    },
    {
        pregunta: "¿Cuál es el proceso iterativo de K-Means?",
        respuesta: "Después de los pasos iniciales, se repite el proceso de: 1) Calcular distancias de objetos a centroides, 2) Agrupar basado en distancia mínima, hasta que la solución converja (no haya cambios en los centroides)."
    },
    {
        pregunta: "¿Cuántos pasos típicos tiene el algoritmo K-Means en un ejemplo?",
        respuesta: "Generalmente entre 4-5 pasos hasta la convergencia, aunque puede variar según los datos iniciales y la complejidad del problema. En el ejemplo con k=3, se mostraron 4 pasos."
    },
    {
        pregunta: "¿Qué es Optimización de Colonia de Hormigas (ACO)?",
        respuesta: "Estudia sistemas artificiales inspirados en el comportamiento de colonias reales de hormigas y se utiliza para resolver problemas de optimización discreta."
    },
    {
        pregunta: "¿Cómo encuentran comida las hormigas en ACO?",
        respuesta: "Las hormigas encuentran comida en el camino más corto usando feromonas. Las hormigas esconden feromonas para recordar su camino, y cuando encuentran comida, marcan su viaje de regreso con feromonas."
    },
    {
        pregunta: "¿Qué ocurre con las feromonas en ACO?",
        respuesta: "Las feromonas evaporan con el tiempo. Las más antiguas se desvanecen, pero cuando una hormiga encuentra comida marca su viaje de regreso con feromonas, reforzando ese camino."
    },
    {
        pregunta: "¿Cuál es el ciclo de feromonas en ACO?",
        respuesta: "<ul><li>Las hormigas encuentran comida</li><li>Marcan el camino de regreso con feromonas</li><li>Las feromonas evaporan más rápido en caminos largos</li><li>Los caminos cortos se refuerzan por las feromonas más</li><li>Finalmente, todas las hormigas llegan al camino más corto</li></ul>"
    },
    {
        pregunta: "¿Cuál es el Esquema General de Algoritmos Evolutivos?",
        respuesta: "<ul><li>Inicialización: Crear población inicial</li><li>Selección de padres: Elegir individuos para reproducción</li><li>Recombinación: Combinar información de padres</li><li>Mutación: Introducir variabilidad aleatoria</li><li>Descendencia: Crear nuevos individuos</li><li>Selección de sobrevivientes: Elegir quiénes continúan</li><li>Finalización: Terminar cuando se cumple criterio</li></ul>"
    },
    {
        pregunta: "¿Qué es la Mutación en Algoritmos Evolutivos?",
        respuesta: "Actúa sobre un genotipo y entrega otro. Es exploitativa - crea divisiones aleatorias pequeñas, manteniéndose cerca del padre. Su importancia depende de la representación y dialecto."
    },
    {
        pregunta: "¿Cuáles son los tipos de Mutación en Algoritmos Evolutivos?",
        respuesta: "<ul><li>Binary GA: Operador de fondo, encargado de preservar e introducir diversidad</li><li>EP para FSMs/variables continuas: Único operador de búsqueda</li><li>GP: Raramente usado</li></ul>"
    },
    {
        pregunta: "¿Qué puede garantizar la Mutación?",
        respuesta: "Puede garantizar conectividad del espacio de búsqueda y por lo tanto pruebas de convergencia."
    },
    {
        pregunta: "¿Qué es Recombinación en Algoritmos Evolutivos?",
        respuesta: "Fusiona información de padres en descendencia. Es exploratoria - hace un salto grande a un área entre dos áreas padre. La fusión de qué información es estocástica y la mayoría de descendencia puede ser peor que los padres."
    },
    {
        pregunta: "¿Cuándo se usa la Recombinación?",
        respuesta: "El principio ha sido usado por milenios por criadores de plantas y animales. Genera buenos rasgos combinando elementos de genotipos de padres diferentes."
    },
    {
        pregunta: "¿Cuáles son los modelos de cómputo basados en la naturaleza?",
        respuesta: "<ul><li>Algoritmos evolutivos</li><li>Inteligencia de enjambre</li><li>Redes neuronales artificiales</li><li>Sistemas inmunológicos artificiales</li><li>Geometría fractal</li><li>Vida artificial</li><li>Computación de ADN</li><li>Computación cuántica</li></ul>"
    },
    {
        pregunta: "¿Qué paradigmas estudia la Computación Natural?",
        respuesta: "Estudia paradigmas abstractos de fenómenos naturales como: autorregulación, funcionamiento del cerebro, evolución darwiniana, comportamiento grupal, sistema inmunológico y membranas celulares."
    },
    {
        pregunta: "¿Cuáles son los medios físicos alternativos para computación?",
        respuesta: "Además del hardware electrónico tradicional, se pueden implementar paradigmas computacionales en: biomoléculas (ADN, ARN), dispositivos de computación cuántica de iones atrapados."
    },
    {
        pregunta: "¿En qué se diferencia Crossover de Mutación principalmente?",
        respuesta: "<strong>Crossover:</strong> Explorativo, salta entre áreas padre (big jump).<br><strong>Mutación:</strong> Explotativa, divisiones pequeñas aleatorias cercanas al padre. Hay cooperación Y competencia entre ellos."
    },
    {
        pregunta: "¿Cuál es el objetivo principal del Cómputo Bioinspirado?",
        respuesta: "Buscar resolver problemas informáticos complejos utilizando modelos basados en la biología y la naturaleza, aprovechando principios como la evolución, el comportamiento colectivo y la auto-organización."
    },
    {
        pregunta: "¿Qué se entiende por 'Surgimiento' en el Cómputo Bioinspirado?",
        respuesta: "Es la propiedad de los sistemas donde el comportamiento global emerge de las interacciones simples locales entre componentes. No hay control centralizado pero surge orden y complejidad."
    },
    {
        pregunta: "¿Qué es el 'Conexionismo' en Cómputo Bioinspirado?",
        respuesta: "Es un enfoque que enfatiza las conexiones entre múltiples procesos. En IA, se relaciona con redes neuronales artificiales donde la inteligencia emerge de conexiones entre neuronas artificiales."
    },
    {
        pregunta: "¿Cuál es la relación entre Computación Natural e Inteligencia Artificial?",
        respuesta: "La Computación Natural/Bioinspirada es un subconjunto importante de la Inteligencia Artificial. Dentro de las ciencias computacionales, el cómputo bioinspirado se relaciona con la inteligencia artificial y el aprendizaje automático."
    }
];

let currentIndex = 0;
let isFlipped = false;
let cards = [...flashcards];

function displayCard() {
    const card = cards[currentIndex];
    document.getElementById('front').innerHTML = `
        <div>
            <h3>${card.pregunta}</h3>
            <p>Haz clic para ver la respuesta</p>
            <div class="categoria">Pregunta ${currentIndex + 1}</div>
        </div>
    `;
    document.getElementById('back').innerHTML = `
        <div>
            <h3>Respuesta</h3>
            <p>${card.respuesta}</p>
        </div>
    `;
    
    document.getElementById('current').textContent = currentIndex + 1;
    document.getElementById('total').textContent = cards.length;
    
    const progress = ((currentIndex + 1) / cards.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    
    isFlipped = false;
    document.getElementById('card').classList.remove('flipped');
}

function toggleFlip() {
    const card = document.getElementById('card');
    card.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

function nextCard() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        displayCard();
    }
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        displayCard();
    }
}

function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    currentIndex = 0;
    displayCard();
}

displayCard();
