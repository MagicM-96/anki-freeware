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
  <v-main v-else-if="!!shuffledTasks && tasks.length === 0">
    Du hast keine Aufgaben mehr. Du kannst jetzt hier von vorne starten:<br /><br />
    <v-btn
        rounded
        x-large
        color="primary"
        dark
        v-on:click="resetPractises()"
      >
        Neu starten
      </v-btn>
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
            :disabled="!finish"
            v-bind="attrs"
            v-on="on"
            @click="closeTask"
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
            :disabled="!finish || data.length <= tasks.length + closed.length"
            v-bind="attrs"
            v-on="on"
            @click="newPractise"
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
      <i>Aktuelle Aufgabenreihenfolge: </i> {{ shuffledTasks }}<br />
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
    startPractise (init) {
      this.currentPractise = 0
      this.entities = 0
      const initialPractise = init || 10
      while (this.tasks.length < initialPractise && this.tasks.length + this.closed.length < this.data.length) {
        this.addPractise()
      }
      this.shuffledTasks = this.shuffle(this.tasks)
      console.log(this.shuffledTasks)
    },
    shuffle (a) {
      var j, x, i, a2
      a2 = []
      a.forEach(element => {
        a2.push(element)
      })
      for (i = a2.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = a2[i]
        a2[i] = a2[j]
        a2[j] = x
      }
      return a2
    },
    addPractise () {
      this.$store.commit('addTask')
    },
    nextEntity () {
      this.entities++
    },
    nextPractise () {
      if (this.currentPractise + 1 >= this.shuffledTasks.length) {
        alert('Du hast alle aktiven Übungen abgeschlossen, starte von vorne oder füge neue Aufgaben hinzu!')
        this.startPractise(-1)
      } else {
        this.currentPractise++
        this.entities = 0
      }
    },
    newPractise () {
      this.addPractise()
      this.startPractise(-1)
    },
    closeTask () {
      if (confirm('Diese Übung wir nicht mehr angezeigt. Das kann nicht rückgängig gemacht werden!\nBist Du sicher?')) {
        const index = this.shuffledTasks[this.currentPractise]
        this.$store.commit('closeTask', index)
        this.nextPractise()
      }
    },
    resetPractises () {
      this.$store.commit('resetPractises')
      this.startPractise()
    }
  }
}
</script>
