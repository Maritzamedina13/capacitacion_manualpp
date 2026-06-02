/* ============================================================
   CONTENIDO OVA — 6 módulos del Manual de Prácticas ITM
   Fuente: MDE 001 Manual de Prácticas Profesionales ITM V5
   Expone window.ITM_MODULES
   ============================================================ */
window.ITM_MODULES = [
  /* ============== MÓDULO 1 ============== */
  {
    id: 1,
    cap: "Introducción · Capítulo I",
    faculty: "Facultad de Artes y Humanidades",
    title: "Fundamentos de las Prácticas",
    subtitle: "Qué son, por qué existen y cómo se alinean con el PEI",
    icon: "compass",
    colors: { c1: "#1F6FB2", c2: "#4DA6E0", c3: "#7FC4ED", soft: "#e8f3fc" },
    badge: { name: "Cimientos", tag: "Guardián de los Fundamentos", icon: "compass" },
    objective: "Comprender la naturaleza de las prácticas profesionales ITM, su propósito formativo y su alineación con el Proyecto Educativo Institucional (PEI).",
    learn: [
      "Definir qué son las prácticas profesionales como experiencia académica, laboral y profesional.",
      "Reconocer su vínculo con el PEI y la formación integral.",
      "Identificar los valores institucionales y el marco normativo vigente."
    ],
    content: [
      {
        title: "¿Qué son las prácticas profesionales?",
        lead: "Son una experiencia académica, laboral y profesional que permite a los estudiantes integrar y aplicar los conocimientos adquiridos durante su formación en contextos reales de su profesión.",
        points: [
          { h: "Doble desarrollo", t: "Fortalecen competencias técnicas y humanas a la vez." },
          { h: "Mundo real", t: "Vinculan al estudiante con la dinámica empresarial y el sector productivo." },
          { h: "Habilidades clave", t: "Promueven liderazgo, trabajo en equipo, ética y creatividad." }
        ],
        note: "También aportan al bienestar: amplían el campo relacional del estudiante y abren la puerta a su primera experiencia laboral."
      },
      {
        title: "Alineación con el PEI",
        lead: "El Manual se concibe como una extensión natural del Proyecto Educativo Institucional. Las prácticas se desarrollan en coherencia con el PEI, específicamente con los factores 5 y 7.",
        points: [
          { h: "Identidad institucional", t: "El PEI representa la identidad del ITM, construida con la comunidad educativa." },
          { h: "Visión formativa", t: "Integrar y aplicar conocimientos es parte de la visión formativa del ITM." }
        ]
      },
      {
        title: "Formación integral y competencias",
        lead: "El ITM forma a los estudiantes no solo como profesionales competentes, sino como seres humanos comprometidos con la sociedad y con sentido cívico.",
        points: [
          { h: "Enfoque por competencias", t: "La concepción pedagógica del PEI se basa en la formación integral." },
          { h: "Academia y sector productivo", t: "Se busca un trabajo recíproco con el sector para facilitar el aprendizaje." },
          { h: "Proyección social", t: "Las prácticas sociales aplican el conocimiento en comunidades y organizaciones sin ánimo de lucro." }
        ]
      },
      {
        title: "Valores institucionales",
        lead: "El Manual promueve los principios y valores adoptados por el ITM en su PEI.",
        points: [
          { h: "Convivencia y respeto", t: "Cohesión social, dignidad, equidad e igualdad." },
          { h: "Excelencia e inclusión", t: "Honestidad, liderazgo y responsabilidad." },
          { h: "Diversidad y vida", t: "Libertad, paz y formación integral." }
        ],
        note: "El ITM forma talento humano capaz de inscribirse en procesos de transformación tecnológica y social."
      },
      {
        title: "Marco normativo vigente",
        lead: "El Manual está ajustado a los requerimientos legales que regulan la relación de aprendizaje en Colombia.",
        points: [
          { h: "Decreto 223 de 2026", t: "Unifica y reglamenta las prácticas laborales y el contrato de aprendizaje." },
          { h: "Ley 2466 de 2025", t: "Reforma Laboral: redefine el contrato de aprendizaje como contrato laboral especial." },
          { h: "Ley 2043 de 2020", t: "Reconoce las prácticas como experiencia profesional y obliga a certificarlas." },
          { h: "Ley 2365 de 2024", t: "Prevención y atención del acoso sexual en las prácticas laborales." }
        ]
      }
    ]
  },

  /* ============== MÓDULO 2 ============== */
  {
    id: 2,
    cap: "Capítulo II",
    faculty: "Facultad de Ingenierías",
    title: "El Lenguaje de las Prácticas",
    subtitle: "Acrónimos, definiciones y conceptos clave",
    icon: "book",
    colors: { c1: "#102D69", c2: "#00A0B7", c3: "#56ACDE", soft: "#e9eef8" },
    badge: { name: "Descifrador", tag: "Maestro del Lenguaje", icon: "book" },
    objective: "Dominar los acrónimos, roles y definiciones esenciales para comprender con precisión el proceso de prácticas del ITM.",
    learn: [
      "Reconocer los acrónimos institucionales y legales del proceso.",
      "Distinguir los roles: monitor, tutor, asesor técnico y docente enlace.",
      "Diferenciar empresa patrocinadora de escenario de prácticas laborales."
    ],
    content: [
      {
        title: "Acrónimos esenciales",
        lead: "Estas siglas aparecen a lo largo de todo el proceso. Conocerlas es el primer paso.",
        points: [
          { h: "ARL · EPS", t: "Administradora de Riesgos Laborales · Entidad Promotora de Salud." },
          { h: "SENA · SGVA", t: "Servicio Nacional de Aprendizaje · Sistema de Gestión de Vacantes y Aprendizaje." },
          { h: "SG-SST · COPASST", t: "Sistema de Gestión de Seguridad y Salud en el Trabajo · Comité Paritario." },
          { h: "PEI · CUEE · CST", t: "Proyecto Educativo Institucional · Comité Universidad Empresa Estado · Código Sustantivo del Trabajo." }
        ]
      },
      {
        title: "Monitor vs. Tutor",
        lead: "Dos figuras de acompañamiento que trabajan en conjunto, pero desde lados distintos.",
        points: [
          { h: "Monitor (institución)", t: "Designado por el ITM. Lidera la orientación pedagógica y articula lo académico con la experiencia productiva." },
          { h: "Tutor (empresa)", t: "Trabajador de la empresa o escenario. Por su experiencia guía y acompaña las tareas del aprendiz." },
          { h: "En conjunto", t: "El tutor lidera lo productivo; el monitor, lo pedagógico. Juntos construyen las competencias del estudiante." }
        ]
      },
      {
        title: "Otros roles de apoyo",
        lead: "Figuras que fortalecen la articulación entre la facultad y la Oficina de Prácticas.",
        points: [
          { h: "Asesor técnico", t: "Docente de la facultad que gestiona los aspectos técnicos del proceso (no está en todas las facultades)." },
          { h: "Docente enlace", t: "Vínculo entre la Oficina de Prácticas y la facultad; designado por cada facultad." },
          { h: "Coordinador de prácticas", t: "Responsable de la gestión, seguimiento y evaluación de las prácticas en la institución." }
        ]
      },
      {
        title: "Empresa patrocinadora vs. Escenario de prácticas",
        lead: "Una distinción fundamental: la misma entidad puede tener ambas denominaciones según el mecanismo contractual que use.",
        points: [
          { h: "Empresa patrocinadora", t: "Celebra un CONTRATO DE APRENDIZAJE con el estudiante (vínculo laboral especial)." },
          { h: "Escenario de prácticas laborales", t: "Recibe al practicante mediante VINCULACIÓN FORMATIVA (no constituye relación laboral)." },
          { h: "Regla práctica", t: "Si firma contrato de aprendizaje SENA → patrocinadora. Si firma convenio formativo → escenario de prácticas." }
        ]
      },
      {
        title: "Documentos y conceptos formativos",
        lead: "El proceso se apoya en instrumentos y modalidades de aprendizaje definidos.",
        points: [
          { h: "Plan de Prácticas", t: "Documento que define objetivos formativos; es parte integral del contrato de aprendizaje." },
          { h: "Sistematización", t: "Evidencia el cumplimiento de los resultados de aprendizaje y el desempeño por competencias." },
          { h: "Formación dual y alternancia", t: "Combinan teoría y práctica intercaladas (fase lectiva y fase práctica)." },
          { h: "Prácticas guiadas / autónomas", t: "Guiadas: supervisión permanente. Autónomas: supervisión periódica." }
        ]
      }
    ]
  },

  /* ============== MÓDULO 3 ============== */
  {
    id: 3,
    cap: "Capítulo III",
    faculty: "Facultad de Ciencias Exactas y Aplicadas",
    title: "Objetivos y Estructura",
    subtitle: "Para qué sirven las prácticas y quién las gestiona",
    icon: "target",
    colors: { c1: "#009030", c2: "#7AAE10", c3: "#98BF13", soft: "#ecf5e3" },
    badge: { name: "Estratega", tag: "Arquitecto de Objetivos", icon: "target" },
    objective: "Conocer los objetivos de las prácticas profesionales y la estructura orgánica de la Oficina de Prácticas Profesionales ITM.",
    learn: [
      "Identificar el objetivo general y los objetivos específicos.",
      "Comprender el rol de dirección y coordinación de la Oficina.",
      "Reconocer la estructura orgánica y la unidad administrativa."
    ],
    content: [
      {
        title: "Definición como modalidad de grado",
        lead: "Las prácticas profesionales son una modalidad de grado: una experiencia para que los estudiantes integren y apliquen sus conocimientos en contextos específicos de su profesión.",
        note: "A través de esta modalidad desarrollan competencias técnicas y humanas y fortalecen su vínculo con el sector productivo."
      },
      {
        title: "Objetivo general",
        lead: "Vincular la academia al sector productivo afianzando las competencias adquiridas por los estudiantes.",
        points: [
          { h: "Aplicación", t: "Aplicar conocimientos en una unidad productiva real." },
          { h: "Modalidades", t: "A través de prácticas profesionales, sociales o internacionales." },
          { h: "Proyección", t: "Generar espacios de proyección social, participación laboral y vinculación institucional." }
        ]
      },
      {
        title: "Objetivos específicos",
        lead: "Cinco propósitos concretos guían el proceso.",
        points: [
          { h: "Acercamiento", t: "Promover el vínculo universidad–empresa mediante convenios." },
          { h: "Competencias", t: "Facilitar el desarrollo de competencias técnicas y humanas." },
          { h: "Fortalecer programas", t: "Conectar la formación académica con el medio empresarial." },
          { h: "Investigación y proyección", t: "Estimular la investigación y abordar problemáticas sociales." }
        ]
      },
      {
        title: "Dirección y coordinación",
        lead: "La Oficina de Prácticas Profesionales ITM pertenece a la Vicerrectoría de Docencia – Dirección de Gestión Académica.",
        points: [
          { h: "Gestiona", t: "Define rutas, relaciona y gestiona convenios." },
          { h: "Administra", t: "Asigna monitores y hace seguimiento a estudiantes y empresas." },
          { h: "Acompaña y evalúa", t: "En sinergia constante con las facultades." }
        ]
      },
      {
        title: "Estructura orgánica",
        lead: "El proceso se organiza en niveles e instancias articuladas.",
        points: [
          { h: "Dirección académica", t: "Vicerrectoría de Docencia, Consejo de Facultad, Comité Curricular y de Modalidad de Grado." },
          { h: "Operación", t: "Coordinación de Prácticas y Monitores de prácticas." },
          { h: "Apoyo", t: "Auxiliar de atención, Auxiliar de innovación y tecnología, y Docente enlace." }
        ],
        note: "La Unidad Administrativa la integran el Coordinador de área, Gestión Humana, el Monitor y los auxiliares."
      }
    ]
  },

  /* ============== MÓDULO 4 ============== */
  {
    id: 4,
    cap: "Capítulo IV",
    faculty: "Facultad de Ciencias Económicas y Administrativas",
    title: "Modalidades de Práctica",
    subtitle: "Profesionales, sociales e internacionales",
    icon: "route",
    colors: { c1: "#E08600", c2: "#F19800", c3: "#F6B63E", soft: "#fdf1de" },
    badge: { name: "Explorador", tag: "Explorador de Modalidades", icon: "route" },
    objective: "Distinguir las tres modalidades de práctica, sus duraciones, requisitos y productos esperados.",
    learn: [
      "Caracterizar las prácticas profesionales, sociales e internacionales.",
      "Identificar requisitos y productos esperados de cada una.",
      "Reconocer las condiciones especiales de las prácticas en el exterior."
    ],
    content: [
      {
        title: "Prácticas profesionales",
        lead: "El estudiante aplica los conocimientos teóricos y prácticos de su formación, con énfasis en el aprendizaje y entrenamiento laboral.",
        points: [
          { h: "Duración", t: "Depende del registro de cada programa ante el Ministerio de Trabajo y el SENA (y del diseño curricular)." },
          { h: "Producto", t: "Entrega del Plan de Prácticas; en profesionales, puede ser una propuesta de mejora o innovación." },
          { h: "Acompañamiento", t: "El monitor asegura como mínimo cuatro encuentros (presenciales o virtuales)." }
        ]
      },
      {
        title: "Prácticas sociales",
        lead: "Vinculan al estudiante con organizaciones sin ánimo de lucro, comunidades y entidades de desarrollo para atender necesidades reales.",
        points: [
          { h: "Duración", t: "Entre 16 y 24 semanas. Pueden ser remuneradas o no." },
          { h: "Seguridad", t: "Requieren afiliación a una ARL." },
          { h: "Propósito", t: "Fortalecen la formación humana y el compromiso social del estudiante." }
        ]
      },
      {
        title: "Prácticas internacionales",
        lead: "El estudiante realiza su práctica en el exterior para adquirir experiencia global y habilidades interculturales.",
        points: [
          { h: "Promedio", t: "Requiere promedio acumulado igual o superior a 3,8 y no tener procesos disciplinarios." },
          { h: "Duración", t: "Mínimo 16 semanas; para tecnólogos y profesionales no puede superar los 6 meses." },
          { h: "Trámites", t: "El estudiante gestiona visa, permisos y migración; la institución no se responsabiliza de estos trámites." },
          { h: "Póliza", t: "Sin excepción, debe contar con póliza de viaje que cubra accidentes, enfermedad y repatriación." }
        ]
      },
      {
        title: "Requisitos comunes",
        lead: "Las tres modalidades comparten condiciones de base.",
        points: [
          { h: "Matrícula", t: "Estar matriculado en la institución durante la vigencia de las prácticas." },
          { h: "Exigencias académicas", t: "Cumplir lo establecido por cada facultad para la modalidad de grado." },
          { h: "Preprácticas", t: "Completar la formación preprácticas definida en el Capítulo V." },
          { h: "Aceptación", t: "Haber sido aceptado por una empresa o escenario con funciones acordes al perfil." }
        ]
      }
    ]
  },

  /* ============== MÓDULO 5 ============== */
  {
    id: 5,
    cap: "Capítulo V",
    faculty: "Facultad de Ingenierías",
    title: "El Proceso Integral",
    subtitle: "Del primer paso al cierre administrativo",
    icon: "flow",
    colors: { c1: "#0090A6", c2: "#00A0B7", c3: "#56ACDE", soft: "#e2f4f7" },
    badge: { name: "Navegante", tag: "Navegante del Proceso", icon: "flow" },
    objective: "Recorrer el flujo completo de las prácticas: habilitación, vinculación, legalización, acompañamiento y cierre.",
    learn: [
      "Ordenar los tres momentos secuenciales del proceso.",
      "Distinguir contrato de aprendizaje de vinculación formativa.",
      "Reconocer el acompañamiento, la evaluación y el cierre administrativo."
    ],
    content: [
      {
        title: "Tres momentos del proceso",
        lead: "El proceso integral es un único flujo continuo, compuesto por tres momentos secuenciales e interdependientes.",
        points: [
          { h: "1 · Habilitación", t: "Formación preprácticas para preparar y habilitar al estudiante." },
          { h: "2 · Vinculación y desarrollo", t: "Selección, legalización y ejecución de las prácticas." },
          { h: "3 · Evaluación y cierre", t: "Plan de Prácticas, evaluación final y cierre administrativo." }
        ]
      },
      {
        title: "Habilitación · Formación preprácticas",
        lead: "El proceso inicia preparando al estudiante. Debe inscribirse por los canales institucionales y cumplir requisitos académicos.",
        points: [
          { h: "Durante", t: "Asistir a las sesiones, presentar la prueba de tendencia profesional y perfilar la hoja de vida." },
          { h: "Al finalizar entrega", t: "Hoja de vida actualizada, guía de compromiso firmada y certificado de asistencia." },
          { h: "Resultado", t: "Queda registrado en la base de datos de disponibles para prácticas." }
        ]
      },
      {
        title: "Vinculación y carta de inicio",
        lead: "Con la habilitación completa, el estudiante aplica a procesos de selección de empresas o escenarios.",
        points: [
          { h: "Selección", t: "La empresa solicita la base de datos, revisa hojas de vida y selecciona." },
          { h: "Carta de inicio", t: "Se diligencia con el perfil, las funciones y el tipo de contratación." },
          { h: "Validación", t: "El monitor, docente enlace o asesor técnico aprueba o rechaza las funciones." }
        ]
      },
      {
        title: "Legalización: dos caminos",
        lead: "La diferencia clave está en el tipo de vínculo jurídico que se celebra.",
        points: [
          { h: "Contrato de aprendizaje", t: "Contrato laboral especial. Apoyo de sostenimiento (mín. 1 SMLMV universitarios), seguridad social integral y prestaciones." },
          { h: "Vinculación formativa", t: "Acuerdo de voluntades o acto administrativo. No es relación laboral; auxilio voluntario y ARL." },
          { h: "Inicio oficial", t: "Con carta de inicio, documentación firmada y afiliación a seguridad social." }
        ]
      },
      {
        title: "Acompañamiento, evaluación y cierre",
        lead: "Durante y al final, el monitor lidera el seguimiento del estudiante.",
        points: [
          { h: "Seguimiento", t: "Verificación de documentos, visitas, cronograma y aprobación del Plan de Prácticas." },
          { h: "Evaluación final", t: "La empresa emite concepto; el monitor realiza la evaluación final." },
          { h: "Cierre", t: "Encuesta de satisfacción y cierre administrativo que garantiza la trazabilidad." }
        ],
        note: "Las situaciones excepcionales las atiende el Comité de Casos Especiales de la Oficina de Prácticas."
      }
    ]
  },

  /* ============== MÓDULO 6 ============== */
  {
    id: 6,
    cap: "Capítulos VI – IX",
    faculty: "Facultad de Artes y Humanidades",
    title: "Deberes, Derechos y Reglamento",
    subtitle: "Las reglas del juego para todas las partes",
    icon: "scale",
    colors: { c1: "#3858A8", c2: "#5B8DD6", c3: "#87B4E8", soft: "#eaf0fb" },
    badge: { name: "Defensor", tag: "Defensor de Derechos y Deberes", icon: "scale" },
    objective: "Conocer los deberes, derechos y acciones correctivas de las partes, la articulación con las facultades y las reglas clave.",
    learn: [
      "Identificar deberes de la Oficina, la empresa y el practicante.",
      "Reconocer los derechos del practicante y las acciones correctivas.",
      "Aplicar las generalidades reglamentarias más importantes."
    ],
    content: [
      {
        title: "Deberes de la Oficina de Prácticas",
        lead: "Actúa como veedor del cumplimiento de deberes y derechos y garante de la calidad de la modalidad.",
        points: [
          { h: "Designar monitor", t: "Antes de la actividad formativa, y notificar cambios de monitor." },
          { h: "Confidencialidad", t: "Mantener estricta reserva sobre la información conocida en el proceso." },
          { h: "Protocolo de acoso", t: "Contar con protocolo de atención conforme a la Ley 2365 de 2024." },
          { h: "Certificar", t: "Certificar la experiencia adquirida una vez cumplidos los requisitos." }
        ]
      },
      {
        title: "Deberes de la empresa / escenario",
        lead: "Cumplen un rol formativo clave ofreciendo un entorno profesional adecuado.",
        points: [
          { h: "Tutor", t: "Designar un tutor que lidere, evalúe y oriente al estudiante." },
          { h: "Seguridad social", t: "Gestionar afiliación según la modalidad; asumir la ARL (riesgo 3) en vinculación formativa." },
          { h: "Apoyo de sostenimiento", t: "En contrato de aprendizaje universitario: mínimo 1 SMLMV." },
          { h: "Inducción", t: "Realizar inducción y entregar copia del reglamento interno de trabajo." }
        ]
      },
      {
        title: "Deberes del practicante",
        lead: "Complementa su formación aplicando conocimientos con responsabilidad y ética.",
        points: [
          { h: "Transparencia", t: "Máximo tres procesos de selección simultáneos; evitar la doble aceptación." },
          { h: "Una sola modalidad", t: "No incurrir en doble modalidad de grado (causa de retiro)." },
          { h: "Carta de inicio", t: "No iniciar prácticas sin la carta de autorización de la Oficina." },
          { h: "Entregables", t: "Entregar el Plan de Prácticas y la sistematización en los plazos definidos." }
        ]
      },
      {
        title: "Derechos del practicante",
        lead: "El estudiante cuenta con garantías a lo largo del proceso.",
        points: [
          { h: "Acompañamiento", t: "Monitor asignado, asesoría programada y formación preparatoria." },
          { h: "Protección", t: "Acompañamiento jurídico y psicológico en casos de violencia basada en género." },
          { h: "Garantías laborales", t: "Estabilidad laboral reforzada y libertad sindical (en contrato de aprendizaje)." },
          { h: "Derechos de autor", t: "Conserva los derechos morales sobre sus creaciones durante las prácticas." }
        ]
      },
      {
        title: "Reglas clave y acciones correctivas",
        lead: "Generalidades reglamentarias que conviene tener siempre presentes.",
        points: [
          { h: "Edad mínima", t: "15 años; jornadas restringidas para adolescentes de 15 a 17 años." },
          { h: "Terminación anticipada", t: "Solo con oferta laboral formal y un avance de prácticas del 80%." },
          { h: "Pago de ARL", t: "Si la empresa no paga la ARL, se cancelan las prácticas y se sanciona." },
          { h: "Plagio", t: "El plagio en el Plan de Prácticas se califica como modalidad reprobada." }
        ],
        note: "La articulación con las facultades incluye dos reuniones semestrales para asegurar coordinación y seguimiento."
      }
    ]
  }
];
