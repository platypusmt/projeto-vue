<template>
  <nav app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
              <v-app-bar-nav-icon color="black" @click="drawer = !drawer" ></v-app-bar-nav-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item @click="Inicial">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="Produtos">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Produtos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar height="80" color="black">
      <v-row class="d-flex justify-content-around">
          <v-col cols="1">
              <v-app-bar-nav-icon color="white" @click="drawer = !drawer" ></v-app-bar-nav-icon>
          </v-col>
          <v-col class="text-right pt-5">
                <v-toolbar-title class="white--text">Página do administrador</v-toolbar-title>
          </v-col>
          <v-col cols="1" class="text-right">
              <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      to="/"
                      v-on="on"
                      

                    >
                      <v-icon color='white'>mdi-logout</v-icon>
                    </v-btn>
                  </template>
                  <span>Sair do Acesso Administrativo</span>
                </v-tooltip>
          </v-col>
      </v-row>
        
        
    </v-toolbar>

    
   


  </nav>
</template>

<script>

  export default {
   
    data: () => ({
      drawer: null,
    }),
    methods: {
      Inicial () {
        this.$router.push('/painel')
      },
      Produtos () {
        this.$router.push('/painel/produtos')
      }
    },
  }
  
  
</script>