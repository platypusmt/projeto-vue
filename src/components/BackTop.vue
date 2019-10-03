<template>
     
          <v-btn  
            v-scroll="onScroll"
            dark
            fixed
            bottom
            right
            color="red"
            @click="toTop"
            
            style="z-index: 9999"
          >
            Voltar ao topo
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
        
</template>

<script>
export default {
  data: () => ({
    fab: false
  }),

  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}

</script>