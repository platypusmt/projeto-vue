<template>
  <div>
  <MenuAdm/>

  <v-content>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <p>
            Olá <b>{{ user.nome }}</b>, seja bem-vindo!
          </p>
          <p>
            <a :href="`mailto:${user.email}`">{{ user.email }}</a>
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center" >
          <h1>Página inicial</h1>
        </v-col>
      </v-row>
    </v-container>
  </v-content>

  </div>
</template>

<script>
  import MenuAdm from '../../components/Menu-Adm'

  export default {
    computed: {
    user () {
      return this.$ls.get('user')
    }
  },
    components: {
      MenuAdm
    }
  }
  
  
</script>