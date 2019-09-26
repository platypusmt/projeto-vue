<template>
  <v-app>
    <Menu/>
    <Banner/>
    <Destaques/>
    <Video/>
    <Rodape/>
  </v-app>
</template>

<style>

</style>

<script>
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Destaques from '../components/Destaques'
import Video from '../components/Video'
import Rodape from '../components/Rodape'

export default {
  components: {
    Menu,
    Banner,
    Destaques,
    Video,
    Rodape
  },
  methods: {
    
  },
  
}
</script>
