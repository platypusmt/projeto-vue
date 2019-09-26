<template>
  <div>
  <MenuAdm/>

  <v-content>
    <v-container>
      Index
    </v-container>
  </v-content>

  <Rodape/>
  </div>
</template>

<script>
  import MenuAdm from '../../components/Menu-Adm'
  import Rodape from '../../components/RodapeAdm'

  export default {
   
    components: {
      MenuAdm,
      Rodape
    }
  }
  
  
</script>