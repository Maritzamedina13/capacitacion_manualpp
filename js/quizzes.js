/* ============================================================
   BANCO DE PREGUNTAS — 9 módulos, 8 preguntas c/u
   Tipos: mcq | tf | match | order
   Fuente: Manual de Prácticas Profesionales ITM V5
   ============================================================ */
window.ITM_QUIZZES = {

  /* ════════════════ MÓDULO 1 — Cap. I ════════════════ */
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
      explain: "Falso. Desarrollan simultáneamente competencias técnicas y humanas, promoviendo liderazgo, trabajo en equipo, ética y creatividad."
    },
    {
      type: "mcq",
      prompt: "¿Qué norma redefine el contrato de aprendizaje como contrato laboral especial a término fijo?",
      options: ["Ley 2043 de 2020", "Ley 2365 de 2024", "Ley 2466 de 2025 (Reforma Laboral)", "Resolución 3546 de 2018"],
      answer: 2,
      explain: "La Ley 2466 de 2025 (Reforma Laboral) redefine el contrato de aprendizaje como contrato laboral especial, otorgando plenos derechos laborales al aprendiz."
    },
    {
      type: "match",
      prompt: "Relaciona cada norma con el tema que regula.",
      pairs: [
        { l: "Ley 2043 de 2020", r: "Certifica las prácticas como experiencia" },
        { l: "Ley 2365 de 2024", r: "Prevención del acoso sexual" },
        { l: "Decreto 223 de 2026", r: "Reglamenta prácticas y aprendizaje" },
        { l: "Ley 2466 de 2025", r: "Reforma Laboral" }
      ],
      explain: "Cada norma cubre un ámbito distinto del marco que sustenta el Manual de Prácticas."
    },
    {
      type: "mcq",
      prompt: "¿Cuál de estas habilidades promueven específicamente las prácticas profesionales ITM?",
      options: [
        "Solo conocimientos técnicos del área",
        "Liderazgo, trabajo en equipo, ética y creatividad",
        "Únicamente habilidades de investigación",
        "Solo habilidades de ventas y mercadeo"
      ],
      answer: 1,
      explain: "El manual señala que las prácticas promueven habilidades clave como el liderazgo, el trabajo en equipo, la ética y la creatividad."
    },
    {
      type: "tf",
      prompt: "Las prácticas profesionales contribuyen al factor de bienestar del estudiante al ampliar su campo relacional.",
      answer: true,
      explain: "Verdadero. El proceso también aporta al bienestar, permite ampliar el campo relacional, demostrar el perfil profesional y obtener la primera experiencia laboral."
    },
    {
      type: "mcq",
      prompt: "¿Cuál decreto unifica la regulación vigente en un cuerpo normativo integral para las prácticas laborales?",
      options: ["Decreto 055 de 2015", "Resolución 3546 de 2018", "Decreto 223 de 2026", "Ley 1780 de 2016"],
      answer: 2,
      explain: "El Decreto 223 de 2026 subroga el Capítulo 3 del Decreto 1072/2015 y unifica las reglas aplicables y garantías exigibles para las prácticas laborales."
    },
    {
      type: "tf",
      prompt: "El ITM forma talento humano capaz de inscribirse en procesos de transformación tecnológica y social.",
      answer: true,
      explain: "Verdadero. Así lo establece el PEI del ITM al describir su misión formativa y su relación con el sector productivo y público."
    }
  ],

  /* ════════════════ MÓDULO 2 — Cap. II ════════════════ */
  2: [
    {
      type: "match",
      prompt: "Relaciona cada acrónimo con su significado completo.",
      pairs: [
        { l: "ARL", r: "Administradora de Riesgos Laborales" },
        { l: "SENA", r: "Servicio Nacional de Aprendizaje" },
        { l: "COPASST", r: "Comité Paritario de Seguridad y Salud" },
        { l: "CUEE", r: "Comité Universidad Empresa Estado" }
      ],
      explain: "Estos acrónimos aparecen constantemente en todo el proceso de prácticas del ITM."
    },
    {
      type: "mcq",
      prompt: "¿Quién lidera la orientación pedagógica del aprendiz durante las prácticas?",
      options: ["El tutor", "El monitor", "El asesor técnico", "El coordinador de la facultad"],
      answer: 1,
      explain: "El monitor, designado por la institución, lidera la orientación pedagógica. El tutor lidera el componente productivo."
    },
    {
      type: "tf",
      prompt: "Si una entidad firma un contrato de aprendizaje SENA, se denomina «escenario de prácticas laborales».",
      answer: false,
      explain: "Falso. Si firma un contrato de aprendizaje SENA es «empresa patrocinadora». El «escenario de prácticas laborales» surge con la vinculación formativa."
    },
    {
      type: "mcq",
      prompt: "¿Quién designa al tutor del practicante?",
      options: ["La facultad del programa", "La Oficina de Prácticas ITM", "La empresa patrocinadora o el escenario de prácticas", "El SENA directamente"],
      answer: 2,
      explain: "El tutor es un trabajador de la empresa patrocinadora o el escenario de prácticas laborales, designado por esa misma entidad."
    },
    {
      type: "mcq",
      prompt: "¿Qué es el Plan de Prácticas según el Decreto 223 de 2026?",
      options: [
        "El cronograma de clases presenciales del semestre",
        "Documento con objetivos formativos suscrito por estudiante, tutor y monitor",
        "El contrato laboral del practicante",
        "La hoja de vida actualizada del estudiante"
      ],
      answer: 1,
      explain: "El Plan de Prácticas define los objetivos formativos a alcanzar, el monitoreo y los resultados de aprendizaje; constituye parte integral del contrato de aprendizaje."
    },
    {
      type: "tf",
      prompt: "La Sistematización de las prácticas evidencia el cumplimiento de los resultados de aprendizaje y el desempeño por competencias.",
      answer: true,
      explain: "Verdadero. Es el documento descriptivo y cuantitativo mediante el cual el estudiante evidencia su desempeño en el escenario laboral real."
    },
    {
      type: "match",
      prompt: "Relaciona cada rol con su función principal.",
      pairs: [
        { l: "Monitor", r: "Orientación pedagógica del practicante" },
        { l: "Tutor", r: "Guía del aprendiz en lo productivo" },
        { l: "Docente enlace", r: "Vínculo entre facultad y Oficina de Prácticas" },
        { l: "Asesor técnico", r: "Gestiona aspectos técnicos del proceso en la facultad" }
      ],
      explain: "Cada actor desempeña un rol específico y complementario en el proceso de prácticas del ITM."
    },
    {
      type: "mcq",
      prompt: "¿Qué es la formación dual en el contexto de las prácticas?",
      options: [
        "Estudiar dos carreras al mismo tiempo",
        "Proceso donde la institución y el escenario coforman en esquema de alternancia",
        "Hacer prácticas en dos empresas distintas",
        "Combinar prácticas locales e internacionales"
      ],
      answer: 1,
      explain: "La formación dual es el proceso planeado, ejecutado y evaluado conjuntamente entre el escenario laboral y la institución, en esquema de alternancia."
    }
  ],

  /* ════════════════ MÓDULO 3 — Cap. III ════════════════ */
  3: [
    {
      type: "mcq",
      prompt: "¿Cuál es el objetivo general de las prácticas profesionales ITM?",
      options: [
        "Reemplazar la formación teórica del programa académico",
        "Vincular la academia al sector productivo afianzando competencias",
        "Garantizar empleo formal a todos los egresados del ITM",
        "Sustituir el trabajo de grado por un examen profesional"
      ],
      answer: 1,
      explain: "El objetivo general es vincular la academia al sector productivo afianzando las competencias adquiridas por los estudiantes."
    },
    {
      type: "tf",
      prompt: "La Oficina de Prácticas Profesionales ITM pertenece a la Vicerrectoría de Docencia – Dirección de Gestión Académica.",
      answer: true,
      explain: "Verdadero. Desde allí gestiona, administra, acompaña y evalúa el proceso de prácticas en coordinación con las facultades."
    },
    {
      type: "mcq",
      prompt: "¿Desde qué instancia se asignan los monitores de prácticas?",
      options: [
        "La empresa patrocinadora",
        "La Oficina de Prácticas / Vicerrectoría de Docencia",
        "El estudiante elige su propio monitor",
        "El Ministerio de Trabajo"
      ],
      answer: 1,
      explain: "Los monitores son designados desde la Oficina de Prácticas Profesionales ITM / Vicerrectoría de Docencia."
    },
    {
      type: "tf",
      prompt: "Estimular la cultura de la investigación articulada a las líneas de investigación de la facultad es uno de los objetivos específicos de las prácticas.",
      answer: true,
      explain: "Verdadero. El objetivo específico 4 busca estimular la investigación y la transformación de escenarios mediante la articulación de las prácticas."
    },
    {
      type: "mcq",
      prompt: "¿Cuántos niveles tiene la estructura orgánica de la Oficina de Prácticas Profesionales ITM?",
      options: ["5 niveles", "7 niveles", "9 niveles", "11 niveles"],
      answer: 2,
      explain: "La estructura orgánica consta de 9 niveles: desde la Vicerrectoría de Docencia hasta el Docente enlace de la facultad."
    },
    {
      type: "match",
      prompt: "Relaciona cada instancia con su nivel en la estructura orgánica.",
      pairs: [
        { l: "Vicerrectoría de Docencia", r: "Nivel superior de dirección académica" },
        { l: "Coordinación de Prácticas", r: "Nivel de operación directa" },
        { l: "Auxiliar de atención", r: "Nivel de apoyo al usuario" },
        { l: "Docente enlace", r: "Apoyo de articulación con la facultad" }
      ],
      explain: "Cada nivel cumple una función específica dentro de la estructura orgánica de la Oficina de Prácticas."
    },
    {
      type: "mcq",
      prompt: "La Unidad Administrativa de la Oficina de Prácticas está integrada principalmente por:",
      options: [
        "El Rector y los Decanos de Facultad",
        "El Coordinador de área, Gestión Humana, el Monitor y los auxiliares",
        "El SENA y el Ministerio de Trabajo",
        "Los estudiantes practicantes y sus tutores"
      ],
      answer: 1,
      explain: "La Unidad Administrativa está constituida por el Coordinador de área, Gestión Humana, el Monitor y los auxiliares (atención e innovación)."
    },
    {
      type: "tf",
      prompt: "El CUEE trabaja con principios de credibilidad, confianza y articulación para generar crecimiento socioeconómico en Antioquia.",
      answer: true,
      explain: "Verdadero. El Comité Universidad Empresa Estado opera con esos principios y cuenta con cuatro mesas de trabajo: Talento Humano, Financiación, Plataformas y Emprendimiento."
    }
  ],

  /* ════════════════ MÓDULO 4 — Cap. IV ════════════════ */
  4: [
    {
      type: "mcq",
      prompt: "¿Qué promedio acumulado mínimo se exige para acceder a prácticas internacionales?",
      options: ["3,0", "3,5", "3,8", "4,0"],
      answer: 2,
      explain: "Se requiere un promedio acumulado igual o superior a 3,8, además de no tener procesos disciplinarios activos."
    },
    {
      type: "tf",
      prompt: "Las prácticas sociales requieren afiliación obligatoria a una ARL.",
      answer: true,
      explain: "Verdadero. Las prácticas sociales duran entre 16 y 24 semanas, pueden ser remuneradas o no, y requieren afiliación a ARL sin excepción."
    },
    {
      type: "match",
      prompt: "Relaciona cada modalidad con su rasgo distintivo.",
      pairs: [
        { l: "Prácticas profesionales", r: "Énfasis en aprendizaje y entrenamiento laboral" },
        { l: "Prácticas sociales", r: "ONG, comunidades y organizaciones sin ánimo de lucro" },
        { l: "Prácticas internacionales", r: "En el exterior, con póliza de viaje obligatoria" }
      ],
      explain: "Cada modalidad responde a un perfil, propósito e intereses distintos del estudiante."
    },
    {
      type: "mcq",
      prompt: "Para tecnólogos y profesionales, ¿cuál es la duración máxima de las prácticas internacionales?",
      options: ["3 meses", "6 meses", "9 meses", "12 meses"],
      answer: 1,
      explain: "No puede superar los seis meses de ejecución para tecnólogos y profesionales, salvo actualización del diseño curricular."
    },
    {
      type: "mcq",
      prompt: "¿Cuántos encuentros mínimos garantiza el monitor durante las prácticas profesionales?",
      options: ["Dos encuentros", "Tres encuentros", "Cuatro encuentros", "Seis encuentros"],
      answer: 2,
      explain: "El monitor asegura como mínimo cuatro encuentros definidos en las guías de seguimiento, además de los asociados al Plan de Prácticas."
    },
    {
      type: "tf",
      prompt: "Las prácticas sociales tienen una duración de entre 16 y 24 semanas.",
      answer: true,
      explain: "Verdadero. Pueden ser remuneradas o no remuneradas y requieren afiliación a una ARL en todos los casos."
    },
    {
      type: "mcq",
      prompt: "¿Qué producto puede entregar un estudiante de programa profesional en prácticas profesionales?",
      options: [
        "Solo el registro de asistencia diaria",
        "Plan de Prácticas o propuesta de mejoramiento/optimización/innovación",
        "Únicamente un examen de conocimientos",
        "Un contrato firmado con el SENA"
      ],
      answer: 1,
      explain: "Los programas profesionales entregan el Plan de Prácticas o desarrollan una propuesta de mejoramiento, optimización o innovación en la empresa."
    },
    {
      type: "tf",
      prompt: "Para prácticas internacionales, el pasaporte debe tener mínimo un año de vigencia.",
      answer: true,
      explain: "Verdadero. El manual establece que el pasaporte debe tener mínimo una vigencia de un año al momento de iniciar los trámites de viaje."
    }
  ],

  /* ════════════════ MÓDULO 5 — Cap. V ════════════════ */
  5: [
    {
      type: "order",
      prompt: "Ordena las etapas del proceso integral de prácticas de inicio a fin.",
      steps: [
        "Formación preprácticas y habilitación del estudiante",
        "Inscripción en base de datos de disponibles",
        "Proceso de selección por la empresa o escenario",
        "Solicitud y generación de la carta de inicio",
        "Legalización del contrato o convenio de prácticas",
        "Acompañamiento y seguimiento del monitor",
        "Evaluación final y entrega del Plan de Prácticas",
        "Cierre administrativo y encuesta de satisfacción"
      ],
      explain: "El proceso integral es un flujo continuo: habilitar, inscribir, seleccionar, legalizar, acompañar, evaluar y cerrar."
    },
    {
      type: "mcq",
      prompt: "¿Qué caracteriza al contrato de aprendizaje frente a la vinculación formativa?",
      options: [
        "No genera ninguna obligación de seguridad social para la empresa",
        "Es un contrato laboral especial con seguridad social integral y prestaciones",
        "Solo aplica para prácticas sociales e internacionales",
        "Lo firma únicamente el estudiante sin intervención de la empresa"
      ],
      answer: 1,
      explain: "El contrato de aprendizaje es un contrato laboral especial a término fijo: incluye apoyo de sostenimiento, seguridad social integral y prestaciones."
    },
    {
      type: "tf",
      prompt: "El estudiante puede iniciar oficialmente sus prácticas sin la carta de inicio de la Oficina.",
      answer: false,
      explain: "Falso. Las prácticas solo pueden iniciarse con la carta de inicio expedida por la Oficina, la documentación firmada y la afiliación a seguridad social."
    },
    {
      type: "mcq",
      prompt: "¿Qué instancia atiende las situaciones excepcionales durante las prácticas?",
      options: [
        "El Consejo Académico del ITM",
        "El Comité de Casos Especiales de la Oficina de Prácticas",
        "El SENA directamente",
        "La Vicerrectoría Administrativa"
      ],
      answer: 1,
      explain: "El Comité de Casos Especiales (Coordinador, Monitor y Gestión Humana) define acciones de acompañamiento, ajuste o mejora."
    },
    {
      type: "mcq",
      prompt: "¿Cuál de los siguientes documentos NO se entrega al finalizar la formación preprácticas?",
      options: [
        "Hoja de vida actualizada",
        "Guía de compromiso firmada",
        "Certificado de asistencia a la formación",
        "Contrato de aprendizaje firmado"
      ],
      answer: 3,
      explain: "El contrato de aprendizaje se firma en la etapa de legalización (Momento 2), no al finalizar la formación preprácticas (Momento 1)."
    },
    {
      type: "tf",
      prompt: "La vinculación formativa NO constituye relación laboral entre el practicante y la empresa.",
      answer: true,
      explain: "Verdadero. La vinculación formativa es un acuerdo de voluntades o acto administrativo de carácter formativo; no constituye relación laboral."
    },
    {
      type: "mcq",
      prompt: "¿Cuál es el apoyo de sostenimiento mínimo para aprendices universitarios en contrato de aprendizaje?",
      options: ["El 50% de un SMLMV", "El 75% de un SMLMV", "1 SMLMV completo", "2 SMLMV"],
      answer: 2,
      explain: "Para estudiantes universitarios en contrato de aprendizaje, el apoyo de sostenimiento mínimo es 1 SMLMV, con independencia de la modalidad."
    },
    {
      type: "match",
      prompt: "Relaciona el tipo de contratación con su característica principal.",
      pairs: [
        { l: "Contrato de aprendizaje", r: "Contrato laboral especial — seguridad social integral" },
        { l: "Vinculación formativa", r: "No constituye relación laboral — ARL obligatoria" },
        { l: "Acuerdo de voluntades", r: "Figura tripartita para entidades privadas" },
        { l: "Acto administrativo", r: "Figura unilateral para entidades públicas" }
      ],
      explain: "Cada mecanismo de vinculación tiene un régimen jurídico y unas obligaciones distintas para las partes."
    }
  ],

  /* ════════════════ MÓDULO 6 — Cap. VI ════════════════ */
  6: [
    {
      type: "mcq",
      prompt: "¿Qué ocurre si la empresa patrocinadora no paga la ARL del practicante?",
      options: [
        "Se notifica al SENA sin consecuencias inmediatas",
        "Se cancelan las prácticas y se sanciona a la empresa por un período académico",
        "El practicante debe asumir el costo de la ARL",
        "El monitor paga la ARL con fondos del ITM"
      ],
      answer: 1,
      explain: "Si la empresa no paga la ARL, se cancelan las prácticas y la empresa queda sancionada sin envío de nuevos practicantes por un período académico."
    },
    {
      type: "tf",
      prompt: "El tutor de prácticas es designado por la Oficina de Prácticas Profesionales ITM.",
      answer: false,
      explain: "Falso. El tutor es designado por la empresa patrocinadora o el escenario de prácticas laborales, no por el ITM."
    },
    {
      type: "match",
      prompt: "Relaciona cada parte con uno de sus deberes principales.",
      pairs: [
        { l: "Oficina de Prácticas", r: "Designar el monitor antes de iniciar las prácticas" },
        { l: "Empresa / escenario", r: "Designar un tutor y asumir la ARL (riesgo 3)" },
        { l: "Practicante", r: "No iniciar prácticas sin la carta de inicio" },
        { l: "Monitor", r: "Elaborar y aprobar el Plan de Prácticas con el tutor" }
      ],
      explain: "Cada parte asume deberes específicos que garantizan la calidad y la legalidad del proceso de prácticas."
    },
    {
      type: "mcq",
      prompt: "¿Qué tipo de derechos conserva el practicante sobre sus creaciones durante las prácticas?",
      options: [
        "Ningún derecho, ya que la empresa es la propietaria total",
        "Solo derechos patrimoniales",
        "Los derechos morales sobre sus creaciones",
        "Todos los derechos, tanto morales como patrimoniales"
      ],
      answer: 2,
      explain: "El practicante conserva siempre los derechos morales sobre sus creaciones. Los derechos patrimoniales corresponden al escenario, salvo pacto en contrario."
    },
    {
      type: "tf",
      prompt: "El practicante puede participar simultáneamente en un máximo de tres procesos de selección de empresas.",
      answer: true,
      explain: "Verdadero. El manual permite participar en máximo tres procesos simultáneos; si no consigue empresa, debe reportarlo a la Oficina de Prácticas."
    },
    {
      type: "mcq",
      prompt: "¿Qué consecuencia tiene el plagio comprobado en el informe del Plan de Prácticas?",
      options: [
        "Se le aplica una amonestación verbal",
        "La modalidad de grado se califica como reprobada",
        "Se repite el módulo sin consecuencias académicas",
        "El monitor corrige el trabajo y se vuelve a presentar"
      ],
      answer: 1,
      explain: "En caso de plagio comprobado, la modalidad de grado se califica como reprobada y el estudiante debe optar por otra modalidad de grado."
    },
    {
      type: "mcq",
      prompt: "La terminación anticipada del contrato o convenio procede solo cuando hay oferta laboral formal y un avance de prácticas del:",
      options: ["50%", "60%", "70%", "80%"],
      answer: 3,
      explain: "La terminación anticipada procede únicamente con oferta laboral formal y un avance mínimo del 80% de las prácticas."
    },
    {
      type: "tf",
      prompt: "En la vinculación formativa, la empresa debe asumir el pago de la ARL por riesgo 3 del practicante.",
      answer: true,
      explain: "Verdadero. Al encontrarse el estudiante en etapa productiva y expuesto a riesgos, la empresa debe asumir la ARL por riesgo 3 desde la vinculación."
    }
  ],

  /* ════════════════ MÓDULO 7 — Cap. VII ════════════════ */
  7: [
    {
      type: "mcq",
      prompt: "¿Cuántas reuniones semestrales se programan con cada facultad para asegurar la coordinación?",
      options: ["Una reunión", "Dos reuniones", "Tres reuniones", "Cuatro reuniones"],
      answer: 1,
      explain: "El proceso de articulación contempla DOS reuniones semestrales con cada facultad para asegurar la coordinación y el progreso continuo."
    },
    {
      type: "tf",
      prompt: "El docente enlace de la facultad está presente en todas las facultades del ITM.",
      answer: false,
      explain: "Falso. Esta figura no está en todas las facultades; el manual señala que está específicamente en la Facultad de Ciencias Exactas y Aplicadas y la de Artes y Humanidades."
    },
    {
      type: "mcq",
      prompt: "¿Qué figura adicional apoya el proceso de articulación con monitores en algunas facultades?",
      options: [
        "El rector del ITM",
        "El docente enlace designado por el Comité Curricular",
        "El Ministerio de Educación",
        "El representante de bienestar universitario"
      ],
      answer: 1,
      explain: "El docente enlace, designado por el Comité Curricular de la facultad, sirve de vínculo entre la Oficina de Prácticas y la facultad."
    },
    {
      type: "tf",
      prompt: "La Oficina de Prácticas define indicadores con base en encuestas e insumos de las facultades.",
      answer: true,
      explain: "Verdadero. Se definen y recopilan indicadores de prácticas mediante el análisis de encuestas e insumos relevantes para planes de mejoramiento conjuntos."
    },
    {
      type: "mcq",
      prompt: "¿Qué analiza la Oficina de Prácticas en la etapa de 'análisis y calificación final'?",
      options: [
        "Solo las notas de las materias del semestre",
        "Contenidos, recomendaciones y calificaciones finales (F082) de los trabajos",
        "Los estados financieros de las empresas patrocinadoras",
        "Los registros de asistencia de los practicantes"
      ],
      answer: 1,
      explain: "En esta etapa se analizan los contenidos, las recomendaciones y la calificación final (F082) de los trabajos de Plan de Prácticas."
    },
    {
      type: "match",
      prompt: "Relaciona cada etapa de articulación con su descripción.",
      pairs: [
        { l: "Normativa y alineación", r: "Revisión y ajuste de la reglamentación por facultad" },
        { l: "Capacitación y lineamientos", r: "Formación sobre normativa y roles del monitor" },
        { l: "Indicadores y planes", r: "Análisis de encuestas para planes de mejora" },
        { l: "Talleres y retroalimentación", r: "Actividades formativas para estudiantes y docentes" }
      ],
      explain: "Cada etapa de articulación tiene una finalidad específica dentro del proceso de coordinación con las facultades."
    },
    {
      type: "mcq",
      prompt: "¿Cuál es el propósito principal de la articulación entre la Oficina de Prácticas y las facultades?",
      options: [
        "Reemplazar la función de las empresas patrocinadoras",
        "Garantizar la formación integral y el cumplimiento de normativas vigentes",
        "Reducir el número de practicantes por semestre",
        "Eliminar la figura del monitor del proceso"
      ],
      answer: 1,
      explain: "La articulación busca establecer un proceso coordinado y sinérgico que garantice la formación integral y el cumplimiento normativo."
    },
    {
      type: "tf",
      prompt: "Los talleres y capacitaciones de la articulación están dirigidos únicamente a los estudiantes.",
      answer: false,
      explain: "Falso. Los talleres y capacitaciones están dirigidos tanto a estudiantes como a docentes; también se ofrece retroalimentación sobre planes de mejoramiento."
    }
  ],

  /* ════════════════ MÓDULO 8 — Cap. VIII ════════════════ */
  8: [
    {
      type: "mcq",
      prompt: "Según el Decreto 223 de 2026, ¿cuál es la edad mínima para las prácticas laborales?",
      options: ["14 años", "15 años", "16 años", "18 años"],
      answer: 1,
      explain: "La edad mínima es de 15 años. Los adolescentes de 15 a 18 años requieren autorización del inspector de trabajo o del ente territorial local."
    },
    {
      type: "tf",
      prompt: "Comprobar plagio en el Plan de Prácticas hace que la modalidad de grado sea calificada como reprobada.",
      answer: true,
      explain: "Verdadero. En caso de plagio comprobado, la modalidad se califica como reprobada y el estudiante debe acudir a su facultad para optar por otra modalidad."
    },
    {
      type: "mcq",
      prompt: "La terminación anticipada del convenio o contrato solo procede cuando el avance de prácticas es del:",
      options: ["50%", "60%", "70%", "80%"],
      answer: 3,
      explain: "Procede únicamente con oferta laboral formal por parte de la empresa y un avance mínimo del 80% de las prácticas."
    },
    {
      type: "mcq",
      prompt: "¿Cuál es la jornada máxima para un practicante adolescente de 15 a 17 años?",
      options: [
        "4 horas diarias y 20 semanales",
        "6 horas diarias y 30 semanales",
        "8 horas diarias y 40 semanales",
        "10 horas diarias y 50 semanales"
      ],
      answer: 1,
      explain: "Para adolescentes de 15 a 17 años: máximo 6 horas diarias y 30 semanales, y hasta las 6:00 p. m. (artículo 2.2.6.3.1.5, Decreto 223/2026)."
    },
    {
      type: "tf",
      prompt: "Si el practicante renuncia a las prácticas sin informar a la institución, el tiempo cursado no es reconocido.",
      answer: true,
      explain: "Verdadero. El abandono o renuncia sin informar a la institución hace que el tiempo cursado no sea tenido en cuenta para cumplir el requisito de grado."
    },
    {
      type: "match",
      prompt: "Relaciona cada situación con su consecuencia reglamentaria.",
      pairs: [
        { l: "Plagio en el Plan de Prácticas", r: "Modalidad de grado reprobada" },
        { l: "Inicio sin carta de inicio", r: "Prácticas no reconocidas" },
        { l: "Empresa no paga ARL", r: "Cancelación de prácticas y sanción a la empresa" },
        { l: "Renuncia sin avisar", r: "Tiempo cursado no reconocido" }
      ],
      explain: "El reglamento establece consecuencias claras y proporcionales para cada tipo de incumplimiento."
    },
    {
      type: "mcq",
      prompt: "Para gestionar un segundo contrato de aprendizaje SENA, el estudiante debe presentar entre otros documentos:",
      options: [
        "Solo el carné universitario vigente",
        "Diploma de la primera formación y carta de la empresa del primer contrato",
        "Únicamente el pénsum del programa actual",
        "El contrato de trabajo de la empresa patrocinadora anterior"
      ],
      answer: 1,
      explain: "Debe presentar diploma o acta de grado de la primera formación, certificado de matrícula, carta de terminación del primer contrato y pénsum coherente."
    },
    {
      type: "tf",
      prompt: "Una empresa puede contratar como aprendiz a una persona que ya estuvo vinculada laboralmente a ella.",
      answer: false,
      explain: "Falso. Las empresas patrocinadoras no pueden contratar en la modalidad de aprendices a personas que hayan estado o estén vinculadas laboralmente a ellas."
    }
  ],

  /* ════════════════ MÓDULO 9 — Cap. IX ════════════════ */
  9: [
    {
      type: "mcq",
      prompt: "¿Cuáles de estas disposiciones son de aplicación inmediata a TODOS los contratos vigentes?",
      options: [
        "Solo las normas de duración de las prácticas",
        "Estabilidad laboral reforzada, libertad sindical y participación en COPASST",
        "Únicamente las normas de jornada laboral para mayores de edad",
        "Las reglas del segundo contrato de aprendizaje"
      ],
      answer: 1,
      explain: "Por ser normas de orden público son de aplicación inmediata: estabilidad laboral reforzada, libertad sindical, COPASST, derechos de autor y jornada para adolescentes."
    },
    {
      type: "tf",
      prompt: "Los estudiantes que ya están en etapa de ejecución de sus prácticas deben reiniciar el proceso con el nuevo manual.",
      answer: false,
      explain: "Falso. Quienes ya están en etapa de vinculación o ejecución se rigen por el manual o reglamento vigente al momento de su vinculación, salvo que las nuevas disposiciones sean más favorables."
    },
    {
      type: "mcq",
      prompt: "¿Cuántos días calendario tienen las empresas para adecuar sus procesos internos al nuevo manual?",
      options: ["30 días", "45 días", "60 días", "90 días"],
      answer: 2,
      explain: "Las empresas con convenios vigentes tienen 60 días calendario desde la entrada en vigor del manual para adecuar sus procesos internos."
    },
    {
      type: "match",
      prompt: "Relaciona cada disposición transitoria con su efecto.",
      pairs: [
        { l: "Contratos anteriores al Decreto 223/2026", r: "Se rigen por condiciones pactadas hasta su fin" },
        { l: "Estudiantes con preprácticas completas", r: "No deben repetir la formación preprácticas" },
        { l: "Plazo de 60 días para empresas", r: "Adecuación a Ley 2365/2024 y reporte de plazas" },
        { l: "Normas de orden público", r: "Aplicación inmediata a todos los contratos" }
      ],
      explain: "Cada disposición transitoria tiene un ámbito de aplicación y efecto específico para garantizar la transición ordenada."
    },
    {
      type: "tf",
      prompt: "Los estudiantes que ya completaron la formación preprácticas con el esquema anterior deben repetirla obligatoriamente.",
      answer: false,
      explain: "Falso. No deben repetirla. Deben acreditar su cumplimiento mediante una constancia expedida por la Oficina de Prácticas Profesionales ITM."
    },
    {
      type: "mcq",
      prompt: "¿Qué determina la entrada en vigor del Manual de Prácticas Profesionales ITM?",
      options: [
        "La publicación en el Diario Oficial de Colombia",
        "La aprobación mediante acto administrativo de la Vicerrectoría de Docencia",
        "La firma del rector del ITM en el documento",
        "La publicación en la página web del ITM"
      ],
      answer: 1,
      explain: "El manual entra en vigor a partir de su aprobación mediante acto administrativo expedido por la Vicerrectoría de Docencia."
    },
    {
      type: "tf",
      prompt: "La Ley 2365 de 2024 sobre prevención del acoso sexual en las prácticas es de aplicación inmediata para las empresas.",
      answer: true,
      explain: "Verdadero. Esta ley es una de las prioridades en el plazo de adecuación de 60 días que tienen las empresas con convenios vigentes."
    },
    {
      type: "mcq",
      prompt: "¿Qué ocurre con los convenios vigentes entre el ITM y las empresas cuando entra en vigor el nuevo manual?",
      options: [
        "Se cancelan automáticamente todos los convenios anteriores",
        "Continúan vigentes, pero las empresas tienen 60 días para adecuar sus procesos",
        "Deben renegociarse en su totalidad desde cero",
        "Quedan congelados hasta que el SENA los revise"
      ],
      answer: 1,
      explain: "Los convenios continúan vigentes; las empresas tienen 60 días para adecuarse especialmente en materia de Ley 2365/2024 y reporte al Servicio Público de Empleo."
    }
  ]
};
