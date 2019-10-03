<template>
  <v-app>
    <Menu/>
    <Banner/>
    <Destaques/>
    <div class="pb-10">
    <Video/>
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
import Video from '../components/Video'
import BackTop from '../components/BackTop'
import Rodape from '../components/Rodape'

export default {
  components: {
    Menu,
    Banner,
    Destaques,
    Video,
    BackTop,
    Rodape
  },
  methods: {
    
  },
  
}
</script>
