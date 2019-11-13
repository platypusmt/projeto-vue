<template>
    <div>
    <Menu/>
    <v-content><v-container><h1 class="text-center mt-5">Produtos e acessórios</h1>
    <p class="text-center">Adquira produtos Zappa e acessórios musicais nos melhores preços.</p></v-container></v-content>
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
          md="3"
          sm="4"
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
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-cart-arrow-down</v-icon>
              </v-btn>

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
  data: () => ({
      cards: [
        { title: 'Camiseta Zappa Maestro', src: require('../assets/camiseta.jpg'), flex: 12, to:'/', alt:'Camiseta com a estampa "Zappa Maestro"' },
        { title: 'Boné Zappa Maestro', src: require('../assets/bone.jpg'), flex: 12, to:'/', alt:'Boné com a estampa Zappa Maestro.' },
        { title: 'Afinador digital', src: require('../assets/afinador.jpg'), flex: 12, to:'/', alt:'Afinador de violão digital.' },
        { title: 'Palhetas diversas', src: require('../assets/palhetas.jpg'), flex: 12, to:'/', alt:'Diversas palhetas coloridas.' },
        { title: 'Camiseta Zappa Maestro', src: require('../assets/camiseta.jpg'), flex: 12, to:'/', alt:'Camiseta com a estampa "Zappa Maestro"' },
        { title: 'Boné Zappa Maestro', src: require('../assets/bone.jpg'), flex: 12, to:'/', alt:'Boné com a estampa Zappa Maestro.' },
        { title: 'Afinador digital', src: require('../assets/afinador.jpg'), flex: 12, to:'/', alt:'Afinador de violão digital.' },
        { title: 'Palhetas diversas', src: require('../assets/palhetas.jpg'), flex: 12, to:'/', alt:'Diversas palhetas coloridas.' },
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