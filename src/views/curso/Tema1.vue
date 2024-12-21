<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'NOMBRE TEMA 3'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    p.mb-4 Para iniciar con el desarrollo de este primer tema, abordaremos una situación: imaginemos a un investigador que está interesado en comprender las causas y efectos del uso excesivo de redes sociales en adolescentes de una institución educativa, ubicada en cierta ciudad de Colombia. A través de la investigación, quiere responder preguntas como:

    .row.mb-5
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.align-items-start.bg-rojo.p-4.mb-4(data-aos="fade-right")
          .d-flex.flex-column
            div.d-flex
              img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0  ¿Por qué los adolescentes pasan tantas horas en las redes sociales?
            div.d-flex
              img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0  ¿Cómo afecta esto a su bienestar emocional y rendimiento escolar?
            div.d-flex
              img.mt-1.me-2.d-flex.align-self-base(style="width: 15px" src='@/assets/curso/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0  ¿Qué factores sociales influyen en el uso excesivo?
        p Evidentemente, para responder a estas preguntas, el investigador deberá realizar un estudio en donde tendrá que tomar decisiones acerca de cómo hacerlo; sin embargo, desde el inicio podemos decir que este es un típico caso de estudio de las ciencias sociales. Este ejemplo muestra cómo la investigación en ciencias sociales, puede identificar problemas actuales y ayudar a proponer soluciones para mejorar el bienestar de la sociedad.
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')  

    .row.mb-5
      .col-5.d-none.d-md-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        .bg-amarillo.p-4
          p.mb-4 La investigación en ciencias sociales es un proceso que permite comprender el comportamiento humano, las interacciones sociales y los fenómenos que impactan a nuestra sociedad. A continuación, el PDF <strong>La investigación en ciencias sociales</strong> , explora las características esenciales de esta disciplina, su importancia en la resolución de problemas sociales y su capacidad para informar decisiones basadas en evidencia. A través de ejemplos prácticos, se destaca cómo la investigación social contribuye al desarrollo de comunidades más equitativas y sostenibles.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> La investigación en ciencias sociales

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40513") Baena Paz, G. M. E. (2017). Metodología de la investigación: (3 ed.). Grupo Editorial Patria.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40363 ") Guerrero Dávila, G. (2015). Metodología de la investigación: ( ed.). Grupo Editorial Patria.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://revistascientificas.us.es/index.php/Ambitos/article/view/11736") Anguera, M. T., Blanco-Villaseñor, A., Losada, J. L., & Sánchez-Algarra, P. (2020). Integración de elementos cualitativos y cuantitativos en metodología observacional. Ámbitos. Revista Internacional de Comunicación, (49), 49-70. 
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')


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
