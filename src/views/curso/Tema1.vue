<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Métodos cualitativos en investigación social: entrevistas, grupos focales y observación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 La investigación cualitativa se centra en la comprensión profunda de fenómenos sociales y culturales, explorando cómo los individuos interpretan y experimentan el mundo que los rodea. Estos métodos son especialmente útiles en ciencias sociales, porque permiten captar las percepciones, valores y emociones de los participantes, proporcionando una visión holística de la realidad estudiada (Hernández Sampieri et al., 2018). A través de entrevistas, grupos focales y observación, los investigadores logran captar matices y significados, que enriquecen el análisis de los datos.
        span Los métodos cualitativos son herramientas esenciales en las ciencias sociales, ofreciendo una visión profunda y significativa de los fenómenos humanos. Las entrevistas, grupos focales y la observación, permiten abordar la complejidad del comportamiento humano, algo que no siempre es posible captar, mediante métodos cuantitativos (Denzin y Lincoln, 2011). Al aplicar estos métodos, los investigadores pueden adaptar sus estrategias, según el contexto y los objetivos específicos del estudio, lo que es crucial para obtener datos relevantes y útiles en la investigación social.
    
    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Entrevistas como método cualitativo

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Las entrevistas cualitativas son encuentros donde el investigador y el participante dialogan sobre temas específicos. Este método busca captar la profundidad de las experiencias individuales y entender el sentido que los participantes otorgan a ciertos fenómenos (Taylor y Bogdan, 1987). Las entrevistas pueden ser estructuradas, semiestructuradas o abiertas, cada una variando en el nivel de flexibilidad y control del investigador, sobre el contenido.
        span Las entrevistas como método cualitativo son una herramienta poderosa para la investigación. Su flexibilidad, capacidad para generar confianza, y la profundidad de la información que proporcionan, son características que las distinguen de otros métodos. Sin embargo, es fundamental realizar estas entrevistas con un enfoque ético y responsable, para garantizar la validez de los datos y el bienestar de los participantes. Al comprender y aplicar estas características, los investigadores pueden obtener una comprensión más rica y matizada de los fenómenos que estudian.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
    
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .bg-amarillo.p-4
          p.mb-4 Las entrevistas constituyen una herramienta esencial en la investigación cualitativa, permitiendo a los investigadores obtener información detallada y contextualizada sobre experiencias, percepciones y opiniones individuales. En el PDF Características de las entrevistas, se exploran aspectos clave como la flexibilidad, la interacción personal, la recopilación de datos narrativos y las consideraciones éticas. A través de ejemplos prácticos, se destaca cómo este método facilita la exploración profunda de fenómenos sociales y personales, proporcionando una comprensión enriquecida y significativa del tema en estudio.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Características de las entrevistas.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen') 
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Características de las entrevistas.

    h2 Ventajas y desventajas
    p.mb-4 Las entrevistas facilitan una comunicación directa y permiten captar detalles subjetivos, aunque pueden ser costosas en tiempo y susceptibles a sesgos del entrevistador y del participante. Acorde con cada uno de los formatos, podemos decir lo siguiente:
    .row.mb-4.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-8.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Estructuradas
          p.px-1.text-small.mb-0.d-flex.text-center Proporcionan consistencia en la recolección de datos.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-8.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Semi-estructuradas
          p.px-1.text-small.mb-0.d-flex.text-center Ofrecen un equilibrio entre consistencia y flexibilidad.
      .col-10.col-md-8.col-lg-6.col-xl-4
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-8.svg', style="width: 80px")
          p.text-bold.mb-4.text-center No estructuradas
          p.px-1.text-small.mb-0.d-flex.text-center Permiten explorar temas inesperados en profundidad.

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Grupos focales en la investigación cualitativa     

    p.mb-4 Los grupos focales son una herramienta poderosa en la investigación cualitativa, proporcionando una plataforma para la interacción y el intercambio de ideas entre participantes. Al comprender sus características claves, los investigadores pueden diseñar y llevar a cabo, grupos focales que generen datos significativos y aplicables. 
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 A medida que las disciplinas continúan evolucionando, los grupos focales seguirán siendo un método valioso para explorar la complejidad de las percepciones humanas y las dinámicas sociales; es por eso que en investigación cualitativa, es ampliamente utilizada en diversas disciplinas, incluyendo sociología, psicología, y marketing. 

        p.mb-4 Este método permite a los investigadores recopilar datos significativos a través de discusiones en grupo, proporcionando una comprensión más profunda de las percepciones, actitudes y comportamientos de los participantes. 
        .bg-rojo.p-4
          span Los grupos focales son discusiones en grupo, guiadas por un moderador, diseñadas para captar las opiniones, percepciones y reacciones de los participantes, en torno a un tema específico. (Krueger, 2002)
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
    
    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 Ahora, para conocer las características de los grupos focales, lo invitamos a escuchar el siguiente <i>podcast</i>.
        TarjetaAudio.color-primario.bg-white.mb-3(
          texto="Características de los grupos focales"
          tiempo
          :audio="require('../../assets/componentes/audios/Características de grupos focales_mezcla.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )

    p.mb-4 El proceso de un grupo focal es el siguiente:
    .row.mb-4.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-11.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Selección de participantes
          p.px-1.text-small.mb-0.d-flex.text-center  Un grupo homogéneo con ciertas características (edad, género, profesión), para obtener perspectivas similares.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Moderación
          p.px-1.text-small.mb-0.d-flex.text-center El moderador debe ser hábil en la conducción de grupos y facilitar un ambiente de confianza para obtener respuestas sinceras. 
      .col-10.col-md-8.col-lg-6.col-xl-4
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Análisis de la dinámica grupal
          p.px-1.text-small.mb-0.d-flex.text-center Se analiza cómo las opiniones individuales se desarrollan o modifican en función de las opiniones de los demás participantes (Morgan, 1998).

    h2 Aplicaciones de los grupos focales
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Los grupos focales se utilizan en diversas áreas, incluyendo la investigación de mercado, la evaluación de programas, y la investigación social. En el ámbito del marketing, por ejemplo, las empresas utilizan grupos focales para obtener retroalimentación sobre productos nuevos, entender las preferencias de los consumidores, y explorar tendencias emergentes. En el contexto académico, los grupos focales pueden ser utilizados para evaluar programas educativos, comprender la experiencia estudiantil, y explorar actitudes hacia temas sociales.
        .bg-amarillo.p-4
          span <b>Ventajas y limitaciones.</b> Los grupos focales son útiles para obtener múltiples perspectivas en poco tiempo, pero pueden estar limitados por el control del moderador y la influencia social entre los participantes.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 La observación como técnica de investigación cualitativa     
    p.mb-4 La observación como técnica de investigación cualitativa, ofrece una ventana única para comprender fenómenos complejos en contextos sociales. Su enfoque inmersivo, flexible y reflexivo, permite a los investigadores captar detalles que enriquecen la comprensión de las interacciones humanas. A través de descripciones enriquecidas y un enfoque holístico, la observación se convierte en una herramienta poderosa, para explorar y analizar dinámicas sociales.

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 Este método se basa en la recopilación de datos a través de la observación directa, lo que permite a los investigadores captar matices que podrían pasar desapercibidos en otros métodos de investigación. 
        .bg-rojo.p-4.mb-4
          span La observación cualitativa, se basa en la recolección de datos mediante la inmersión del investigador en el entorno del participante, ya sea como observador externo o como participante activo (Angrosino, 2012). 
        span  Este método permite observar conductas en el contexto en que ocurren, sin las limitaciones de la autopercepción o el recuerdo, por lo que al utilizar esta técnica, los investigadores pueden contribuir considerablemente al cuerpo de conocimiento existente y ofrecer perspectivas valiosas sobre la experiencia humana.
    
    p.mb-4 A continuación, se describen las características más importantes de la observación, como técnica de investigación cualitativa:
    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Inmersión en el contexto")
            p.mb-4 La observación requiere que el investigador se sumerja en el entorno donde ocurre el fenómeno de estudio. Esta inmersión permite captar el contexto social, cultural y ambiental que influye en los comportamientos de los participantes. Al estar presente en el lugar, los investigadores pueden notar interacciones, dinámicas y detalles que proporcionan un entendimiento más profundo del tema investigado.
            span <b> Ejemplo.</b> Un investigador que estudia la interacción en un aula, debe observar no solo las conversaciones entre estudiantes y profesores, sino también el ambiente físico, la disposición de los muebles y el uso de recursos didácticos.
          .div(titulo="Recopilación no estructurada de datos")
            p.mb-4 La observación cualitativa, generalmente es no estructurada, lo que significa que los investigadores no siguen un guion rígido. Esto permite una flexibilidad que facilita el descubrimiento de nuevos temas y patrones, a medida que surgen durante la investigación. Los investigadores pueden adaptar su enfoque en función de lo que observan, lo que enriquece la calidad de los datos recopilados.

            spam <b> Ejemplo.</b> En lugar de observar solo la participación en clase, un investigador podría notar cómo los estudiantes usan su lenguaje corporal, sus expresiones faciales y su interacción con la tecnología, lo que puede ser relevante para el estudio.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Enfoque holístico")
            p.mb-4 La observación cualitativa adopta un enfoque holístico, considerando al individuo en su totalidad y cómo interactúa con su entorno. Esto significa que los investigadores no solo se enfocan en comportamientos individuales, sino también en las relaciones y las estructuras sociales que los rodean. Este enfoque permite comprender cómo influencias externas impactan en las acciones y actitudes de los participantes.

            span <b> Ejemplo.</b> Un estudio sobre la cultura organizacional en una empresa, no solo examinaría el comportamiento de los empleados, sino también cómo la cultura de la empresa, los valores y la misión, influyen en esos comportamientos.
          .div(titulo="Reflexividad del investigador")
            p.mb-4 La reflexividad es un componente crucial de la observación cualitativa. Los investigadores deben ser conscientes de su propia influencia en el proceso de investigación. Deben reflexionar sobre sus propias experiencias, prejuicios y suposiciones, puesto que estos pueden afectar la forma en que interpretan lo que observan. La reflexividad ayuda a minimizar sesgos y asegurar que la interpretación de los datos, sea lo más objetiva posible.

            span <b> Ejemplo.</b> Un investigador que tiene un fuerte sesgo hacia un enfoque pedagógico particular, debe ser consciente de cómo esto podría influir en su interpretación de las interacciones en el aula.
          .div(titulo="Descripción rica y detallada")
            p.mb-4 Una de las características más valiosas de la observación cualitativa es la capacidad de proporcionar descripciones enriquecidas y detalladas. Estos relatos descriptivos permiten a los lectores o a otros investigadores, comprender el contexto y la complejidad del fenómeno estudiado. Las descripciones no solo incluyen lo que se observa, sino también las emociones, reacciones y significados, que los participantes atribuyen a sus experiencias.
            span <b> Ejemplo.</b> En lugar de simplemente informar que los estudiantes estaban "distraídos", un investigador podría describir cómo algunos miraban sus teléfonos, otros hablaban entre sí y cómo esto afectaba la dinámica de la clase.

    p.mb-4 Los tipos de observación son:

    .row.mb-5.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Observación participante
          p.px-1.text-small.mb-0.d-flex.text-center El investigador se involucra en el contexto y puede influir en el mismo, obteniendo así una perspectiva interna.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-19.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Observación no participante
          p.px-1.text-small.mb-0.d-flex.text-center  El investigador se mantiene como un observador externo y minimiza su influencia sobre el ambiente y los participantes.
      .col-10.col-md-8.col-lg-6.col-xl-4
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Observación estructurada y no estructurada
          p.px-1.text-small.mb-0.d-flex.text-center Dependiendo de si se sigue un esquema preestablecido, o si se permite una flexibilidad, en lo que se observa.


    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://doi.org/10.35290/rcui.v8n1.2021.400") Sánchez, M. J., Fernández, M., & Diaz, J. C. (2021). Técnicas e instrumentos de recolección de información: análisis y procesamiento realizado por el investigador cualitativo. Revista científica UISRAEL, 8(1), 107-121.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://revistas.uni.edu.py/index.php/rseisa/article/view/276/231") Chaves, V. E. J. (2021). Triangulación metodológica cualitativa y cuantitativa. Revista sobre estudios e investigaciones del saber académico, (14), 76-81.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40513") Baena Paz, G. M. E. (2017). Metodología de la investigación (3 ed.). Grupo Editorial Patria.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40363") Guerrero Dávila, G. (2015). Metodología de la investigación. Grupo Editorial Patria.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=Key4-LZ7UiA") Vaquero e. (2020). Análisis de datos: Método cualitativo [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
