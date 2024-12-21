export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad: 'Técnicas y métodos de investigación en ciencias sociales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Métodos cualitativos en investigación social: entrevistas, grupos focales y observación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Entrevistas como método cualitativo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Grupos focales en la investigación cualitativa',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'La observación como técnica de investigación cualitativa',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Métodos cuantitativos en investigación: encuestas y análisis de datos estadísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Encuestas como método cuantitativo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Análisis de datos estadísticos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'La validación de instrumentos y las consideraciones éticas en métodos cuantitativos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Triangulación de datos en investigaciones mixtas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'La triangulación y su propósito',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Estudios de caso: ejemplos prácticos de triangulación en investigaciones mixtas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alaminos-Fernández, A. F. (2023). Introducción a la investigación social mediante encuestas de opinión pública.',
      link:
        'https://rua.ua.es/dspace/bitstream/10045/133158/1/Introduccion_a_la_investigacion_social_mediante_encuestas_de_opinion_publica_UA.pdf',
    },
    {
      referencia:
        'Anastasi, A., y Urbina, S. (1997). Pruebas psicológicas. Prentice Hall.',
      link: 'https://books.google.com.co/books?hl=es&lr=&id=FV01zgFuk0cC',
    },
    {
      referencia:
        'Babbie, E. (2000). Fundamentos de la investigación social. México: Cengage Aprendizaje.',
      link:
        'https://tecnicasmasseroni.wordpress.com/wp-content/uploads/2012/02/babbie-fundamentos-de-la-investigacic3b3n-social.pdf',
    },
    {
      referencia:
        'Cohen, L., Manion, L., y Morrison, K. (2013). Métodos de investigación en educación. Routledge.',
      link:
        'https://www.taylorfrancis.com/books/edit/10.4324/9780203720967/research-methods-education-lawrence-manion-louis-cohen-keith-morrison',
    },
    {
      referencia:
        'Creswell, JW y Plano Clark, VL (2017). Diseño y realización de investigación de métodos mixtos. México: Pearson.',
      link:
        'https://es.scribd.com/document/732489855/Creswell-J-W-Plano-Clark-V-L-2017-Understanding-Mixed-Methods-Research',
    },
    {
      referencia:
        'Denzin, N. K., & Lincoln, Y. S. (Eds.). (2011). The Sage handbook of qualitative research. sage.',
      link: 'https://books.google.es/books?hl=es&lr=&id=AIRpMHgBYqIC',
    },
    {
      referencia:
        'Flick, U. (2014). Introducción a la investigación cualitativa. Sage Publications.',
      link: 'https://books.google.com.co/books?id=HB-VAgAAQBAJ',
    },
    {
      referencia:
        'Hair, JF, Black, WC, Babin, BJ y Anderson, RE (2010). Análisis de datos multivariados. Prentice Hall.',
      link:
        'https://www.drnishikantjha.com/papersCollection/Multivariate%20Data%20Analysis.pdf',
    },
    {
      referencia:
        'Hernández Sampieri, R., Fernández Collado, C., & Baptista Lucio, MP (2014). Metodología de la investigación. McGraw-Hill.',
      link: 'https://books.google.com.co/books?hl=es&lr=&id=5A2QDwAAQBAJ',
    },
    {
      referencia:
        'Hidalgo, L. (2016). Confiabilidad y Validez en el Contexto de la Investigación y Evaluación Cualitativas. Sinopsis Educativa, 5(1-2), 225-243.',
      link:
        'http://historico.upel.edu.ve:81/revistas/index.php/sinopsis_educativa/article/view/3583',
    },
    {
      referencia:
        'Johnson, RB y Onwuegbuzie, AJ (2004). Investigación de métodos mixtos: un paradigma de investigación cuyo momento ha llegado. Investigador educativo.',
      link: 'https://journals.sagepub.com/doi/epdf/10.3102/0013189X033007014',
    },
    {
      referencia:
        'Malhotra, NK (2008). Investigación de mercados: Un enfoque aplicado. Prentice Hall.',
      link: 'https://books.google.es/books?hl=es&lr=&id=SLmEblVK2OQC',
    },
    {
      referencia:
        'Muñiz, J., & Fonseca-Pedrero, E. (2019). Diez pasos para la construcción de un test. Psicothema, 31(1), 7.',
      link:
        'https://investigacion.unirioja.es/documentos/5c55196234ada657a18c95dd/f/62c014391aa9016cd9915184.pdf',
    },
    {
      referencia:
        'Ortiz San Martín, S. D., & Rivas Peña, M. B. (2019). Estudio exploratorio-secuencial acerca de las relaciones disciplinarias en contextos terapéuticos en el programa reparatorio en maltrato del centro de asistencia a víctimas de atentados sexuales, región de Valparaíso, durante el año 2019.',
      link:
        'https://repositorio.uvm.cl/server/api/core/bitstreams/003746e7-7b1b-4248-8df2-5e6a339dff88/content',
    },
    {
      referencia:
        "Pérez, M. V. (2020). Ética de la investigación primera en humanos (Master's thesis, Buenos Aires).",
      link:
        'https://repositorio.flacsoandes.edu.ec/bitstream/10469/18736/2/TFLACSO-2020%20MVP.pdf',
    },
    {
      referencia:
        'Quispe, Q. Y., Machicao, L. V., Cora, F. N. P., & Velásquez, A. (2023). Diseños y secuencia didáctica para la investigación en un nuevo paradigma. Centro de Investigación y Desarrollo.',
      link:
        'https://www.researchgate.net/profile/Yan-Quispe-Quispe/publication/376647537_Septiembre_2023_-CID_-Centro_de_Investigacion_y_Desarrollo/links/65824d8e0bb2c7472bf88c7f/Septiembre-2023-CID-Centro-de-Investigacion-y-Desarrollo.pdf',
    },
    {
      referencia:
        'Sarmiento González, P., Botero Giraldo, J., & Carvajal Carrascal, G. (2013). Validez de constructo de la Escala de Medición del Proceso de Afrontamiento y Adaptación de Roy, versión modificada en español. Index de Enfermería, 22(4), 233-236.',
      link:
        'https://scielo.isciii.es/scielo.php?pid=S1132-12962013000300009&script=sci_arttext',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de contenido',
      significado:
        'Técnica utilizada para interpretar y codificar la información recopilada a través de entrevistas o documentos.',
    },
    {
      termino: 'Análisis estadístico',
      significado:
        'Proceso de aplicar técnicas para interpretar y presentar datos cuantitativos.',
    },
    {
      termino: 'Categorías emergentes',
      significado:
        'Temas o patrones que surgen de los datos cualitativos durante el análisis.',
    },
    {
      termino: 'Correlación',
      significado: 'Medida que describe la relación entre dos o más variables.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Método sistemático para recolectar datos numéricos a través de cuestionarios estructurados.',
    },
    {
      termino: 'Entrevista',
      significado:
        'Técnica de recolección de datos que implica una conversación estructurada o semiestructurada entre el investigador y el participante.',
    },
    {
      termino: 'Escala de Likert',
      significado:
        'Método de medición que evalúa actitudes o percepciones en una escala de 1 a 5 o 1 a 7.',
    },
    {
      termino: 'Grupo focal',
      significado:
        'Método de recolección de datos donde se reúne un grupo reducido de personas para discutir sobre un tema específico, facilitado por un moderador.',
    },
    {
      termino: 'Integración de datos',
      significado:
        'Proceso de combinar hallazgos de diferentes métodos para obtener una comprensión global.',
    },
    {
      termino: 'Investigación mixta',
      significado:
        'Enfoque que combina métodos cualitativos y cuantitativos en un solo estudio.',
    },
    {
      termino: 'Observación participante',
      significado:
        'Estrategia en la que el investigador se involucra en el entorno o actividad que está estudiando para obtener información contextual.',
    },
    {
      termino: 'Teoría fundamentada',
      significado:
        'Enfoque para generar teoría a partir de datos sistemáticamente recogidos y analizados.',
    },
    {
      termino: 'Triangulación',
      significado:
        'Uso de múltiples métodos o fuentes de datos para aumentar la credibilidad y validez de los hallazgos.',
    },
    {
      termino: 'Validación',
      significado:
        'Proceso de confirmar que los hallazgos de la investigación reflejan con precisión las perspectivas de los participantes.',
    },
    {
      termino: 'Validez convergente',
      significado:
        'Grado en que diferentes métodos utilizados para medir un mismo concepto producen resultados consistentes.',
    },
    {
      termino: 'Variable',
      significado:
        'Cualquier característica, valor o atributo que puede cambiar o variar en un estudio.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
