<template>
  <div>
  <MenuAdm/>
  <Dados/>
  <Rodape/>
  </div>
</template>

<script>
  import MenuAdm from '../../components/Menu-Adm'
  import Dados from '../../components/Dados'
  import Rodape from '../../components/RodapeAdm'

  export default {
   
    components: {
      MenuAdm,
      Dados,
      Rodape
    }
  }
  
</script>