<template>
    <nav>
        <v-toolbar height="80" color="black" id="scroll-target">
            <v-row class="d-flex justify-content-around">
                <v-col  class="text-left">
                    <router-link to="/">
                        <img height="50" src="../assets/logo.png" alt="">
                    </router-link>
                </v-col>
                <v-col  class="hidden-sm-and-down mt-5">
                    <v-toolbar-items class="">
                        <v-btn @click="Cursos" color="black" class="white--text">Cursos</v-btn>
                        <v-btn @click="Professores" color="black" class="white--text">Professores</v-btn>
                        <v-btn @click="Vendas" color="black" class="white--text">Produtos</v-btn>
                        <v-btn @click="Sobre" color="black" class="white--text">Sobre</v-btn>
                        <v-btn @click="Login" color="black" class="white--text">Login</v-btn>
                        
                    </v-toolbar-items>
                </v-col>
                
                <v-col  class="text-right">
                    <v-app-bar-nav-icon class="hidden-md-and-up" color="white" @click="drawer = !drawer" ></v-app-bar-nav-icon>
                </v-col>
                
                
                
            </v-row>
           
            
        </v-toolbar>


        <v-navigation-drawer 
        v-model="drawer"
        app
        temporary
        right
        height="auto" width="100%"
        >
        
            <v-list dense class=" d-flex flex-column align-end">
                <v-list-item>
                <v-list-item-action>
                    <v-app-bar-nav-icon color="black" @click="drawer = !drawer" ></v-app-bar-nav-icon>
                </v-list-item-action>
                </v-list-item>
                <v-list-item @click="Homepage">
                <v-list-item-content>
                    <v-list-item-title>Página inicial</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                </v-list-item>
                <v-list-item @click="Cursos">
                <v-list-item-content>
                    <v-list-item-title>Cursos</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-guitar-electric</v-icon>
                </v-list-item-action>
                </v-list-item>
                <v-list-item @click="Professores">
                <v-list-item-content>
                    <v-list-item-title>Professores</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-teach</v-icon>
                </v-list-item-action>
                </v-list-item>
                <v-list-item @click="Vendas">
                <v-list-item-content>
                    <v-list-item-title>Produtos</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-shopping</v-icon>
                </v-list-item-action>
                </v-list-item>
                <v-list-item @click="Sobre">
                <v-list-item-content>
                    <v-list-item-title>Sobre</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-information-outline</v-icon>
                </v-list-item-action>
                </v-list-item>
                <v-list-item @click="Login">
                <v-list-item-content>
                    <v-list-item-title>Login</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-action>
                </v-list-item>
            </v-list>
                            
        </v-navigation-drawer>
    </nav>
</template>
<style>
 .fonte{
     font-size: 50px;
 }
</style>
<script>
export default {
  data() {
      return {
          drawer: null
      }
  },
  methods: {
        Homepage() {
            this.$router.push('/')
        },
        Cursos() {
        this.$router.push('/cursos')
        },
        Professores() {
            this.$router.push('/professores')
        },
        Vendas() {
            this.$router.push('/vendas')
        }
        ,
        Sobre() {
            this.$router.push('/sobre')
        },
        Login() {
            this.$router.push('/painel/login')
        }
    }
}

</script>