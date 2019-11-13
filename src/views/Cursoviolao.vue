<template>
    <div>
    <Menu/>
    <v-content>
       <v-container>
          <h1 class="text-center">Curso de Violão e Guitarra</h1>
          <v-row class="mt-5">
             
             <v-col class="mt-4" cols="12" md="7">
                <h2>Aprenda a tocar violão e guitarra de maneira simples, divertida e descomplicada.</h2>
                <h2>Conheça o instrumento, posições corretas e desenvolva habilidades.</h2>
                <p class="mt-4">• Aulas para todas as idades, crianças a partir de 5 anos.</p>
                <p>• Aulas individuais e em grupos.</p>
                <p>• Horários flexíveis.</p>
             </v-col>
             <v-col cols="12" md="5">
                <img class="curso" src="../assets/guitar.jpg" alt="Homem tocando guitarra.">
             </v-col>
            <v-col>
               
               
            </v-col>
          </v-row>
          
          <v-row class="text-center">
             <v-col>
                <v-btn color="secondary">
                  Tenho interesse nesse curso
                </v-btn>
             </v-col>
             <v-col>
                <v-btn color="secondary">
                  Conheça nossos Professores
                </v-btn>
             </v-col>
             <v-col>
                <v-btn to="/relatorio" color="secondary">
                  Dúvidas? Entre em contato
                </v-btn>
             </v-col>
          </v-row>
       </v-container>
    </v-content>
    <Rodape/>
  </div>
</template>
<style>
   .curso{
      width: 100%;
   }
</style>
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