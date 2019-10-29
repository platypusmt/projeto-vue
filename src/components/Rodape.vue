<template>
  <v-footer
    dark
    padless
    width="100%"
  >
    <v-card
      flat
      tile
      class="black lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <b>Zappa Maestro Instituto Musical localizada na Rua Barão do Rio Branco, 131 no Centro Jaboticabal-SP. <br>
        Venha nos visitar ou entre em contato por uma de nossas redes sociais. <br>
        Telefone: (16) XXXX-XXXX</b>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Fatec</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook-box',
        'mdi-twitter',
        'mdi-instagram',
      ],
    }),
  }
</script>