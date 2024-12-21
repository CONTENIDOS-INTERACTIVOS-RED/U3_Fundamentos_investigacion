<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    p.mb-4 Bienvenidos a la asignatura, Fundamentos de investigación en ciencias sociales. Nos complace iniciar este viaje académico junto a ustedes. 
    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-4 En la primera unidad se desarrollan tres temas esenciales: 
        AcordionA(tipo="b")
          .div(titulo="Primer tema")
            p El primer tema se refiere a la definición y características de la investigación en ciencias sociales, donde abordaremos qué entendemos por investigación en este contexto, cómo se diferencia de otros tipos de investigación y cuál es su relevancia para el análisis de la sociedad. 
          .div(titulo="Segundo tema")
            p El segundo tema se refiere a los <strong>tipos de investigación;</strong> en esta sección, aprenderán a distinguir entre las principales metodologías empleadas en la investigación social: cualitativa, cuantitativa y mixta.
          .div(titulo="Tercer tema")
            p El tercer tema clave de esta unidad, se refiere al <strong>papel del investigador en las ciencias sociales.</strong> Aquí reflexionaremos sobre la importancia de la postura crítica y ética que debe adoptar el investigador.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')
    
    .row.mb-5
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p.mb-4 Al finalizar esta primera unidad, el estudiante habrá adquirido una comprensión amplia de los fundamentos de la investigación en ciencias sociales, será capaz de identificar las características claves de la misma, diferenciar los distintos tipos de metodologías y entender el rol que desempeña el investigador en la construcción del conocimiento. 
        .d-flex.align-items-start.bg-rojo.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") ¡Ánimo! El conocimiento es un viaje continuo, y esta primera unidad es solo el comienzo de un camino lleno de descubrimientos y aprendizajes que transformarán su manera de ver el mundo.

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
