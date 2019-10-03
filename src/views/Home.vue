<template>
  <v-app>
    <Menu/>
    <Banner/>
    <Destaques/>
    <div class="pb-10">
    </div>
    <BackTop/>
    <Rodape/>
  </v-app>
</template>

<style>

</style>

<script>
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Destaques from '../components/Destaques'
import BackTop from '../components/BackTop'
import Rodape from '../components/Rodape'

export default {
  components: {
    Menu,
    Banner,
    Destaques,
    BackTop,
    Rodape
  },
  methods: {
    
  },
  
}
</script>
