<template>
  <v-content>
    <v-container>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Produtos</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <div class="flex-grow-1"></div>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Adicionar</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.name" label="Nome"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.calories" label="Marca"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.fat" label="Quantidade"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.carbs" label="Preço"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil 
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Resetar</v-btn>
    </template>
  </v-data-table>
  </v-container>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Item',
          align: 'left',
          sortable: false,
          value: 'nome',
        },
        { text: 'Marca', value: 'marca' },
        { text: 'Estoque', value: 'qtn' },
        { text: 'Preço', value: 'valor' },
        { text: 'Ações', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        nome: '',
        marca: '',
        qtn: 0,
        valor: 0,
      },
      defaultItem: {
        nome: '',
        marca: '',
        qtn: 0,
        valor: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            nome: 'Camiseta Zappa',
            marca: 'Zappa',
            qtn: 15,
            valor: 29.99,
          },
          {
            nome: 'Camiseta Zappa',
            marca: 'Zappa',
            qtn: 15,
            valor: 29.99,
          },
          {
            nome: 'Camiseta Zappa',
            marca: 'Zappa',
            qtn: 15,
            valor: 29.99,
          },
          {
            nome: 'Camiseta Zappa',
            marca: 'Zappa',
            qtn: 15,
            valor: 29.99,
          },
          {
            nome: 'Camiseta Zappa',
            marca: 'Zappa',
            qtn: 15,
            valor: 29.99,
          },
          {
            nome: 'Camiseta Zappa',
            marca: 'Zappa',
            qtn: 15,
            valor: 29.99,
          },
          {
            nome: 'Camiseta Zappa',
            marca: 'Zappa',
            qtn: 15,
            valor: 29.99,
          },
          {
            nome: 'Camiseta Zappa',
            marca: 'Zappa',
            qtn: 15,
            valor: 29.99,
          },
          {
            nome: 'Camiseta Zappa',
            marca: 'Zappa',
            qtn: 15,
            valor: 29.99,
          },
          {
            nome: 'Camiseta Zappa',
            marca: 'Zappa',
            qtn: 15,
            valor: 29.99,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>