<template>
    <div>
    <Menu/>
    <v-content>
        <v-container>
            <h1 class="text-center">Fale conosco</h1>
            <h3 class="text-center">Tire suas dúvidas aqui, em breve estaremos respondendo em seu e-mail.</h3>
  <form>
    <v-row>
        <v-col>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="25"
      label="Nome"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Tenho dúvidas sobre"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    </v-col>
    <v-col>
        <v-textarea
        v-model="text"
        class="mt-4"
        maxlength="240"
        full-width
        background-color="grey lighten-2"
        counter
        required
        :error-messages="textErrors"
      @change="$v.text.$touch()"
      @blur="$v.text.$touch()"
        >

        </v-textarea>
    </v-col>
    </v-row>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Deseja prosseguir?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
        </v-container>
    </v-content>
    <Rodape/>
  </div>
</template>
<style>
 .bordas{
     border: black;
     border: 1px;
     border-color: black;
 }
</style>
<script>
import Menu from '../components/Menu'
import Rodape from '../components/Rodape'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  components: {
    Menu,
    Rodape
  },
    mixins: [validationMixin],

    validations: {
      name: { required},
      email: { required, email },
      select: { required },
      text: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      text:'',
      items: [
        'Cursos',
        'Professores',
        'Produtos',
        'A Escola',
      ],
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('Você deve aceitar para continuar.')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Escolha uma das opções.')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('É necessário preecher o nome')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Use um e-mail válido.')
        !this.$v.email.required && errors.push('É necessário preencher o e-mail.')
        return errors
      },
      textErrors () {
        const errors = []
        if (!this.$v.text.$dirty) return errors
        !this.$v.text.required && errors.push('É necessário descrever suas dúvidas.')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>