<template>
    <nav>
        <v-toolbar height="80" color="black">
            <v-row class="d-flex justify-content-around">
                <v-col cols="1">
                    <v-app-bar-nav-icon color="white" @click="drawer = !drawer" ></v-app-bar-nav-icon>
                </v-col>
                <v-col class="text-center">
                    <router-link to="/">
                        <img height="50" src="../assets/logo.png" alt="">
                    </router-link>
                </v-col>
                <v-col cols="1" class="text-right">
                    <router-link to="./painel/login">
                        <v-btn icon>
                            <v-icon size="30" color="white">mdi-account-box</v-icon>
                        </v-btn>
                    </router-link>
                </v-col>
            </v-row>
           
            
        </v-toolbar>


        <v-navigation-drawer 
        v-model="drawer"
        app
        absolute
        temporary
        height="auto" width="100%"
        >
        
            <v-list dense >
                <v-list-item>
                <v-list-item-action>
                    <v-app-bar-nav-icon color="black" @click="drawer = !drawer" ></v-app-bar-nav-icon>
                </v-list-item-action>
                </v-list-item>
                <v-list-item @click="Homepage">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Página inicial</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
                <v-list-item @click="Cursos">
                <v-list-item-action>
                    <v-icon>mdi-guitar-electric</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Cursos</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
                <v-list-item @click="Professores">
                <v-list-item-action>
                    <v-icon>mdi-teach</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Professores</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
                <v-list-item @click="Sobre">
                <v-list-item-action>
                    <v-icon>mdi-information-outline</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Sobre</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
                <v-list-item @click="Login">
                <v-list-item-action>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Login</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
                            
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
  data() {
      return {
          drawer: false
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
        Sobre() {
            this.$router.push('/sobre')
        },
        Login() {
            this.$router.push('/painel/login')
        }
    }
}

</script>