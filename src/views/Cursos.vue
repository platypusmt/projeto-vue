<template>
    <div>
    <Menu/>
    <v-content><v-container><h1 class="text-center mt-5">Cursos Zappa</h1></v-container></v-content>
    <v-content>
    <v-container
      class="pa-5"
      fluid
    >
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
          md="4"
          sm="6"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                class="fill-height align-end"
                v-text="card.title"
              ></v-card-title>
            </v-img>

            
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
  data: () => ({
      cards: [
        { title: 'Guitarra e Violão', src: require('../assets/guitar.jpg'), flex: 12 },
        { title: 'Bateria e Percusão', src: require('../assets/bateria.jpg'), flex: 12 },
        { title: 'Canto e Técnicas Vocais', src: require('../assets/canto.jpg'), flex: 12 },
        { title: 'Contrabaixo', src: require('../assets/bass.jpg'), flex: 12 },
        { title: 'Piano e Teclado', src: require('../assets/piano.jpg'), flex: 12 },
        { title: 'Musicalização Infantil', src: require('../assets/musicalização.jpg'), flex: 12 },
      ],
  }),
  components: {
    Menu,
    Rodape
  },
  methods: {
    
  },
  
}
</script>