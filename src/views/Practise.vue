<template>
  <v-main v-if="!shuffledTasks">
    <h1>Hier kann geübt werden</h1>
    <h2>Zum Starten den Knopf drücken</h2>
    <div>
      <v-btn
        rounded
        x-large
        color="primary"
        dark
        v-on:click="startPractise()"
      >
        Übung starten
      </v-btn>
    </div>
  </v-main>
  <v-main v-else>
    <div>
      <h1>Üben ist aktiv, derzeit {{ tasks.length }} Datensätze zum Üben ausgewählt</h1>
      <h2>Was siehst Du hier?</h2>
      <img :src="pics[currentData.pic]" /><br />
      <b>Name: </b><span v-if="entities >= 1">{{ currentData.name }}</span><br />
      <ul v-if="entities >= 1">
        <li v-for="entity in visibleEntities" v-bind:key="entity.name"><b>{{ entity.name }}</b>: {{ entity.value }}</li>
      </ul>
    </div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          class="ma-2"
          :disabled="finish"
          v-bind="attrs"
          v-on="on"
          @click="nextEntity"
        >
          Weiter
        </v-btn>
      </template>
      <span>Deckt die aktuelle Eigenschaft auf und zeigt die nächste Eigenschaft an</span>
    </v-tooltip>
    <div>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="warning"
            class="ma-2"
            :disabled="!finish || true"
            v-bind="attrs"
            v-on="on"
            @click="loader = 'loading3'"
          >
            Diese Übung abschließen
          </v-btn>
        </template>
        <span>Diese Übung wird nicht mehr erscheinen</span>
      </v-tooltip>
      <v-btn
        color="primary"
        class="ma-2"
        :disabled="!finish"
        @click="nextPractise"
      >
        Nächste Übung
      </v-btn>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="success"
            class="ma-2"
            :disabled="!finish || data.length === tasks.length || true"
            v-bind="attrs"
            v-on="on"
            @click="loader = 'loading4'"
          >
            Neue Übung
          </v-btn>
        </template>
        <span>Fügt eine neue Übung aus den erstellten Daten hinzu</span>
      </v-tooltip>
    </div>
    <div>
      <b>Informationen: </b><br />
      <i>Datensätze insgesamt: </i> {{ data.length }}<br />
      <i>Datensätze im Übungspool: </i> {{ tasks.length }}<br />
      <i>Datensätze offen: </i> {{ open.length }}<br />
      <i>Datensätze abgeschlossen: </i> {{ closed.length }}<br />
      <i>Dezeit aktiver Datensatz: </i> {{ shuffledTasks[currentPractise] }}<br />
    </div>
  </v-main>
</template>

<script>
export default {
  name: 'Practise',
  data () {
    return {
      pics: this.$store.state.pictures,
      data: this.$store.state.practises,
      shuffledTasks: undefined,
      entities: 0,
      currentPractise: 0
    }
  },
  computed: {
    tasks: function () {
      return this.$store.state.tasks
    },
    open: function () {
      return this.$store.state.open
    },
    closed: function () {
      return this.$store.state.closed
    },
    currentData: function () {
      return this.data[this.shuffledTasks[this.currentPractise]]
    },
    finish: function () {
      return this.entities >= this.currentData.entities.length + 1
    },
    visibleEntities: function () {
      const tmp = []
      let i = 0
      while (i < this.entities - 1) {
        tmp.push({ name: this.currentData.entities[i].name, value: this.currentData.entities[i].value })
        i++
      }
      if (i < this.currentData.entities.length) {
        tmp.push({ name: this.currentData.entities[i].name, value: '' })
      }
      return tmp
    }
  },
  methods: {
    startPractise () {
      const initialPractise = 5
      while (this.tasks.length < initialPractise && this.tasks.length < this.data.length) {
        this.addPractise()
      }
      this.shuffledTasks = this.shuffle(this.tasks)
      console.log(this.shuffledTasks)
    },
    shuffle (a) {
      var j, x, i
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[j]
        a[j] = x
      }
      return a
    },
    addPractise () {
      this.$store.commit('addTask')
    },
    nextEntity () {
      this.entities++
    },
    nextPractise () {
      if (this.currentPractise + 1 >= this.tasks.length) {
        alert('Du hast alle aktiven Übungen abgeschlossen, starte von vorne oder füge neue Aufgaben hinzu!')
        this.currentPractise = 0
      } else {
        this.currentPractise++
      }
      this.entities = 0
    }
  }
}
</script>
