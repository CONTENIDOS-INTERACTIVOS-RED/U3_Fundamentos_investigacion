<template lang="pug">
.curso-main-container.creditos-vista
  BannerInterno(subTitulo="SÍNTESIS")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4.mb-md-5 La Unidad I: Introducción a la investigación en ciencias sociales establece los fundamentos teóricos esenciales para comprender el papel de la investigación en el análisis y resolución de problemas sociales. A través de tres temas principales, se exploran las características fundamentales de la investigación en ciencias sociales, los diferentes tipos de metodologías (cualitativa, cuantitativa y mixta) y el rol crítico y ético que debe asumir el investigador. Esta unidad proporciona un enfoque integral que permite a los estudiantes adquirir las bases necesarias para identificar problemáticas, elegir enfoques metodológicos adecuados y aplicar estrategias reflexivas en la generación de conocimiento. Este conocimiento inicial es clave para avanzar en el desarrollo de competencias investigativas sólidas y aplicables en diversos contextos sociales.
    figure
      img(src='@/assets/componentes/sintesis.png', alt='Texto que describa la imagen')
    

</template>
<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
import Footer from '../../components/plantilla/Footer'
export default {
  name: 'Creditos',
  components: {
    BannerInterno,
    Footer,
  },
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
    creditosAdicionales() {
      return this.$config.creditosAdicionales
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos-vista
  .tarjeta.credito
    background-color: $color-sistema-d

.creditos
  color: $color-sistema-b
  overflow-x: auto

  &__item
    min-width: 490px

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-top-radius: $base-border-radius
    border-top-left-radius: $base-border-radius
    border-top-right-radius: $base-border-radius
  table
    td, th
      border-color: $color-sistema-d
</style>
