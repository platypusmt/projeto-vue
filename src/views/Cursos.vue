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
            <router-link :to="card.to">
            <v-img
              :src="card.src"
              :alt="card.alt"
              class="white--text"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                class="fill-height align-end"
                v-text="card.title"
              ></v-card-title>
            </v-img>
            </router-link>
            
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
        { title: 'Guitarra e Violão', src: require('../assets/guitar.jpg'), flex: 12, to:'/violao', alt:'Um homem tocando guitarra.' },
        { title: 'Bateria e Percusão', src: require('../assets/bateria.jpg'), flex: 12, to:'/cursos', alt:'Uma bateria completa.' },
        { title: 'Canto e Técnicas Vocais', src: require('../assets/canto.jpg'), flex: 12, to:'/cursos', alt:'Uma mulher cantando em um microfone.' },
        { title: 'Contrabaixo', src: require('../assets/bass.jpg'), flex: 12, to:'/cursos', alt:'Um homem tocando contrabaixo.' },
        { title: 'Piano e Teclado', src: require('../assets/piano.jpg'), flex: 12, to:'/cursos', alt:'Mãos de uma pessoa tocando piano.' },
        { title: 'Musicalização Infantil', src: require('../assets/musicalização.jpg'), flex: 12, to:'/cursos', alt:'Uma professora com três crianças tocando diversos instrumentos.' },
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