/* ============================================================
   CONTENIDO OVA — 9 módulos del Manual de Prácticas ITM
   Fuente: MDE 001 Manual de Prácticas Profesionales ITM V5
   Expone window.ITM_MODULES
   ============================================================ */
window.ITM_MODULES = [

  /* ============== MÓDULO 1 — Capítulo I ============== */
  {
    id: 1,
    cap: "Capítulo I",
    faculty: "Disposiciones Generales",
    title: "Fundamentos de las Prácticas",
    subtitle: "Qué son, para qué sirven y cómo se alinean con el PEI",
    icon: "compass",
    colors: { c1: "#1F6FB2", c2: "#4DA6E0", c3: "#7FC4ED", soft: "#e8f3fc" },
    badge: { name: "Cimientos", tag: "Guardián de los Fundamentos", icon: "compass" },
    objective: "Comprender la naturaleza de las prácticas profesionales ITM, su propósito formativo y su alineación con el Proyecto Educativo Institucional (PEI).",
    learn: [
      "Definir las prácticas como experiencia académica, laboral y profesional.",
      "Reconocer su vínculo con los factores 5 y 7 del PEI.",
      "Identificar los valores institucionales que las prácticas promueven.",
      "Conocer el marco normativo que las sustenta."
    ],
    content: [
      {
        title: "¿Qué son las prácticas profesionales?",
        lead: "Las prácticas profesionales constituyen una experiencia académica, laboral y profesional que permite a los estudiantes integrar y aplicar los conocimientos adquiridos durante su formación en contextos específicos de su profesión.",
        points: [
          { h: "Doble desarrollo", t: "Desarrollan competencias técnicas y humanas simultáneamente." },
          { h: "Mundo real", t: "Vinculan al estudiante con la dinámica empresarial y el sector productivo." },
          { h: "Habilidades clave", t: "Promueven liderazgo, trabajo en equipo, ética y creatividad." },
          { h: "Bienestar", t: "Amplían el campo relacional del estudiante y abren la puerta a su primera experiencia laboral." }
        ]
      },
      {
        title: "Alineación con el PEI",
        lead: "El Manual de Prácticas se concibe como una extensión natural del Proyecto Educativo Institucional. Las prácticas se desarrollan en coherencia con el PEI, específicamente con los factores 5 y 7.",
        points: [
          { h: "Factor 5", t: "Relaciona la formación académica con el sector productivo y facilita las experiencias de aprendizaje." },
          { h: "Factor 7", t: "Promueve la proyección social e institucional hacia el entorno nacional e internacional." },
          { h: "Identidad institucional", t: "El PEI representa la identidad del ITM, construida con participación de la comunidad educativa." }
        ]
      },
      {
        title: "Formación integral y desarrollo de competencias",
        lead: "El ITM forma a los estudiantes no solo como profesionales competentes, sino como seres humanos comprometidos con la sociedad y con sentido cívico.",
        points: [
          { h: "Enfoque por competencias", t: "La concepción pedagógica del PEI se basa en la formación integral y el enfoque por competencias." },
          { h: "Academia y sector productivo", t: "Se busca un trabajo recíproco con el sector productivo para facilitar las experiencias de aprendizaje." },
          { h: "Proyección social", t: "Las prácticas sociales aplican el conocimiento en comunidades y organizaciones sin ánimo de lucro." }
        ]
      },
      {
        title: "Valores institucionales",
        lead: "Las prácticas promueven los principios y valores adoptados por el ITM en su PEI.",
        points: [
          { h: "Convivencia y respeto", t: "Cohesión social, dignidad, equidad e igualdad entre todas las personas." },
          { h: "Excelencia e inclusión", t: "Honestidad, liderazgo, responsabilidad y formación integral." },
          { h: "Diversidad y vida", t: "Libertad, paz, y compromiso con la transformación social y tecnológica." }
        ],
        note: "El ITM forma talento humano capaz de inscribirse en procesos de transformación tecnológica y social, con relación activa con el sector productivo."
      },
      {
        title: "Marco normativo vigente",
        lead: "El Manual está ajustado a los requerimientos legales que regulan la relación de aprendizaje en Colombia.",
        points: [
          { h: "Decreto 223 de 2026", t: "Unifica y reglamenta integralmente las prácticas laborales y el contrato de aprendizaje." },
          { h: "Ley 2466 de 2025", t: "Reforma Laboral: redefine el contrato de aprendizaje como contrato laboral especial a término fijo." },
          { h: "Ley 2043 de 2020", t: "Reconoce las prácticas como experiencia profesional y obliga a certificarlas." },
          { h: "Ley 2365 de 2024", t: "Establece medidas de prevención y atención del acoso sexual en prácticas laborales." }
        ]
      }
    ]
  },

  /* ============== MÓDULO 2 — Capítulo II ============== */
  {
    id: 2,
    cap: "Capítulo II",
    faculty: "Acrónimos, Definiciones y Conceptos",
    title: "El Lenguaje de las Prácticas",
    subtitle: "Acrónimos, roles y definiciones esenciales",
    icon: "book",
    colors: { c1: "#102D69", c2: "#00A0B7", c3: "#56ACDE", soft: "#e9eef8" },
    badge: { name: "Descifrador", tag: "Maestro del Lenguaje", icon: "book" },
    objective: "Dominar los acrónimos, roles y definiciones esenciales para comprender con precisión el proceso de prácticas del ITM.",
    learn: [
      "Reconocer los acrónimos institucionales y legales del proceso.",
      "Distinguir los roles: monitor, tutor, asesor técnico y docente enlace.",
      "Diferenciar empresa patrocinadora de escenario de prácticas laborales.",
      "Comprender los tipos de contratos y documentos del proceso."
    ],
    content: [
      {
        title: "Acrónimos esenciales",
        lead: "Estas siglas aparecen a lo largo de todo el proceso. Conocerlas es el primer paso para entender el manual con precisión.",
        points: [
          { h: "ARL · EPS", t: "Administradora de Riesgos Laborales · Entidad Promotora de Salud." },
          { h: "SENA · SGVA", t: "Servicio Nacional de Aprendizaje · Sistema de Gestión de Vacantes y Aprendizaje." },
          { h: "SG-SST · COPASST", t: "Sistema de Gestión de Seguridad y Salud en el Trabajo · Comité Paritario de Seguridad y Salud." },
          { h: "PEI · CUEE · CST", t: "Proyecto Educativo Institucional · Comité Universidad Empresa Estado · Código Sustantivo del Trabajo." }
        ]
      },
      {
        title: "Monitor vs. Tutor",
        lead: "Dos figuras de acompañamiento que trabajan en conjunto, pero desde lados distintos: el académico y el productivo.",
        points: [
          { h: "Monitor (institución)", t: "Designado por el ITM. Lidera la orientación pedagógica y articula lo académico con la experiencia productiva." },
          { h: "Tutor (empresa)", t: "Trabajador de la empresa patrocinadora o escenario. Guía y acompaña las tareas del aprendiz desde lo productivo." },
          { h: "En conjunto", t: "El tutor lidera lo productivo; el monitor, lo pedagógico. Juntos construyen las competencias del estudiante." }
        ]
      },
      {
        title: "Otros roles de apoyo",
        lead: "Figuras adicionales que fortalecen la articulación entre la facultad y la Oficina de Prácticas Profesionales.",
        points: [
          { h: "Asesor técnico", t: "Docente de la facultad que gestiona los aspectos técnicos del proceso (no está en todas las facultades)." },
          { h: "Docente enlace", t: "Vínculo entre la Oficina de Prácticas y la facultad; designado por cada facultad para cada programa." },
          { h: "Coordinador de prácticas", t: "Responsable de la gestión, seguimiento y evaluación de las prácticas en la institución." }
        ]
      },
      {
        title: "Empresa patrocinadora vs. Escenario de prácticas",
        lead: "Una distinción fundamental: la misma entidad puede tener ambas denominaciones según el mecanismo contractual que use.",
        points: [
          { h: "Empresa patrocinadora", t: "Celebra un CONTRATO DE APRENDIZAJE (vínculo laboral especial a término fijo, con seguridad social integral)." },
          { h: "Escenario de prácticas laborales", t: "Recibe al practicante mediante VINCULACIÓN FORMATIVA (no constituye relación laboral; ARL obligatoria)." },
          { h: "Regla práctica", t: "Si firma contrato de aprendizaje SENA → empresa patrocinadora. Si firma convenio formativo → escenario de prácticas." }
        ]
      },
      {
        title: "Documentos y conceptos del proceso",
        lead: "El proceso se apoya en instrumentos y modalidades de aprendizaje con definiciones precisas.",
        points: [
          { h: "Plan de Prácticas", t: "Documento suscrito por el estudiante, el tutor y el monitor, con objetivos formativos y resultados de aprendizaje. Parte integral del contrato." },
          { h: "Sistematización", t: "Documento descriptivo mediante el cual el estudiante evidencia el cumplimiento de resultados de aprendizaje y su desempeño por competencias." },
          { h: "Formación dual", t: "Proceso planeado y ejecutado conjuntamente entre el escenario laboral y la institución, en esquema de alternancia." },
          { h: "Prácticas guiadas / autónomas", t: "Guiadas: supervisión permanente del tutor. Autónomas: supervisión periódica sobre asuntos de su área." }
        ]
      }
    ]
  },

  /* ============== MÓDULO 3 — Capítulo III ============== */
  {
    id: 3,
    cap: "Capítulo III",
    faculty: "Objetivos de las Prácticas Profesionales",
    title: "Objetivos y Estructura",
    subtitle: "Para qué sirven las prácticas y quién las gestiona",
    icon: "target",
    colors: { c1: "#009030", c2: "#7AAE10", c3: "#98BF13", soft: "#ecf5e3" },
    badge: { name: "Estratega", tag: "Arquitecto de Objetivos", icon: "target" },
    objective: "Conocer los objetivos de las prácticas profesionales y la estructura orgánica de la Oficina de Prácticas Profesionales ITM.",
    learn: [
      "Identificar el objetivo general y los cinco objetivos específicos.",
      "Comprender el rol de la Oficina de Prácticas en la Vicerrectoría de Docencia.",
      "Reconocer la estructura orgánica de nueve niveles.",
      "Diferenciar los roles de la Unidad Administrativa."
    ],
    content: [
      {
        title: "Las prácticas como modalidad de grado",
        lead: "Las prácticas profesionales son una modalidad de grado que permite una experiencia académica, laboral y profesional para que los estudiantes integren y apliquen sus conocimientos en contextos específicos de su profesión.",
        note: "A través de esta modalidad desarrollan competencias técnicas y humanas y fortalecen su vínculo con el sector productivo."
      },
      {
        title: "Objetivo general",
        lead: "Vincular la academia al sector productivo afianzando las competencias adquiridas por los estudiantes, por medio de prácticas profesionales, sociales o internacionales.",
        points: [
          { h: "Aplicación real", t: "Aplicar conocimientos en una unidad productiva real del sector empresarial o social." },
          { h: "Tres modalidades", t: "Prácticas profesionales, sociales o internacionales, según el perfil e interés del estudiante." },
          { h: "Triple proyección", t: "Generar espacios de proyección social, participación laboral y vinculación institucional." }
        ]
      },
      {
        title: "Cinco objetivos específicos",
        lead: "Cinco propósitos concretos orientan el proceso de prácticas profesionales del ITM.",
        points: [
          { h: "1. Acercamiento", t: "Promover el vínculo universidad–empresa mediante convenios y la identificación de espacios pertinentes." },
          { h: "2. Competencias", t: "Facilitar el desarrollo de competencias técnicas y humanas mediante inmersión activa en el campo empresarial." },
          { h: "3. Fortalecer programas", t: "Conectar la formación académica con el medio empresarial y las exigencias del mundo real." },
          { h: "4. Investigación", t: "Estimular la cultura de la investigación articulando las prácticas a las líneas de investigación de la facultad." },
          { h: "5. Proyección social", t: "Fomentar el desarrollo integral e interdisciplinario para abordar problemáticas sociales y de comunidades vulnerables." }
        ]
      },
      {
        title: "Dirección y coordinación",
        lead: "La Oficina de Prácticas Profesionales ITM pertenece a la Vicerrectoría de Docencia – Dirección de Gestión Académica.",
        points: [
          { h: "Gestión de rutas y convenios", t: "Define rutas, relaciona y gestiona convenios con empresas y escenarios de práctica." },
          { h: "Asignación de monitores", t: "Asigna monitores y hace seguimiento a estudiantes y empresas patrocinadoras." },
          { h: "Acompañamiento continuo", t: "Trabaja en sinergia constante con las facultades para garantizar la calidad del proceso." }
        ]
      },
      {
        title: "Estructura orgánica (9 niveles)",
        lead: "El proceso se organiza en nueve niveles e instancias articuladas que garantizan la gobernanza del proceso.",
        points: [
          { h: "Dirección académica", t: "Vicerrectoría de Docencia, Consejo de Facultad, Comité Curricular y Comité de Modalidad de Grado." },
          { h: "Operación", t: "Coordinación de Prácticas y Monitores de prácticas (designados desde la Vicerrectoría)." },
          { h: "Apoyo administrativo", t: "Auxiliar de atención, Auxiliar de innovación y tecnología, y Docente enlace de la facultad." }
        ],
        note: "La Unidad Administrativa está integrada por el Coordinador de área, Gestión Humana, el Monitor y los auxiliares."
      }
    ]
  },

  /* ============== MÓDULO 4 — Capítulo IV ============== */
  {
    id: 4,
    cap: "Capítulo IV",
    faculty: "Modalidades de Práctica",
    title: "Modalidades de Práctica",
    subtitle: "Profesionales, sociales e internacionales",
    icon: "route",
    colors: { c1: "#0082C8", c2: "#28AAEB", c3: "#5EC8F8", soft: "#e0f4ff" },
    badge: { name: "Explorador", tag: "Explorador de Modalidades", icon: "route" },
    objective: "Distinguir las tres modalidades de práctica, sus duraciones, requisitos y productos esperados.",
    learn: [
      "Caracterizar las prácticas profesionales, sociales e internacionales.",
      "Identificar los requisitos y productos esperados de cada modalidad.",
      "Reconocer el acompañamiento que brinda el monitor.",
      "Conocer las condiciones especiales para prácticas en el exterior."
    ],
    content: [
      {
        title: "Prácticas profesionales",
        lead: "El estudiante aplica los conocimientos teóricos y prácticos de su formación con especial énfasis en el aprendizaje y entrenamiento laboral.",
        points: [
          { h: "Duración", t: "Depende del registro de cada programa ante el Ministerio de Trabajo y el SENA, y del diseño curricular del programa." },
          { h: "Producto tecnología", t: "Entrega del Plan de Prácticas en el formato definido por la facultad." },
          { h: "Producto profesional", t: "Plan de Prácticas o propuesta de mejoramiento, optimización o innovación en el área donde se desarrolla." },
          { h: "Acompañamiento", t: "El monitor asegura mínimo cuatro encuentros (presenciales o virtuales), además de los del Plan de Prácticas." }
        ]
      },
      {
        title: "Prácticas sociales",
        lead: "Vinculan al estudiante con organizaciones sin ánimo de lucro, comunidades y entidades de desarrollo para atender necesidades reales.",
        points: [
          { h: "Duración", t: "Entre 16 y 24 semanas. Pueden ser remuneradas o no remuneradas." },
          { h: "ARL obligatoria", t: "Requieren afiliación a una Administradora de Riesgos Laborales sin excepción." },
          { h: "Propósito formativo", t: "Fortalecer la formación profesional y humana, y el compromiso social del estudiante." }
        ]
      },
      {
        title: "Prácticas internacionales",
        lead: "El estudiante realiza su práctica en el exterior para adquirir experiencia global y habilidades interculturales.",
        points: [
          { h: "Promedio académico", t: "Requiere promedio acumulado igual o superior a 3,8 y no tener procesos disciplinarios activos." },
          { h: "Duración mínima", t: "Mínimo 16 semanas; para tecnólogos y profesionales no puede superar los 6 meses." },
          { h: "Trámites propios", t: "El estudiante gestiona visa, permisos migratorios y demás; la institución no se responsabiliza de estos trámites." },
          { h: "Póliza de viaje", t: "Sin excepción, debe contar con póliza que cubra accidentes, enfermedad, invalidez y repatriación." }
        ]
      },
      {
        title: "Condiciones especiales internacionales",
        lead: "Además del promedio exigido, el estudiante debe cumplir condiciones administrativas y económicas antes de viajar.",
        points: [
          { h: "Pasaporte vigente", t: "Mínimo un año de vigencia al momento de iniciar los trámites de viaje." },
          { h: "Idioma", t: "Certificar el nivel de competencia en el idioma del país de destino cuando sea diferente al español." },
          { h: "Recursos económicos", t: "Asumir costos de desplazamiento, alojamiento, manutención, tiquetes y seguro médico internacional." },
          { h: "Organización legalmente constituida", t: "La entidad donde se realizan las prácticas debe estar legalmente constituida en el país de destino." }
        ]
      },
      {
        title: "Requisitos comunes a todas las modalidades",
        lead: "Sin importar la modalidad elegida, el estudiante debe cumplir estas condiciones base.",
        points: [
          { h: "Matrícula vigente", t: "Estar matriculado en la institución durante toda la vigencia de las prácticas." },
          { h: "Exigencias académicas", t: "Cumplir lo establecido por cada facultad para la modalidad de grado prácticas profesionales." },
          { h: "Formación preprácticas", t: "Completar la formación preprácticas definida en el Capítulo V del manual." },
          { h: "Aceptación empresarial", t: "Haber sido aceptado por una empresa o escenario con funciones acordes al perfil académico y línea del programa." }
        ]
      }
    ]
  },

  /* ============== MÓDULO 5 — Capítulo V ============== */
  {
    id: 5,
    cap: "Capítulo V",
    faculty: "Proceso Integral de las Prácticas",
    title: "El Proceso Integral",
    subtitle: "Del primer paso al cierre administrativo",
    icon: "flow",
    colors: { c1: "#006F7F", c2: "#009BB5", c3: "#00C5D5", soft: "#e0f7fa" },
    badge: { name: "Navegante", tag: "Navegante del Proceso", icon: "flow" },
    objective: "Recorrer el flujo completo de las prácticas: habilitación, vinculación, legalización, acompañamiento, evaluación y cierre.",
    learn: [
      "Ordenar los tres momentos secuenciales del proceso integral.",
      "Identificar los documentos requeridos en cada etapa.",
      "Distinguir el contrato de aprendizaje de la vinculación formativa.",
      "Reconocer el acompañamiento, la evaluación y el cierre administrativo."
    ],
    content: [
      {
        title: "Tres momentos del proceso",
        lead: "El proceso integral es un único flujo continuo, compuesto por tres momentos secuenciales e interdependientes.",
        points: [
          { h: "1 · Habilitación", t: "Formación preprácticas para preparar y habilitar al estudiante antes de buscar empresa." },
          { h: "2 · Vinculación y desarrollo", t: "Selección, carta de inicio, legalización y ejecución de las prácticas en la empresa." },
          { h: "3 · Evaluación y cierre", t: "Plan de Prácticas, sistematización, evaluación final y cierre administrativo." }
        ]
      },
      {
        title: "Habilitación: formación preprácticas",
        lead: "El proceso se inicia con la formación preprácticas, cuyo objetivo es preparar y habilitar al estudiante para vincularse.",
        points: [
          { h: "Inscripción", t: "El estudiante se inscribe por los canales institucionales y cumple los requisitos académicos de la facultad." },
          { h: "Durante la formación", t: "Asiste a sesiones, presenta la prueba de tendencia profesional y perfila su hoja de vida." },
          { h: "Documentación", t: "Entrega hoja de vida actualizada, guía de compromiso firmada y certificado de asistencia." },
          { h: "Resultado", t: "Queda registrado en la base de datos de disponibles para prácticas de la Oficina." }
        ]
      },
      {
        title: "Vinculación y carta de inicio",
        lead: "Con la habilitación completa, el estudiante puede aplicar a procesos de selección de empresas o escenarios.",
        points: [
          { h: "Solicitud empresarial", t: "La empresa solicita la base de datos, revisa hojas de vida y adelanta su proceso de selección." },
          { h: "Carta de inicio", t: "Se diligencia con el perfil requerido, las funciones propuestas y el tipo de contratación definido." },
          { h: "Validación de funciones", t: "El monitor, docente enlace o asesor técnico aprueba o rechaza la solicitud según coherencia con el programa." }
        ]
      },
      {
        title: "Legalización: dos caminos",
        lead: "La diferencia clave está en el tipo de vínculo jurídico que se celebra entre las partes.",
        points: [
          { h: "Contrato de aprendizaje", t: "Contrato laboral especial a término fijo. Incluye apoyo de sostenimiento (mín. 1 SMLMV universitarios), seguridad social integral y prestaciones." },
          { h: "Vinculación formativa", t: "Acuerdo de voluntades o acto administrativo. No constituye relación laboral. La empresa asume la ARL (riesgo 3)." },
          { h: "Inicio oficial", t: "Las prácticas solo inician con carta de inicio, documentación firmada y afiliación a seguridad social." }
        ]
      },
      {
        title: "Acompañamiento durante las prácticas",
        lead: "El monitor lidera el acompañamiento durante toda la ejecución de las prácticas.",
        points: [
          { h: "Seguimiento inicial", t: "Contacto inicial, verificación de documentos (contrato, EPS, ARL, pensión)." },
          { h: "Visitas y cronograma", t: "Programación de visitas y definición del cronograma de actividades y entregables." },
          { h: "Plan de Prácticas", t: "Revisión, aprobación y seguimiento del Plan de Prácticas elaborado conjuntamente." },
          { h: "Sistematización", t: "Revisión y aprobación del documento que evidencia el desempeño por competencias del practicante." }
        ]
      },
      {
        title: "Evaluación, cierre y casos especiales",
        lead: "Al finalizar las prácticas, se realiza la evaluación y el cierre administrativo del proceso.",
        points: [
          { h: "Evaluación final", t: "La empresa emite concepto sobre el desempeño; el monitor realiza la evaluación final del proceso." },
          { h: "Encuesta y cierre", t: "El estudiante diligencia la encuesta de satisfacción; se realiza el cierre garantizando trazabilidad." },
          { h: "Casos especiales", t: "Situaciones excepcionales las atiende el Comité de Casos Especiales (Coordinador, Monitor y Gestión Humana)." }
        ]
      }
    ]
  },

  /* ============== MÓDULO 6 — Capítulo VI ============== */
  {
    id: 6,
    cap: "Capítulo VI",
    faculty: "Deberes, Derechos y Acciones Correctivas",
    title: "Deberes y Derechos",
    subtitle: "Las reglas del juego para todas las partes",
    icon: "scale",
    colors: { c1: "#5B2D9E", c2: "#7B4FC4", c3: "#9F7AE8", soft: "#f0eaff" },
    badge: { name: "Árbitro", tag: "Guardián de Derechos y Deberes", icon: "scale" },
    objective: "Conocer los deberes, derechos y acciones correctivas de la Oficina, la empresa y el practicante en el proceso de prácticas.",
    learn: [
      "Identificar los deberes de la Oficina de Prácticas y el monitor.",
      "Reconocer los deberes de la empresa patrocinadora y el tutor.",
      "Listar los deberes y derechos del practicante.",
      "Aplicar las acciones correctivas correspondientes a cada parte."
    ],
    content: [
      {
        title: "Deberes de la Oficina de Prácticas",
        lead: "La Oficina actúa como articulador y garante de la calidad de las prácticas como modalidad de grado.",
        points: [
          { h: "Designar monitor", t: "Antes del inicio de la actividad formativa, y notificar oportunamente cualquier cambio." },
          { h: "Confidencialidad", t: "Mantener estricta reserva sobre la información conocida durante el proceso." },
          { h: "Protocolo de acoso", t: "Contar con protocolo de atención conforme a la Ley 2365 de 2024 y el Decreto 223 de 2026." },
          { h: "Certificar y reportar", t: "Certificar la experiencia adquirida una vez cumplidos los requisitos; reportar incumplimientos al Ministerio de Trabajo." }
        ]
      },
      {
        title: "Obligaciones del monitor",
        lead: "El monitor ejerce el acompañamiento pedagógico y es el principal enlace institucional con el practicante.",
        points: [
          { h: "Plan de Prácticas", t: "Elaborar, revisar y aprobar en conjunto con el tutor el Plan de Prácticas del estudiante." },
          { h: "Avalar informes", t: "Avalar los informes periódicos presentados por el practicante en el cronograma definido." },
          { h: "Reportar novedades", t: "Informar a la empresa cualquier situación que afecte el normal desarrollo de las prácticas." },
          { h: "Protección del practicante", t: "Usar los mecanismos institucionales para resolver amenazas o vulneraciones a los derechos del practicante." }
        ]
      },
      {
        title: "Deberes de la empresa o escenario de prácticas",
        lead: "Cumplen un rol formativo clave ofreciendo un entorno profesional adecuado para el aprendizaje del practicante.",
        points: [
          { h: "Designar tutor", t: "Contar con un tutor que lidere, evalúe y oriente el proceso del estudiante en la empresa." },
          { h: "Seguridad social", t: "Gestionar la afiliación según la modalidad. En vinculación formativa: asumir la ARL riesgo 3." },
          { h: "Apoyo de sostenimiento", t: "En contrato de aprendizaje universitario: mínimo 1 SMLMV. Tecnólogos: 75% lectiva y 100% práctica." },
          { h: "Inducción completa", t: "Realizar inducción al practicante y entregarle copia del reglamento interno de trabajo." }
        ]
      },
      {
        title: "Deberes del practicante",
        lead: "El practicante complementa su formación aplicando conocimientos con responsabilidad, ética y compromiso.",
        points: [
          { h: "Transparencia en selección", t: "Máximo tres procesos de selección simultáneos; evitar la doble aceptación de ofertas." },
          { h: "Una sola modalidad de grado", t: "No incurrir en doble modalidad de grado (causa de retiro inmediato de las prácticas)." },
          { h: "Carta de inicio obligatoria", t: "No iniciar prácticas sin la carta de autorización expedida por la Oficina de Prácticas." },
          { h: "Entregables en plazo", t: "Entregar el Plan de Prácticas y la sistematización dentro de los plazos definidos por el monitor." }
        ]
      },
      {
        title: "Derechos del practicante",
        lead: "El estudiante cuenta con garantías que la institución debe asegurar a lo largo de todo el proceso.",
        points: [
          { h: "Monitor y asesoría", t: "Monitor asignado antes del inicio; asesoría programada dos veces al mes (días 15 y 30)." },
          { h: "Protección especial", t: "Acompañamiento jurídico y psicológico en casos de violencia basada en género." },
          { h: "Garantías laborales", t: "Estabilidad laboral reforzada, libertad sindical y participación en COPASST (en contrato de aprendizaje)." },
          { h: "Derechos de autor", t: "Conserva los derechos morales sobre todas las creaciones realizadas durante las prácticas." }
        ]
      }
    ]
  },

  /* ============== MÓDULO 7 — Capítulo VII ============== */
  {
    id: 7,
    cap: "Capítulo VII",
    faculty: "Articulación con las Facultades",
    title: "Articulación con Facultades",
    subtitle: "Cómo se coordina la Oficina con cada programa académico",
    icon: "medal",
    colors: { c1: "#1558A8", c2: "#2E7DD4", c3: "#5FA0E8", soft: "#e8f2fb" },
    badge: { name: "Enlace", tag: "Tejedor de Redes", icon: "medal" },
    objective: "Comprender el proceso de articulación entre la Oficina de Prácticas y las facultades, sus etapas clave y mecanismos de seguimiento.",
    learn: [
      "Identificar las etapas clave del proceso de articulación con las facultades.",
      "Reconocer el papel del docente enlace y el asesor técnico.",
      "Conocer los mecanismos de seguimiento e indicadores del proceso.",
      "Saber la frecuencia y propósito de las reuniones semestrales."
    ],
    content: [
      {
        title: "¿Qué es la articulación con las facultades?",
        lead: "Busca establecer un proceso coordinado y sinérgico para la gestión de la modalidad de grado prácticas profesionales, garantizando la formación integral y el cumplimiento normativo.",
        points: [
          { h: "Coordinación", t: "Asegura que cada facultad esté alineada con los lineamientos de la Oficina de Prácticas." },
          { h: "Sinergia", t: "Une el proceso formativo de las facultades con la gestión operativa de prácticas de manera continua." }
        ]
      },
      {
        title: "Etapas clave de la articulación",
        lead: "El proceso de articulación sigue etapas definidas que garantizan continuidad y mejora constante.",
        points: [
          { h: "Normativa y alineación", t: "Revisión y alineación de la normativa de modalidades de grado con las regulaciones actuales de cada facultad." },
          { h: "Participación en espacios", t: "Coordinación con empresas patrocinadoras y formación integral a monitores para fortalecer su rol." },
          { h: "Capacitación y lineamientos", t: "Capacitación a todos los involucrados sobre normativa vigente y roles en el proceso." },
          { h: "Indicadores y planes", t: "Definición de indicadores mediante encuestas y creación de planes de mejoramiento conjuntos." }
        ]
      },
      {
        title: "El docente enlace de la facultad",
        lead: "Para algunas facultades existe la figura adicional del docente enlace, designado por el Comité Curricular.",
        points: [
          { h: "Facultades con esta figura", t: "Facultad de Ciencias Exactas y Aplicadas y Facultad de Artes y Humanidades (no en todas las facultades)." },
          { h: "Su función", t: "Servir de vínculo entre la Oficina de Prácticas y la facultad, garantizando planificación y mejora continua." },
          { h: "Designación", t: "Es designado por el Comité Curricular o la instancia que cumpla esa función en cada facultad." }
        ]
      },
      {
        title: "Seguimiento, talleres e informes",
        lead: "Se desarrollan actividades de retroalimentación continua para asegurar la calidad de las prácticas.",
        points: [
          { h: "Talleres y capacitaciones", t: "Para estudiantes y docentes, con retroalimentación sobre los planes de mejoramiento vigentes." },
          { h: "Informes de acreditación", t: "Presentación de informes estadísticos para procesos de acreditación y aseguramiento de la calidad." },
          { h: "Evaluación continua", t: "Evaluación y ajuste del proceso según necesidades detectadas; elaboración y entrega del Plan de Prácticas." }
        ]
      },
      {
        title: "Reuniones semestrales obligatorias",
        lead: "La articulación se concreta con reuniones periódicas que garantizan coordinación y avance continuo.",
        points: [
          { h: "Frecuencia fija", t: "DOS reuniones semestrales con cada facultad para asegurar coordinación y progreso continuo." },
          { h: "Análisis de resultados", t: "Se analizan contenidos, recomendaciones y calificaciones finales (F082) de los trabajos de prácticas." },
          { h: "Definición de calendarios", t: "Se establecen los calendarios académicos y la programación de actividades para el siguiente período." }
        ],
        note: "Estas reuniones son el mecanismo formal de coordinación entre la Oficina de Prácticas y cada facultad para asegurar la calidad."
      }
    ]
  },

  /* ============== MÓDULO 8 — Capítulo VIII ============== */
  {
    id: 8,
    cap: "Capítulo VIII",
    faculty: "Generalidades Reglamentarias",
    title: "Generalidades Reglamentarias",
    subtitle: "Reglas clave que todo practicante debe conocer",
    icon: "shield",
    colors: { c1: "#1A3A8A", c2: "#2858C4", c3: "#5080E0", soft: "#e8ecfb" },
    badge: { name: "Guardián", tag: "Guardián del Reglamento", icon: "shield" },
    objective: "Conocer las disposiciones reglamentarias que rigen aspectos clave del proceso: edad, jornada, terminación anticipada, plagio, ARL y más.",
    learn: [
      "Identificar la edad mínima y jornada máxima para practicantes adolescentes.",
      "Comprender cuándo procede la terminación anticipada del contrato.",
      "Conocer las consecuencias del plagio, la renuncia y el no pago de ARL.",
      "Reconocer las reglas sobre segundo contrato de aprendizaje."
    ],
    content: [
      {
        title: "Segundo contrato de aprendizaje SENA",
        lead: "Los estudiantes del ciclo complementario que ya firmaron un primer contrato deben tramitar la habilitación para un segundo.",
        points: [
          { h: "Documentación requerida", t: "Diploma o acta de grado de la primera formación, certificado de matrícula actual y carta de terminación del primer contrato." },
          { h: "Coherencia de programas", t: "Los dos programas (el actual y el anterior) deben ser coherentes entre sí en período y área de formación." },
          { h: "Aval del programa", t: "Carta del jefe de programa avalando la cadena de formación; se radica en el SENA." }
        ]
      },
      {
        title: "Un programa, un contrato",
        lead: "El estudiante solo puede realizar las prácticas en su programa académico actual y suscribir una vez cada tipo de contrato.",
        points: [
          { h: "Un solo programa", t: "Las prácticas se realizan únicamente en el programa académico en que el estudiante está matriculado." },
          { h: "Prohibición de nueva relación", t: "Está prohibido celebrar una nueva relación de aprendizaje con la misma o distinta empresa una vez expirada la anterior." },
          { h: "Prohibición adicional", t: "Las empresas no pueden contratar como aprendices a personas que hayan estado o estén vinculadas laboralmente a ellas." }
        ]
      },
      {
        title: "Terminación anticipada",
        lead: "La terminación anticipada del convenio o contrato solo procede bajo condiciones muy específicas y documentadas.",
        points: [
          { h: "Oferta laboral formal", t: "Debe existir una oferta laboral formal por parte de la empresa patrocinadora o el escenario." },
          { h: "Avance del 80%", t: "El avance de las prácticas debe estar en el 80% como mínimo al momento de la solicitud." },
          { h: "Comunicación escrita", t: "El estudiante y la empresa envían comunicación a la Coordinación de Prácticas con copia al monitor." },
          { h: "Seguimiento continúa", t: "El monitor sigue acompañando hasta el cierre de las prácticas y la entrega de la sistematización." }
        ]
      },
      {
        title: "Edad mínima y jornada para adolescentes",
        lead: "El Decreto 223 de 2026 establece restricciones claras para practicantes que sean menores de edad.",
        points: [
          { h: "Edad mínima", t: "15 años. Entre 15 y 18 años requieren autorización del inspector de trabajo o ente territorial." },
          { h: "Adolescentes 15-17 años", t: "Jornada máxima: 6 horas diarias y 30 semanales, y hasta las 6:00 p. m." },
          { h: "Adolescentes mayor de 17", t: "Jornada máxima: 8 horas diarias y 40 semanales, y hasta las 8:00 p. m." },
          { h: "Adolescentes embarazadas", t: "Jornada máxima: 4 horas diarias y 20 semanales, y hasta las 6:00 p. m." }
        ]
      },
      {
        title: "Consecuencias del incumplimiento",
        lead: "El incumplimiento de las reglas genera consecuencias inmediatas para estudiantes y empresas.",
        points: [
          { h: "Plagio en Plan de Prácticas", t: "La modalidad de grado se califica como REPROBADA. El estudiante debe elegir otra modalidad de grado." },
          { h: "Renuncia sin informar", t: "El abandono o renuncia sin avisar a la institución hace que el tiempo cursado NO sea reconocido." },
          { h: "ARL no pagada por la empresa", t: "Se cancelan las prácticas y se sanciona a la empresa por un período académico sin envío de nuevos practicantes." },
          { h: "Inicio sin carta", t: "Las prácticas iniciadas sin carta de inicio de la Oficina NO son reconocidas por la institución." }
        ]
      }
    ]
  },

  /* ============== MÓDULO 9 — Capítulo IX ============== */
  {
    id: 9,
    cap: "Capítulo IX",
    faculty: "Disposiciones Transitorias",
    title: "Disposiciones Transitorias",
    subtitle: "Vigencia, transición y aplicación del nuevo manual",
    icon: "star",
    colors: { c1: "#8A6200", c2: "#C49000", c3: "#E8B820", soft: "#fdf6de" },
    badge: { name: "Pionero", tag: "Pionero de la Transición", icon: "star" },
    objective: "Comprender el ámbito de aplicación temporal del manual, las normas de orden público y los plazos de adecuación.",
    learn: [
      "Conocer a quiénes aplica el nuevo manual y desde cuándo.",
      "Identificar las normas de aplicación inmediata (orden público).",
      "Saber el plazo para que las empresas adecúen sus procesos internos.",
      "Entender qué sucede con los contratos y convenios anteriores."
    ],
    content: [
      {
        title: "Ámbito de aplicación temporal",
        lead: "Las disposiciones del Manual aplican a todos los estudiantes que inicien su proceso de habilitación a partir de la fecha de entrada en vigor.",
        points: [
          { h: "Estudiantes nuevos", t: "Quienes inicien el proceso de habilitación DESPUÉS de la entrada en vigor se rigen por el nuevo manual." },
          { h: "Estudiantes en curso", t: "Quienes ya están en etapa de vinculación o ejecución se rigen por el manual anterior, salvo que las nuevas disposiciones sean más favorables." },
          { h: "Normas más favorables", t: "Si las nuevas disposiciones resultan más favorables para el practicante, se aplican de manera inmediata." }
        ]
      },
      {
        title: "Transición normativa",
        lead: "Los contratos anteriores al Decreto 223/2026 y a la Ley 2466/2025 se rigen por sus condiciones pactadas hasta su terminación natural.",
        points: [
          { h: "Contratos anteriores", t: "Se rigen por las disposiciones contractuales pactadas originalmente hasta su terminación natural." },
          { h: "Normas de orden público", t: "Ciertas disposiciones son de APLICACIÓN INMEDIATA a todos los contratos vigentes, sin excepción." }
        ]
      },
      {
        title: "Normas de aplicación inmediata",
        lead: "Por tratarse de normas de orden público, las siguientes disposiciones aplican de inmediato a todos los contratos, incluso los anteriores.",
        points: [
          { h: "Estabilidad laboral reforzada", t: "Fuero de maternidad, discapacidad y demás (artículo 2.2.6.3.3.44, Decreto 223/2026)." },
          { h: "Libertad sindical", t: "Derecho de asociación sindical y negociación colectiva (artículo 2.2.6.3.3.43)." },
          { h: "Participación en COPASST", t: "Los aprendices participan en el Comité Paritario de Seguridad (artículo 2.2.6.3.3.45)." },
          { h: "Derechos de autor y jornada adolescentes", t: "Derechos morales del practicante y restricciones de jornada para menores de edad." }
        ]
      },
      {
        title: "Convenios y contratos en curso",
        lead: "Las empresas con convenios vigentes tienen un plazo de adaptación a las nuevas disposiciones.",
        points: [
          { h: "Plazo de adecuación", t: "60 días calendario desde la entrada en vigor del manual para adecuar procesos internos." },
          { h: "Ley 2365/2024 — Acoso sexual", t: "Implementar medidas de prevención, protección y atención del acoso sexual en las prácticas laborales." },
          { h: "Reporte de plazas", t: "Reportar las plazas de prácticas al Servicio Público de Empleo (artículo 2.2.6.3.1.6, Decreto 223/2026)." }
        ]
      },
      {
        title: "Homologación y vigencia",
        lead: "Las disposiciones sobre homologación y la vigencia formal del manual cierran el marco transitorio.",
        points: [
          { h: "Homologación de preprácticas", t: "Quienes completaron la formación preprácticas con el esquema anterior NO deben repetirla; acreditan con constancia de la Oficina." },
          { h: "Entrada en vigor", t: "A partir de su aprobación mediante acto administrativo de la Vicerrectoría de Docencia." },
          { h: "Derogación", t: "Deroga todas las disposiciones que le sean contrarias, incluyendo versiones anteriores del manual." }
        ],
        note: "Las modificaciones al manual deben ser propuestas por el coordinador de prácticas y aprobadas por la Vicerrectoría de Docencia."
      }
    ]
  }

];
