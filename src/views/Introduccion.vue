<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Queridos estudiantes, sean todos ustedes bienvenidos a nuestra tercera Unidad académica, <b>Técnicas y métodos de investigación en ciencias sociales.</b> En el campo de las ciencias sociales, comprender y aplicar diversas técnicas y métodos de investigación, es fundamental para explorar fenómenos complejos que afectan a individuos y sociedades. 
        p.mb-4 Esta unidad se organiza en tres grandes secciones:  
        .bg-rojo.p-4
          ol.lista-ol--cuadro
            li.d-flex(data-aos="fade-up")
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 Primero, el estudio de los métodos cualitativos (entrevistas, grupos focales y observación).
            li.d-flex(data-aos="fade-up")
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 Luego, los métodos cuantitativos (encuestas y análisis estadísticos).
            li.d-flex(data-aos="fade-up")
              .lista-ol--cuadro__vineta
                span 3
              p.mb-0 Finalmente, la triangulación de datos en investigaciones mixtas, que ofrece una perspectiva integradora.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 La unidad, proporciona una introducción detallada a los principales enfoques cualitativos, cuantitativos y mixtos, cada uno con sus propios métodos y técnicas de recolección y análisis de datos. El aprendizaje y dominio de estos métodos es esencial no solo para la investigación académica, sino también para prácticas profesionales en áreas como la sociología, psicología, trabajo social y otras disciplinas que requieren un entendimiento profundo de la conducta y estructuras sociales.
        .bg-amarillo.p-4.mb-4 
          span Al finalizar esta unidad, se espera que el estudiante sea capaz de identificar y aplicar los métodos de investigación que mejor se ajusten a sus preguntas y objetivos específicos de estudio. 
        span Como estudiantes, adquirirán habilidades para diseñar, conducir y analizar entrevistas, grupos focales y observaciones en el marco cualitativo; para aplicar encuestas y análisis estadísticos en el contexto cuantitativo; y para utilizar la triangulación de datos en investigaciones mixtas, integrando múltiples perspectivas, para obtener resultados más completos y válidos. 
    
    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rojo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 El estudio de estas técnicas resulta motivador al permitir que se apliquen metodologías reales que se utilizan en el ámbito profesional. Por ejemplo, los métodos de observación y entrevistas se aplican en estudios de mercado y diagnóstico social, mientras que las encuestas y análisis estadísticos son esenciales en políticas públicas y planificación organizacional. La posibilidad de aplicar estos métodos en situaciones prácticas, no solo enriquece la experiencia de aprendizaje, sino que también los prepara para contribuir, efectivamente, en sus futuros campos de trabajo, abordando problemas y tomando decisiones fundamentadas.

    .row.mb-4 
      .col-12.col-xl-7(data-aos="fade-right")
        span Cada sección incluye actividades prácticas, como ejercicios de simulación y análisis de casos, que requieren de su participación activa como estudiante y el cumplimiento de ciertos requisitos previos, de lectura y preparación. La expectativa es que, con compromiso y dedicación, se logre un entendimiento integral de estos métodos y su aplicación, sentando así una base sólida para sus futuros proyectos de investigación en ciencias sociales, permitiendo que desarrollen competencias, tanto teóricas como prácticas, mejorando su capacidad para producir investigaciones fundamentadas y éticamente responsables.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
