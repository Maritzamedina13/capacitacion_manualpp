/* ============================================================
   BANCO DE PREGUNTAS por módulo. Expone window.ITM_QUIZZES
   Tipos: mcq | tf | match | order
   ============================================================ */
window.ITM_QUIZZES = {
  /* ---------------- MÓDULO 1 ---------------- */
  1: [
    {
      type: "mcq",
      prompt: "¿Con qué factores del PEI se desarrollan en coherencia las prácticas profesionales ITM?",
      options: ["Factores 1 y 2", "Factores 5 y 7", "Factores 3 y 4", "Factores 8 y 9"],
      answer: 1,
      explain: "Las prácticas se desarrollan en coherencia con el PEI, específicamente con los factores 5 y 7."
    },
    {
      type: "tf",
      prompt: "Las prácticas profesionales solo desarrollan competencias técnicas.",
      answer: false,
      explain: "Falso. Desarrollan competencias técnicas y humanas, fortaleciendo el vínculo con el mundo organizacional."
    },
    {
      type: "mcq",
      prompt: "¿Qué norma redefine el contrato de aprendizaje como contrato laboral especial a término fijo?",
      options: ["Ley 2043 de 2020", "Ley 2365 de 2024", "Ley 2466 de 2025 (Reforma Laboral)", "Resolución 3546 de 2018"],
      answer: 2,
      explain: "La Ley 2466 de 2025 (Reforma Laboral) redefine el contrato de aprendizaje como contrato laboral especial."
    },
    {
      type: "match",
      prompt: "Relaciona cada norma con el tema que regula.",
      pairs: [
        { l: "Ley 2043 de 2020", r: "Certificar las prácticas como experiencia" },
        { l: "Ley 2365 de 2024", r: "Prevención del acoso sexual" },
        { l: "Decreto 223 de 2026", r: "Reglamenta prácticas y aprendizaje" },
        { l: "Ley 2466 de 2025", r: "Reforma Laboral" }
      ],
      explain: "Cada norma cubre un ámbito distinto del marco que sustenta el Manual."
    }
  ],

  /* ---------------- MÓDULO 2 ---------------- */
  2: [
    {
      type: "match",
      prompt: "Relaciona cada acrónimo con su significado.",
      pairs: [
        { l: "ARL", r: "Administradora de Riesgos Laborales" },
        { l: "SENA", r: "Servicio Nacional de Aprendizaje" },
        { l: "COPASST", r: "Comité Paritario de Seguridad y Salud" },
        { l: "CUEE", r: "Comité Universidad Empresa Estado" }
      ],
      explain: "Estos acrónimos aparecen en todo el proceso de prácticas."
    },
    {
      type: "mcq",
      prompt: "¿Quién lidera la orientación pedagógica del aprendiz durante las prácticas?",
      options: ["El tutor", "El monitor", "El asesor técnico", "El coordinador de la facultad"],
      answer: 1,
      explain: "El monitor, designado por la institución, lidera la orientación pedagógica; el tutor lidera lo productivo."
    },
    {
      type: "tf",
      prompt: "Si una entidad firma un contrato de aprendizaje SENA, se denomina «escenario de prácticas laborales».",
      answer: false,
      explain: "Falso. Si firma contrato de aprendizaje es «empresa patrocinadora». El «escenario» surge con la vinculación formativa."
    },
    {
      type: "mcq",
      prompt: "El tutor del practicante es designado por…",
      options: ["La facultad", "La Oficina de Prácticas", "La empresa o el escenario de prácticas", "El SENA"],
      answer: 2,
      explain: "El tutor es un trabajador de la empresa patrocinadora o el escenario de prácticas laborales."
    }
  ],

  /* ---------------- MÓDULO 3 ---------------- */
  3: [
    {
      type: "mcq",
      prompt: "¿Cuál es el objetivo general de las prácticas profesionales ITM?",
      options: [
        "Reemplazar la formación teórica del programa",
        "Vincular la academia al sector productivo afianzando competencias",
        "Garantizar empleo formal a todos los egresados",
        "Sustituir el trabajo de grado por un examen"
      ],
      answer: 1,
      explain: "El objetivo general es vincular la academia al sector productivo afianzando las competencias adquiridas."
    },
    {
      type: "tf",
      prompt: "La Oficina de Prácticas Profesionales ITM pertenece a la Vicerrectoría de Docencia – Dirección de Gestión Académica.",
      answer: true,
      explain: "Verdadero. Desde allí gestiona, administra, acompaña y evalúa el proceso."
    },
    {
      type: "mcq",
      prompt: "¿Quién asigna los monitores de prácticas?",
      options: ["La empresa patrocinadora", "La Oficina de Prácticas (Vicerrectoría de Docencia)", "El estudiante", "El Ministerio de Trabajo"],
      answer: 1,
      explain: "Los monitores son designados desde la Oficina de Prácticas / Vicerrectoría de Docencia."
    },
    {
      type: "tf",
      prompt: "Estimular la cultura de la investigación es uno de los objetivos específicos de las prácticas.",
      answer: true,
      explain: "Verdadero. Se busca articular las prácticas con las líneas de investigación de cada facultad."
    }
  ],

  /* ---------------- MÓDULO 4 ---------------- */
  4: [
    {
      type: "mcq",
      prompt: "¿Qué promedio acumulado mínimo se exige para las prácticas internacionales?",
      options: ["3,0", "3,5", "3,8", "4,0"],
      answer: 2,
      explain: "Se requiere un promedio acumulado igual o superior a 3,8, según la reglamentación vigente."
    },
    {
      type: "tf",
      prompt: "Las prácticas sociales requieren afiliación a una ARL.",
      answer: true,
      explain: "Verdadero. Duran entre 16 y 24 semanas, pueden ser remuneradas o no, y requieren afiliación a ARL."
    },
    {
      type: "match",
      prompt: "Relaciona cada modalidad con su rasgo distintivo.",
      pairs: [
        { l: "Profesionales", r: "Énfasis en entrenamiento laboral" },
        { l: "Sociales", r: "ONG, comunidades y desarrollo" },
        { l: "Internacionales", r: "En el exterior, con póliza de viaje" }
      ],
      explain: "Cada modalidad responde a un perfil e intereses distintos del estudiante."
    },
    {
      type: "mcq",
      prompt: "Para tecnólogos y profesionales, ¿cuál es la duración máxima de las prácticas internacionales?",
      options: ["3 meses", "6 meses", "9 meses", "12 meses"],
      answer: 1,
      explain: "No puede superar los seis meses de ejecución, salvo actualización del diseño curricular (mínimo 16 semanas)."
    }
  ],

  /* ---------------- MÓDULO 5 ---------------- */
  5: [
    {
      type: "order",
      prompt: "Ordena los pasos del proceso integral de prácticas.",
      steps: [
        "Formación preprácticas (habilitación)",
        "Selección por la empresa o escenario",
        "Solicitud y generación de la carta de inicio",
        "Legalización del contrato o convenio",
        "Acompañamiento y seguimiento del monitor",
        "Evaluación final y cierre administrativo"
      ],
      explain: "El proceso es un flujo continuo: habilitar, vincular, legalizar, acompañar y cerrar."
    },
    {
      type: "mcq",
      prompt: "¿Qué caracteriza al contrato de aprendizaje frente a la vinculación formativa?",
      options: [
        "No genera ninguna obligación de seguridad social",
        "Es un contrato laboral especial con seguridad social integral",
        "Solo aplica a prácticas internacionales",
        "Lo firma únicamente el estudiante"
      ],
      answer: 1,
      explain: "El contrato de aprendizaje es laboral especial: apoyo de sostenimiento, seguridad social integral y prestaciones."
    },
    {
      type: "tf",
      prompt: "El estudiante puede iniciar oficialmente sus prácticas sin la carta de inicio.",
      answer: false,
      explain: "Falso. Las prácticas solo inician con la carta de inicio, la documentación firmada y la afiliación a seguridad social."
    },
    {
      type: "mcq",
      prompt: "¿Qué instancia atiende las situaciones excepcionales durante las prácticas?",
      options: [
        "El Consejo Académico",
        "El Comité de Casos Especiales de la Oficina de Prácticas",
        "El SENA",
        "La Vicerrectoría Administrativa"
      ],
      answer: 1,
      explain: "El Comité de Casos Especiales define acciones de acompañamiento, ajuste o mejora."
    }
  ],

  /* ---------------- MÓDULO 6 ---------------- */
  6: [
    {
      type: "mcq",
      prompt: "Según el Decreto 223 de 2026, ¿cuál es la edad mínima para las prácticas laborales?",
      options: ["14 años", "15 años", "16 años", "18 años"],
      answer: 1,
      explain: "La edad mínima es de 15 años; los adolescentes de 15 a 18 requieren autorización del inspector de trabajo."
    },
    {
      type: "tf",
      prompt: "Comprobar plagio en el Plan de Prácticas hace que la modalidad de grado se califique como reprobada.",
      answer: true,
      explain: "Verdadero. En caso de plagio, la modalidad se califica como reprobada y se debe optar por otra modalidad de grado."
    },
    {
      type: "mcq",
      prompt: "La terminación anticipada del convenio o contrato solo procede cuando hay oferta laboral formal y un avance de prácticas del…",
      options: ["50%", "60%", "70%", "80%"],
      answer: 3,
      explain: "Procede únicamente con oferta laboral formal y un avance de las prácticas del 80%."
    },
    {
      type: "match",
      prompt: "Relaciona cada parte con uno de sus deberes.",
      pairs: [
        { l: "Oficina de Prácticas", r: "Designar al monitor" },
        { l: "Empresa / escenario", r: "Designar un tutor y asumir la ARL" },
        { l: "Practicante", r: "No iniciar sin carta de inicio" }
      ],
      explain: "Cada parte asume deberes específicos para garantizar la calidad del proceso."
    }
  ]
};
