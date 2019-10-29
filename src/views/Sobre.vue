<template>
    <div>
    <Menu/>
    <v-content><v-container><h1 class="text-center mt-5">A Instituição Zappa Maestro</h1></v-container></v-content>
    <v-content  class="flex-row">
      <v-container>
        <v-row >
          <v-col  cols="12"
          md="6">
            <video  height="340" controls>
            <source src="../assets/video-zappa.mp4" type="video/mp4">
          </video>
          </v-col>
          <v-col cols="12"
          md="6">
            <div><h4>A escola de música” Zappa Maestro Instituto Musical” foi fundada no dia 13 de janeiro de 2014. Sendo idealizada em novembro de 2013, e fundada 2 meses em seguida.
              Após dois anos, Tiago Lucas e Saulo Diangelis, fizeram uma proposta de se associar a um professor que havia trabalhado com Tiago há alguns anos atrás, que acabou se juntando á eles dia 5 de dezembro de 2016. Completando no ano de 2019, dois anos de ’ Zappa Maestro Instituto Musical.’ Trabalhando em diversas áreas da música, ofertamos várias aulas de diferentes instrumentos. Tais como violão, viola caipira, guitarra, bateria e percussão, canto,técnica vocal, saxofone, teclado, piano, violino, flauta doce e transversal, clarinete, contrabaixo, ukulele.

              <br>O Instituto Zappa mantem seus idealizadores Tiago Lucas, Saulo DiAngelis, Rodrigo Cardoso.

              <br><br>Agora localizado no endereço: Rua Barão do Rio Branco, 131 - Centro - Jaboticabal SP (Duas quadras pra frente do Jaboticabal Shopping, uma quadra antes do Posto Shell).</h4>
            </div>
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
import Video from '../components/Video'

export default {
  components: {
    Menu,
    Video,
    Rodape
  },
  methods: {
    
  },
  
}
</script>