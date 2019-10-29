<template>
  <v-app>
    <Menu/>
    <Banner/>
    <v-content>
      <v-container>
        <h1 class="pt-5 text-center">Conheça a Zappa Maestro</h1>
        <h3 class="text-center">Diversos cursos e atividades para todas as idades.</h3>
      </v-container>
    </v-content>
    <Destaques/>
    <Rodape/>
  </v-app>
</template>

<style>

</style>

<script>
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Destaques from '../components/Destaques'
import Rodape from '../components/Rodape'

export default {
  components: {
    Menu,
    Banner,
    Destaques,
    Rodape
  },
  
  
}
</script>
