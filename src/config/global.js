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
    numeroUnidad: '1',
    tituloUnidad: 'Introducción a la investigación en ciencias sociales',
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
          'Definición y características de la investigación en ciencias sociales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de investigación: cualitativa, cuantitativa y mixta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Investigación cualitativa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Investigación cuantitativa ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Investigación mixta',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El papel del investigador en las ciencias sociales',
        desarrolloContenidos: true,
        subMenu: [],
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
        'Aravena, M., Kimelman, E., Micheli, B., Torrealba, R., & Zúñiga, J. (2006). Investigación educativa I.',
      link: '',
    },
    {
      referencia:
        'Ballesteros, L. M. G., Restrepo, C. G., Rodríguez, V. A., de Castro, S. F., & Ponce, M. V. (2024). Investigación mixta:¿ qué es y qué no?. Revista Colombiana de Psiquiatría.',
      link: 'https://doi.org/10.1016/j.rcp.2024.04.002',
    },
    {
      referencia:
        'Bonilla-Castro, E. (2005). Más allá del dilema de los métodos: la investigación en ciencias sociales. Editorial Norma.',
      link: '',
    },
    {
      referencia:
        'Creswell, J. W. (2014). Research design: Qualitative, quantitative, and mixed methods approaches (4th ed.). SAGE Publications.',
      link: '',
    },
    {
      referencia:
        'Denzin, N. K., & Lincoln, Y. S. (2011). The SAGE Handbook of Qualitative Research. SAGE Publications.',
      link: '',
    },
    {
      referencia:
        'Flick, U. (2014). An introduction to qualitative research (5th ed.). SAGE Publications.',
      link: '',
    },
    {
      referencia:
        'Hernández-Sampieri, R., & Mendoza, C. P. (2018). Metodología de la investigación: Las rutas cuantitativa, cualitativa y mixta (6.ª ed.). McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Johnson, R. B., Onwuegbuzie, A. J., & Turner, L. A. (2007). Toward a definition of mixed methods research. Journal of Mixed Methods Research, 1(2), 112–133.',
      link: 'https://doi.org/10.1177/1558689806298224',
    },
    {
      referencia:
        'Patton, M. Q. (2015). Qualitative Research & Evaluation Methods. SAGE Publications.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'Este es el proceso de revisar y entender los datos que se han recogido. Los investigadores buscan patrones o tendencias en los datos',
    },
    {
      termino: 'Análisis de Contenido',
      significado:
        'Método cualitativo de interpretación sistemática de datos textuales, identificando patrones o temas relevantes',
    },
    {
      termino: 'Análisis Estadístico',
      significado:
        'Técnica cuantitativa que examina y organiza datos numéricos para validar hipótesis o descubrir patrones',
    },
    {
      termino: 'Codificación',
      significado:
        'Proceso de categorizar datos cualitativos para identificar patrones y conceptos en el análisis de información recopilada',
    },
    {
      termino: 'Datos',
      significado:
        'Los datos son la información que se recopila durante la investigación. Pueden ser números, palabras o imágenes que los investigadores analizan para sacar conclusiones',
    },
    {
      termino: 'Etnografía',
      significado:
        'Método cualitativo que estudia culturas y comunidades en su entorno natural a través de observación participante y entrevistas',
    },
    {
      termino: 'Fiabilidad',
      significado:
        'Consistencia de los resultados en estudios cuantitativos; mide la estabilidad y repetibilidad de los resultados obtenidos',
    },
    {
      termino: 'Hipótesis',
      significado:
        'Una hipótesis es una suposición que el investigador hace antes de comenzar su estudio. Es algo que se quiere probar o comprobar mediante la investigación',
    },
    {
      termino: 'Método Científico',
      significado:
        'Proceso sistemático de observación, experimentación y análisis para generar conocimiento válido y replicable',
    },
    {
      termino: 'Métodos de investigación',
      significado:
        'Esto se refiere a las formas en que los investigadores obtienen información. Los métodos pueden ser cualitativos (como entrevistas) o cuantitativos (como encuestas con números)',
    },
    {
      termino: 'Muestra',
      significado:
        'Grupo seleccionado que representa la población en estudio. Puede ser probabilística o no probabilística, según el método',
    },
    {
      termino: 'Muestreo',
      significado:
        'Proceso de selección de individuos o grupos que representan la población en estudio, esencial para generalizar resultados',
    },
    {
      termino: 'Observación Participante',
      significado:
        'Método cualitativo donde el investigador se integra en el entorno de estudio para observar y comprender comportamientos',
    },
    {
      termino: 'Paradigma',
      significado:
        'Conjunto de creencias y métodos que orientan la investigación, como el positivismo en cuantitativa o interpretativo en cualitativa',
    },
    {
      termino: 'Teoría Fundamentada',
      significado:
        'Método cualitativo para desarrollar teorías a partir de los datos recolectados y analizados durante el proceso de investigación',
    },
    {
      termino: 'Teoría Social',
      significado:
        'Marco conceptual que busca explicar y entender fenómenos sociales, como el funcionalismo o el estructuralismo',
    },
    {
      termino: 'Triangulación',
      significado:
        'Uso de múltiples métodos o fuentes para asegurar la validez y confiabilidad en la investigación cualitativa y mixta',
    },
    {
      termino: 'Validez',
      significado:
        'Grado en que los resultados reflejan la realidad estudiada; importante para asegurar la precisión en ambas metodologías',
    },
    {
      termino: 'Variables',
      significado:
        'Factores medibles en investigación cuantitativa que pueden variar y afectar los resultados del estudio',
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
