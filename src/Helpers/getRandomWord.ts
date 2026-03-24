
let words: string [] = [

    // --- Palabras de Dificultad Intermedia ---
    "CALABAZA", "ELEFANTE", "ESDRUJULA", "GUITARRA", "INVIERNO",
    "JUGUETE", "KILOMETRO", "LLAVE", "MICROFONO", "NAVIDAD",
    "PANTALLA", "QUESO", "RATON", "SERPIENTE", "TELEFONO",
    "UNICORNIO", "VENTANA", "XILOFONO", "ZAPATO", "ASTRONAUTA",

    // --- Palabras Difíciles ---
    "ABREVIATURA", "CALEIDOSCOPIO", "DESOSTRACISMO", "ELECTROENCEFALOGRAMA", "FOTOSINTESIS",
    "HEMORRAGIA", "IMPERMEABILIZANTE", "JURIDICAMENTE", "KARATEKA", "LABERINTO",
    "METAMORFOSIS", "NEUROLOGICO", "OFTALMOLOGO", "PARALELEPIPEDO", "QUIROPRACTICO",
    "REFRIGERADOR", "SISMOLOGO", "TRANSCENDENTAL", "UNIVERSITARIO", "VULNERABILIDAD",
    "XEROCOPIA", "YOGURTERA", "ZOOLANDIA" 
];


export function getRandomWord() { 

    const randomIndex = Math.floor( Math.random() * words.length) ;
    
    return words [randomIndex];

}