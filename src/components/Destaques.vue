<template>
<v-content>
    <v-container
      class="pa-5"
      fluid
    >
      <v-row>
        <v-col
          cols="12"
          md="4" 
        >
          <v-card to="/cursos"
          > 
            
            <v-img
              src="../assets/cursos.jpg"
              class="white--text"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                class="fill-height align-end"
                title="Cursos"
              ></v-card-title>
            </v-img>
            <v-card-title>Cursos</v-card-title>
            <v-card-text class="black--text">Conheça nossos diversos cursos e escolha o seu favorito.</v-card-text>
            
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-card to="/professores"
          >
            <v-img
              src="../assets/professor.jpg"
              class="white--text"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                class="fill-height align-end"
                title="Professores"
              ></v-card-title>
            </v-img>
            <v-card-title>Professores</v-card-title>
            <v-card-text class="black--text">Professores especializados em diversas áreas da música.</v-card-text>
            
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-card
          >
            <v-img
              src="../assets/musicalização.jpg"
              class="white--text"
              height="250px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                class="fill-height align-end"
                title="Musicalização Infantil"
              ></v-card-title>
            </v-img>
            <v-card-title>Musicalização Infantil</v-card-title>
            <v-card-text class="black--text">Traga seu filho para conhecer um novo mundo.</v-card-text>  
            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</v-content>
</template>


<script>
export default {
    data: () => ({
      cards: [
        { title: 'Cursos', src: require('../assets/cursos.jpg'), flex: 12},
        { title: 'Professores', src: require('../assets/professor.jpg'), flex: 12 },
        { title: 'Musicalização Infantil', src: require('../assets/musicalização.jpg'), flex: 12 },
      ],
    }),
    methods: {
    Cursos() {
    this.$router.push('/cursos')
    },
    Professores() {
        this.$router.push('/professores')
    },
    Sobre() {
        this.$router.push('/sobre')
    },
  },
}
</script>