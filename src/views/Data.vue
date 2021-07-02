<template>
  <v-main>
    <v-icon @click="$router.go(-1)" x-large>mdi-arrow-left-circle-outline</v-icon>
    <template v-if="view === 'create' || view === 'edit'">
      <h1 v-if="view === 'create'">Neue Daten erstellen</h1>
      <h1 v-else-if="view === 'edit'">Daten bearbeiten</h1>
      <v-text-field
        label="Name"
        :rules="rules"
        v-model="name"
        hint="Name des Objekts eingeben"
      ></v-text-field>
      <p>Eigenschaften</p>
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Wert</th>
            <th class="text-left">Bearbeiten</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in entities" :key="item.name + item.value">
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
            <td>
              <v-icon v-on:click="edit(item, i)" style="margin: 0px 10px;">mdi-pencil-outline</v-icon>
              <v-icon v-on:click="remove(i)">mdi-trash-can-outline</v-icon>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <v-container>
      <v-form ref="form" v-model="valid">
        <v-row
          align="center"
          justify="center">
          <v-col
            cols="5"
          >
            <v-text-field
              v-model="e_name"
              :rules="rules"
              hint="Z.B. bei 'U: symphysen nah' hier 'U' eintragen"
              label="Name"
              v-on:keyup.enter="add()"
            ></v-text-field>
          </v-col>

          <v-col
            cols="5"
          >
            <v-text-field
              v-model="e_value"
              :rules="rules"
              hint="Z.B. bei 'U: symphysen nah' hier 'symphysen nah' eintragen"
              label="Wert"
              v-on:keyup.enter="add()"
            ></v-text-field>
          </v-col>
          <v-col
            cols="2"
          >
            <v-icon v-on:click="add()">mdi-plus-outline</v-icon>
          </v-col>
        </v-row>
        </v-form>
    </v-container>
      <template>
        <v-file-input
          accept="image/*"
          label="Bild"
          v-on:change="imgChange"
          ref="fileupload"
        ></v-file-input>
        <img :src="picture" />
      </template>
      <br />
      <v-btn
        rounded
        x-large
        color="primary"
        dark
        v-on:click="createData()"
        v-if="view === 'create'"
      >
        Daten Hinzufügen
      </v-btn>
      <v-btn
        rounded
        x-large
        color="primary"
        dark
        v-on:click="saveData()"
        v-else-if="view === 'edit'"
      >
        Daten Speichern
      </v-btn>
    </template>
    <template v-else>
      <h1>Unknown action!</h1>
    </template>
  </v-main>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  name: 'Data',
  data () {
    return {
      view: this.$route.params.action,
      rules: [
        data => !!data || 'Feld wird benötigt!'
      ],
      picture: '',
      name: '',
      e_name: '',
      e_value: '',
      entities: [],
      valid: false
    }
  },
  computed: {
    activeItem: function () {
      return this.$store.state.practises[this.$route.params.item] || {}
    },
    itemPic: function () {
      return this.$store.state.pictures[this.activeItem.pic]
    }
  },
  mounted: function () {
    if (this.activeItem !== {}) {
      this.loadItem()
    }
  },
  methods: {
    createData () {
      if (!this.name || !this.picture || this.entities.length === 0) {
        alert('Es fehlen benötigte Daten!')
      } else {
        this.$store.commit('createData', { name: this.name, entities: this.entities, picture: this.picture, id: uuid() })
        this.name = ''
        this.picture = ''
        this.entities = []
        this.e_value = ''
        this.e_name = ''
        this.$refs.form.reset()
        this.$refs.fileupload.reset()
      }
    },
    saveData () {
      if (!this.name || !this.picture || this.entities.length === 0) {
        alert('Es fehlen benötigte Daten!')
      } else {
        this.$store.commit('editItem', { index: this.$route.params.item, oldPic: this.activeItem.pic, name: this.name, entities: this.entities, picture: this.picture, id: uuid() })
        this.$router.go(-1)
      }
    },
    loadItem () {
      this.name = this.activeItem.name
      this.entities = this.activeItem.entities
      this.picture = this.itemPic
    },
    imgChange (e) {
      if (e) {
        const toBase64 = new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(e)
          reader.onload = () => resolve(reader.result)
          reader.onerror = error => reject(error)
        })
        toBase64.then((data) => {
          this.picture = data
        }).catch((e) => console.log(e))
      }
    },
    add () {
      if (this.valid) {
        this.entities.push({ name: this.e_name.toString(), value: this.e_value.toString() })
        this.$refs.form.reset()
      }
    },
    edit (item, i) {
      this.e_name = item.name
      this.e_value = item.value
      this.entities.splice(i, 1)
    },
    remove (i) {
      console.log(this.entities, i)
      if (confirm(`Bist Du sicher, dass Du den Eintrag für "${this.entities[i].name}" unwiderruflich löschen willst?`)) {
        this.entities.splice(i, 1)
      }
    }
  }
}
</script>
