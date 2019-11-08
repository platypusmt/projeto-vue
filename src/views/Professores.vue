<template>
    <div>
    <Menu/>
    <v-content><v-container><h1 class="text-center mt-5">Professores Zappa</h1></v-container></v-content>
    <v-content>
      <v-container>
        <v-row>
          <v-col 
            cols="12"
            md="4"
            sm="6"
          >
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="../assets/tiago.jpg"
                alt="Foto do professor tocando bateria."
              >
                <v-card-title>Tiago Lucas</v-card-title>
              </v-img>


              <v-card-text class="text--primary">
                <div>Professor de bateria e cofundador do Institudo Zappa Maestro.</div>
              </v-card-text>

              <v-card-actions>
                <v-icon class="pl-2 pr-4" color="blue">mdi-facebook-box</v-icon>
                <v-icon class="pr-4" color="blue">mdi-twitter</v-icon>
                <v-icon color="blue">mdi-instagram</v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col 
            cols="12"
            md="4"
            sm="6"
          >
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="../assets/jazzy.jpg"
                alt="Foto da professora cantando ao microfone."
              >
                <v-card-title>Jazzy DiAngelis</v-card-title>
              </v-img>


              <v-card-text class="text--primary">
                <div>Professora de Canto e Técnicas Vocais. <br> Também auxilia em aulas de Musicalização Infantil</div>
              </v-card-text>

              <v-card-actions>
                <v-icon class="pl-2 pr-4" color="blue">mdi-facebook-box</v-icon>
                <v-icon class="pr-4" color="blue">mdi-twitter</v-icon>
                <v-icon color="blue">mdi-instagram</v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col 
            cols="12"
            md="4"
            sm="6"
          >
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="../assets/caio.jpg"
                alt="Foto do professor tocando violão."
              >
                <v-card-title>Caio Fabian</v-card-title>
              </v-img>

              <v-card-text class="text--primary">
                <div>Professor de Guitarra, Violão, dentro outros instrumentos de cordas, como Ukulele e Cavaquinho.</div>
              </v-card-text>

              <v-card-actions>
                <v-icon class="pl-2 pr-4" color="blue">mdi-facebook-box</v-icon>
                <v-icon class="pr-4" color="blue">mdi-twitter</v-icon>
                <v-icon color="blue">mdi-instagram</v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Rodape/>
  </div>
</template>

<script>
import Menu from '../components/Menu'
import Rodape from '../components/Rodape'

export default {
  components: {
    Menu,
    Rodape
  },
  methods: {
    
  },
  
}
</script>