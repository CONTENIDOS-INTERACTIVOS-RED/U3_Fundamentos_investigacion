<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. El papel del investigador en las ciencias sociales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-amarillo.p-4
          p.mb-4 A continuación, en el PDF El papel del investigador, se presenta que la investigación cualitativa y cuantitativa son enfoques fundamentales en la generación de conocimiento, cada uno con características y roles específicos que los hacen valiosos según el propósito del estudio. Lo invitamos a consultar el documento para ampliar esta información.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer.w-fit(data-aos="zoom-in" :href="obtenerLink('/downloads/.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2.w-fit <strong>Anexo.</strong> El papel del investigador
      .col-5.d-none.d-md-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="http://www.scielo.org.co/scielo.php?pid=S0121-32612009000100010&script=sci_arttext") Abello Llanos, R. (2009). La investigación en ciencias sociales: sugerencias prácticas sobre el proceso. Investigación y desarrollo, 17(1), 208-229
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="http://scielo.senescyt.gob.ec/scielo.php?script=sci_arttext&pid=S2550-65872024000200077&lang=es") Barahona, G., León, V., & Barzola, Y. (2024). La intervención social en personas con situaciones vulnerables. Revista de Ciencias Humanísticas y Sociales (ReHuSo), 9(2), 77-91. 
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1405-94362023000200111&lang=es") Lione, S. V. (2023). Género, trabajo científico y reproducción social. Una aproximación conceptual para su abordaje en y desde la periferia. La ventana. Revista de estudios de género, 7(58), 111-145.
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
