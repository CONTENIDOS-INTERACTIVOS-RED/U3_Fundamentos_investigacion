<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Métodos cuantitativos en investigación: encuestas y análisis de datos estadísticos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4  La investigación cuantitativa se centra en la recolección y análisis de datos numéricos para comprender fenómenos a través de mediciones precisas y objetivas. Su enfoque permite cuantificar patrones y realizar generalizaciones, basadas en los datos recolectados, lo que es fundamental en muchas áreas del conocimiento. Los métodos cuantitativos, como las encuestas y el análisis estadístico, se utilizan para responder preguntas de investigación específicas, que requieren resultados medibles y comprobables. (Hernández Sampieri et al., 2018)
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .bg-rojo.p-4.mb-4
          span Los métodos cuantitativos, a través de herramientas como las encuestas y el análisis de datos estadísticos, son esenciales en la investigación científica, especialmente en ciencias sociales. Estos métodos permiten cuantificar fenómenos, establecer relaciones entre variables y generar conclusiones basadas en datos empíricos, lo que los convierte en instrumentos indispensables para el conocimiento científico y la toma de decisiones basada en evidencia.
        span Ambos métodos, la encuesta y el análisis de datos estadísticos, son herramientas complementarias en la investigación cuantitativa en ciencias sociales. Las encuestas permiten obtener datos primarios sobre actitudes, opiniones y comportamientos, mientras que el análisis estadístico facilita la interpretación y validación de estos datos, brindando un marco estructurado para el análisis de grandes volúmenes de información.

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Encuestas como método cuantitativo


    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Las encuestas son una herramienta cuantitativa, utilizadas para recolectar datos de un grupo específico de personas que permiten obtener información de una muestra representativa de la población, en un tiempo y espacio determinados. Su aplicación se extiende a diversas áreas, como la sociología, la psicología, el marketing y la salud pública. A través de preguntas estandarizadas, las encuestas permiten obtener información que puede ser analizada estadísticamente, facilitando así la toma de decisiones informadas.
        p.mb-4 Su objetivo es el de recopilar datos específicos que puedan analizarse para identificar patrones o tendencias en una población mayor (Babbie, 2000). La encuesta cuantitativa está estructurada y estandarizada, permitiendo la comparación de respuestas entre los participantes.

        span En el diseño de encuestas, encontramos los siguientes elementos y consideraciones:

      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

    .bg-fondo-1.bg-full-width
      .px-5.pb-md-3.py-4

        .row
          .col-12.col-md-10.mx-auto
            SlyderF(columnas="col-12 col-lg-6 col-xl-4 py-4 px-3")
              div.custom-image-card.rounded-8px.pb-4
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-23.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Objetivos de la encuesta
                p.px-1.text-small.mb-0.d-flex.text-center Antes de crear la encuesta, se deben definir los objetivos de la investigación. ¿Qué información se busca obtener? Por eso, el primer paso en la elaboración de una encuesta es definir, claramente, los objetivos de investigación, para que cada pregunta esté alineada con los propósitos del estudio. (Malhotra, 2008)
              div.custom-image-card.rounded-8px.pb-4
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-24.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Selección de la muestra
                p.px-1.text-small.mb-0.d-flex.text-center La muestra debe representar a la población de estudio, utilizando métodos de muestreo que minimicen sesgos y permitan la generalización de resultados.
              div.custom-image-card.rounded-8px.pb-4
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Tipos de preguntas
                p.px-1.text-small.mb-0.d-flex.text-center Las preguntas pueden ser de opción múltiple, escala Likert, preguntas dicotómicas, entre otras, que facilitan la codificación y análisis de respuestas.
              div.custom-image-card.rounded-8px.pb-4
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Preguntas bien formuladas
                p.px-1.text-small.mb-0.d-flex.text-center Las preguntas deben ser claras, concisas y relevantes. Se pueden utilizar diferentes tipos de preguntas, como de opción múltiple, escala de Likert o preguntas abiertas.
              div.custom-image-card.rounded-8px.pb-4
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-27.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Estructura lógica
                p.px-1.text-small.mb-0.d-flex.text-center La organización de las preguntas debe seguir un flujo lógico, que facilite la comprensión y respuesta, por parte del encuestado.

    h2 Análisis de datos
    p.mb-4 Una vez finalizada la recolección de datos, es esencial proceder al análisis. Este proceso puede incluir:

    .row.mb-4.justify-content-center
      .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-28.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-bold.mb-4 Codificación de respuestas
            p.px-1.text-small.mb-0.d-flex Las respuestas abiertas pueden necesitar ser categorizadas, para facilitar su análisis.
      .col-10.col-md-8.col-lg-6.mx-auto.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-29.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-bold.mb-4 Análisis estadístico
            p.px-1.text-small.mb-0.d-flex Utilizando <i>software</i> especializado, los investigadores pueden realizar análisis descriptivos y analíticos, como tablas de frecuencia, correlaciones y regresiones.

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        h2  Desafíos de las encuestas
        p.mb-4 A pesar de sus ventajas, las encuestas también enfrentan desafíos:
        .bg-rojo.p-4
          ol.lista-ol--cuadro
            li.d-flex(data-aos="fade-up")
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 <b>Sesgo de respuesta.</b> Los encuestados pueden no responder de manera honesta, lo que afecta la validez de los datos.
            li.d-flex(data-aos="fade-up")
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 <b>Diseño deficiente.</b> Un mal diseño de la encuesta puede llevar a preguntas confusas, que dificulten la interpretación de los resultados. 
            li.d-flex(data-aos="fade-up")
              .lista-ol--cuadro__vineta
                span 3
              p.mb-0 <b>Tasa de respuesta.</b> Conseguir que una cantidad significativa de personas complete la encuesta, puede ser complicado, especialmente en encuestas en línea.

    h2 Ventajas y limitaciones de las encuestas
    p.mb-4 Las encuestas permiten recopilar grandes cantidades de datos de manera rápida y eficiente, y los resultados son cuantificables, lo que facilita su análisis estadístico y permite hacer generalizaciones (Alaminos-Fernández, 2023). Las encuestas presentan múltiples ventajas como método cuantitativo:

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-rojo.p-4
          ol.lista-ol--cuadro
            li.d-flex(data-aos="fade-up")
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 <b>Recopilación eficiente de datos.</b> Permiten obtener grandes volúmenes de datos, de manera rápida.
            li.d-flex(data-aos="fade-up")
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 <b>Análisis estadístico.</b> Los datos recolectados pueden ser analizados, utilizando diversas técnicas estadísticas, lo que ayuda a identificar patrones y tendencias.
            li.d-flex(data-aos="fade-up")
              .lista-ol--cuadro__vineta
                span 3
              p.mb-0 <b> Versatilidad.</b> Se pueden aplicar en diferentes contextos y adaptarse a diversas poblaciones.
            li.d-flex(data-aos="fade-up")
              .lista-ol--cuadro__vineta
                span 4
              p.mb-0 <b>Limitaciones.</b> Las encuestas pueden estar limitadas por el diseño de las preguntas y el mensaje de respuesta. Además, es difícil captar la profundidad de las opiniones y experiencias de los participantes, con preguntas cerradas.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    p.mb-4 A continuación, presentaremos algunos ejemplos de encuestas; estos ejemplos nos muestran cómo son herramientas útiles para recopilar datos numéricos sobre fenómenos sociales, permitiendo análisis estadísticos que ayudan a tomar decisiones informadas, en diferentes áreas.

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .bg-amarillo.p-4
          p.mb-4 Las encuestas son herramientas esenciales en la investigación social, ya que permiten recopilar datos relevantes y significativos para analizar comportamientos, percepciones y tendencias en diferentes contextos. En el PDF Ejemplos de encuestas, se presentan estudios aplicados a temas como el impacto de las redes sociales en la salud mental de los jóvenes, la satisfacción laboral en empresas y el comportamiento electoral en comunidades locales. A través de estos ejemplos, se destacan metodologías, objetivos y resultados esperados que ilustran cómo estructurar y aprovechar encuestas para obtener información cuantitativa útil en la toma de decisiones y el desarrollo de estrategias basadas en evidencia.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Ejemplos de encuestas.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Ejemplos de encuestas.

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Análisis de datos estadísticos

    p.mb-4 El análisis de datos estadísticos es un proceso de organización, procesamiento e interpretación de los datos numéricos, recolectados a través de encuestas u otros métodos cuantitativos. Su finalidad es identificar patrones, realizar inferencias y validar hipótesis planteadas. Las estadísticas descriptivas, como la media, la mediana y la moda, son comunes para resumir los datos, mientras que las estadísticas inferenciales permiten hacer generalizaciones y evaluar relaciones entre variables. (Field, 2009)

    .row.mb-4.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-33.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Estadística descriptiva
          p.px-1.text-small.mb-0.d-flex.text-center Incluye el cálculo de medidas centrales, dispersión y gráficos que facilitan la interpretación de datos, en la población estudiada.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-34.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Estadística inferencial
          p.px-1.text-small.mb-0.d-flex.text-center Utiliza pruebas estadísticas, como la t de <i>Student</i> o el ANOVA, para hacer inferencias sobre la población con base en los datos de la muestra.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-35.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Análisis de correlación y regresión
          p.px-1.text-small.mb-0.d-flex.text-center Evalúa la relación entre variables y, en el caso de la regresión, permite predecir el comportamiento de una variable con base en otra (Hair et al., 2010).

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-rojo.p-4
          p.text-bold.mb-4 Ventajas y desafíos del análisis estadístico:

          p.mb-4 ●  Ventajas. Los métodos estadísticos aportan rigor y permiten realizar predicciones y comparaciones que son cruciales, para validar hipótesis.

          p.mb-4 ●  Desafíos. Requieren un conocimiento profundo en estadística y metodología de investigación, y una interpretación adecuada de los resultados, evitando malentendidos o simplificaciones incorrectas (Cohen, 2013).
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .bg-amarillo.p-4
          p.mb-4 El análisis estadístico es una herramienta clave en las ciencias sociales, ya que permite interpretar datos, validar hipótesis y ofrecer información crítica para la toma de decisiones informadas. En el PDF Ejemplos de análisis estadístico, se exploran casos prácticos que ilustran el uso de técnicas estadísticas como la correlación de Pearson, pruebas t y regresión múltiple. A través de estos ejemplos, se muestra cómo identificar patrones en áreas como el acceso a la educación superior, la eficacia de programas sociales y la salud mental, contribuyendo al diseño de estrategias que respondan a las necesidades sociales de manera efectiva y basada en evidencia.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Ejemplos análisis estadístico.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Ejemplos de análisis estadístico.

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3  
        h2 La validación de instrumentos y las consideraciones éticas en métodos cuantitativos

    p.mb-4 El proceso de validación de instrumentos en métodos cuantitativos, es fundamental para garantizar la precisión y confiabilidad de los resultados obtenidos en investigaciones. La validación busca confirmar que el instrumento mide, de manera efectiva y consistente, el fenómeno o constructo de interés. La validación de instrumentos incluye diversas etapas y tipos de validez (como la de contenido, constructo y criterio) que aseguran que el instrumento es adecuado para medir el fenómeno específico dentro del contexto de la investigación. (Anastasi y Urbina, 1997; Sarmiento, Botero & Carvajal, 2013).
    h2 Fases del proceso de validación
    p.mb-4 El proceso de validación consta de varias fases que se deben seguir de manera sistemática, para asegurar que el instrumento tenga la calidad necesaria para la recolección de datos confiables. Estas fases son:

    ImagenInfografica.color-secundario.mb-5.d-md-none
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

      .tarjeta.bg-amarillo.p-4(x="16%" y="11%" numero="+")
        .h5.mb-2 Diseño y definición del instrumento
        p El proceso comienza con la conceptualización del constructo o fenómeno que se desea medir. Esta etapa implica realizar una revisión exhaustiva de la literatura existente, para establecer una definición clara y específica del constructo y, sobre esta base, desarrollar los ítems preliminares del instrumento. Los ítems deben alinearse claramente con los aspectos esenciales del concepto o fenómeno de interés. Quispe et al. (2023), explica que esta etapa es crucial para asegurar que el contenido inicial del instrumento, esté adecuadamente diseñado y relevante para la medición de las variables deseadas.
      .tarjeta.bg-amarillo.p-4(x="62.8%" y="30.8%" numero="+")
        .h5.mb-2 Validez de contenido 
        p La validez de contenido se refiere a si los ítems del instrumento representan adecuadamente el constructo que se desea medir. Este tipo de validez suele evaluarse con la ayuda de un panel de expertos en el tema y la medición. Los expertos revisan los ítems para verificar si estos cubren todas las dimensiones importantes del constructo, sugiriendo ajustes o eliminaciones de aquellos elementos que no se consideran relevantes o que sean redundantes. Sarmiento, Botero & Carvajal,(2013), subrayan que la validez de contenido es esencial en los estudios cuantitativos, dado que asegura que el instrumento cuenta con una base sólida para la medición precisa de las variables.
      .tarjeta.bg-amarillo.p-4(x="16%" y="50.3%" numero="+")
        .h5.mb-2 Prueba piloto y análisis estadístico inicial 
        p Una vez ajustados los ítems en función de la validación de contenido, el siguiente paso es aplicar el instrumento en una prueba piloto. La prueba piloto permite verificar la comprensión de los ítems por parte de los participantes y su relevancia para la medición del fenómeno. En esta fase, se utiliza una muestra representativa de la población objetivo para observar si existen problemas de interpretación o comprensión. Como señalan Muñiz & Fonseca-Pedrero (2019) y Hair et al. (2010), este paso ayuda a depurar el instrumento antes de aplicarlo a gran escala. Después de realizar los ajustes necesarios, se ejecutan análisis estadísticos preliminares, tales como el cálculo de la consistencia interna, mediante el coeficiente Alfa de Cronbach, para verificar la confiabilidad inicial del instrumento.
      .tarjeta.bg-amarillo.p-4(x="62.8%" y="69%" numero="+")
        .h5.mb-2 Validez de constructo 
        p La validación de constructo es el proceso mediante el cual se asegura que el instrumento realmente mide el constructo teórico que se pretende evaluar. Este tipo de validación suele realizarse mediante análisis factorial exploratorio y confirmatorio. El análisis factorial exploratorio ayuda a identificar la estructura subyacente de los ítems y reducir el número de elementos en caso de redundancia. El análisis factorial confirmatorio, por su parte, permite confirmar si la estructura identificada se ajusta al constructo teórico propuesto (Anastasi y Urbina, 1997). Según Sarmiento, Botero & Carvajal, (2013), la validez de constructo es clave en investigaciones cuantitativas, ya que permite evaluar si el instrumento se comporta de acuerdo con la teoría subyacente.
      .tarjeta.bg-amarillo.p-4(x="16%" y="89%" numero="+")
        .h5.mb-2 Validez de criterio 
        p La validez de criterio mide la relación del instrumento con un criterio externo, que es una medida o prueba independiente, considerada una referencia válida. Esta validación puede ser concurrente (si el criterio y el instrumento se miden al mismo tiempo) o predictiva (si el criterio se mide en un tiempo posterior). La validez de criterio es particularmente relevante, cuando se busca que el instrumento no solo mida un constructo abstracto, sino que también permita hacer predicciones o correlacionarse con otras variables importantes, en el contexto de la investigación. (Quispe et al. 2023; Hair et al., 2010 )
    
    ImagenInfografica.color-secundario.mb-5.d-none.d-md-block
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

      .tarjeta.bg-amarillo.p-4(x="11%" y="9%" numero="+")
        .h5.mb-2 Diseño y definición del instrumento
        p El proceso comienza con la conceptualización del constructo o fenómeno que se desea medir. Esta etapa implica realizar una revisión exhaustiva de la literatura existente, para establecer una definición clara y específica del constructo y, sobre esta base, desarrollar los ítems preliminares del instrumento. Los ítems deben alinearse claramente con los aspectos esenciales del concepto o fenómeno de interés. Quispe et al. (2023), explica que esta etapa es crucial para asegurar que el contenido inicial del instrumento, esté adecuadamente diseñado y relevante para la medición de las variables deseadas.
      .tarjeta.bg-amarillo.p-4(x="30.4%" y="87.3%" numero="+")
        .h5.mb-2 Validez de contenido 
        p La validez de contenido se refiere a si los ítems del instrumento representan adecuadamente el constructo que se desea medir. Este tipo de validez suele evaluarse con la ayuda de un panel de expertos en el tema y la medición. Los expertos revisan los ítems para verificar si estos cubren todas las dimensiones importantes del constructo, sugiriendo ajustes o eliminaciones de aquellos elementos que no se consideran relevantes o que sean redundantes. Sarmiento, Botero & Carvajal,(2013), subrayan que la validez de contenido es esencial en los estudios cuantitativos, dado que asegura que el instrumento cuenta con una base sólida para la medición precisa de las variables.
      .tarjeta.bg-amarillo.p-4(x="50%" y="9%" numero="+")
        .h5.mb-2 Prueba piloto y análisis estadístico inicial 
        p Una vez ajustados los ítems en función de la validación de contenido, el siguiente paso es aplicar el instrumento en una prueba piloto. La prueba piloto permite verificar la comprensión de los ítems por parte de los participantes y su relevancia para la medición del fenómeno. En esta fase, se utiliza una muestra representativa de la población objetivo para observar si existen problemas de interpretación o comprensión. Como señalan Muñiz & Fonseca-Pedrero (2019) y Hair et al. (2010), este paso ayuda a depurar el instrumento antes de aplicarlo a gran escala. Después de realizar los ajustes necesarios, se ejecutan análisis estadísticos preliminares, tales como el cálculo de la consistencia interna, mediante el coeficiente Alfa de Cronbach, para verificar la confiabilidad inicial del instrumento.
      .tarjeta.bg-amarillo.p-4(x="68.4%" y="87.3%" numero="+")
        .h5.mb-2 Validez de constructo 
        p La validación de constructo es el proceso mediante el cual se asegura que el instrumento realmente mide el constructo teórico que se pretende evaluar. Este tipo de validación suele realizarse mediante análisis factorial exploratorio y confirmatorio. El análisis factorial exploratorio ayuda a identificar la estructura subyacente de los ítems y reducir el número de elementos en caso de redundancia. El análisis factorial confirmatorio, por su parte, permite confirmar si la estructura identificada se ajusta al constructo teórico propuesto (Anastasi y Urbina, 1997). Según Sarmiento, Botero & Carvajal, (2013), la validez de constructo es clave en investigaciones cuantitativas, ya que permite evaluar si el instrumento se comporta de acuerdo con la teoría subyacente.
      .tarjeta.bg-amarillo.p-4(x="89%" y="9%" numero="+")
        .h5.mb-2 Validez de criterio 
        p La validez de criterio mide la relación del instrumento con un criterio externo, que es una medida o prueba independiente, considerada una referencia válida. Esta validación puede ser concurrente (si el criterio y el instrumento se miden al mismo tiempo) o predictiva (si el criterio se mide en un tiempo posterior). La validez de criterio es particularmente relevante, cuando se busca que el instrumento no solo mida un constructo abstracto, sino que también permita hacer predicciones o correlacionarse con otras variables importantes, en el contexto de la investigación. (Quispe et al. 2023; Hair et al., 2010 )

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        h2 Confiabilidad y consistencia interna del instrumento     
        span La confiabilidad es otro aspecto fundamental en la validación de un instrumento cuantitativo y se refiere a la consistencia de las mediciones a lo largo del tiempo o entre diferentes aplicadores, del mismo instrumento. Se evalúa comúnmente mediante el Alfa de Cronbach, que indica la consistencia interna de los artículos. Este coeficiente varía entre 0 y 1, donde un valor superior a 0,7 suele considerarse adecuado (Muñiz & Fonseca-Pedrero, 2019). Los resultados de confiabilidad y consistencia interna, aseguran que el instrumento es capaz de producir resultados estables y reproducibles, en distintas condiciones, lo cual es esencial para la validez de la investigación.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        h2 Ajustes y redefinición final
        p.mb-4 Una vez evaluadas y analizadas las propiedades psicométricas del instrumento en cuanto a validez y confiabilidad, se procede a realizar ajustes finales en los ítems, para optimizar la efectividad del instrumento. Los artículos que no cumplen con los estándares de validez o confiabilidad establecidos, deben ser revisados o eliminados.
        span Finalmente, el instrumento se ajusta y se prepara para su aplicación en la fase final de la recolección de datos, asegurando que cumple con los requisitos de precisión y consistencia, necesarios para su uso en investigaciones cuantitativas.

    .row.mb-5
      .col-12.col-xl-7(data-aos="fade-right")
        h2 Las consideraciones éticas
        p.mb-4 En la investigación cuantitativa, es fundamental que los datos obtenidos respeten la confidencialidad y el consentimiento informado de los participantes, para garantizar la ética en el proceso de investigación. 
        .bg-amarillo.p-4
          span Además, es importante que los resultados se presenten de manera objetiva y verídica, evitando cualquier manipulación de los datos que pudiera distorsionar la realidad. (Pérez, 2020)
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://idicap.com/ojs/index.php/ogmios/article/view/226/237") Faneite, S. F. A. (2023). Los enfoques de investigación en las Ciencias Sociales. Revista Latinoamericana Ogmios, 3(8), 82-95.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://revista.uniandes.edu.ec/ojs/index.php/METANOIA/article/view/2792/2132") Ramos Carpio, J. P., & Martinez Vasquez, A. B. (2022). Análisis estadístico de la participación social en la comunidad. METANOIA: REVISTA DE CIENCIA, TECNOLOGÍA E INNOVACIÓN, 8(1), 66–79.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://revistas.uni.edu.py/index.php/rseisa/article/view/276/231") Chaves, V. E. J. (2021). Triangulación metodológica cualitativa y cuantitativa.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40513") Baena Paz, G. M. E. (2017). Metodología de la investigación (3 ed.). Grupo Editorial Patria.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=x2uhRZzS4CE") Reyes-de Cózar, S., et al. (2018). Módulo 9 - Análisis de Datos Cuantitativos [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=eg6IeIXuMVw") Vergne, S. (2021). Recolección de datos: Técnicas cuantitativas [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')



</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
