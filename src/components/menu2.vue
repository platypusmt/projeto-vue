<template>
  <v-app id="inspire">
    <v-toolbar>
      <v-toolbar-title>Toolbar Mobile Menu</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn
          v-for="item in menu"
          :key="item.icon"
          :to="item.link"
          flat
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
             </v-list-tile-content>
          </v-list-tile>   
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <h1 class="display-1">Vuetify Mobile Navbar using v-menu</h1>
            <p>Quick example of collapsable mobile menu <tt>&lt;v-toolbar&gt;</tt>, with a <tt>&lt;v-menu&gt;</tt> for mobile screens.</p>
            
            <p>Also shows how to use <tt>.hidden-md-and-up</tt> CSS classes to appropriately hide/show the menu depending upon window width.</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
new Vue({
  data () {
    return {
      menu: [
        { icon: 'home', title: 'Link A' },
        { icon: 'info', title: 'Link B' },
        { icon: 'warning', title: 'Link C' }
      ]
    }
  },
  
  methods: {
    menuItems () {
      return this.menu
    }
  }
  
})
</script>