<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="black"
                dark
                flat
              >
                <v-toolbar-title>Acesso administrativo</v-toolbar-title>
                <div class="flex-grow-1"></div>
                
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      to="/"
                      v-on="on"
                    >
                      <v-icon>mdi-home</v-icon>
                    </v-btn>
                  </template>
                  <span>Retornar à página inicial</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Usuário"
                    v-model="login"
                    prepend-icon="mdi-account-box"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Senha"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                  <v-alert 
                  transition="scale-transition" 
                  type="error" 
                  :value="!!alerta">
                  
                  {{ alerta}}

                  </v-alert>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="secondary" @click="acessar">Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      login: '',
      password: '',
      alerta: ''
    }
  },
  methods: {
    acessar () {
      if (this.login === 'zappa' && this.password === '123') {
        this.$ls.set('user', {
          login: this.login,
          nome: 'Ewerton Seixas',
          email: 'seixas.ewerton@hotmail.com'
        })
        this.$router.push('/painel')
      } else {
        this.alerta = 'Usuário ou senha não correspondentes.'
      }
    }
  }
}
</script>
