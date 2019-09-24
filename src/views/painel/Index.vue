<template>
  <v-app>
  <MenuAdm/>
  
  <Rodape/>
  </v-app>
</template>

<script>
  import MenuAdm from '../../components/Menu-Adm'
  import Rodape from '../../components/Rodape'

  export default {
   
    components: {
      MenuAdm,
      Rodape
    }
  }
  
  
</script>