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
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          class="ma-2"
          :disabled="finish"
          v-bind="attrs"
          v-on="on"
          @click="loader = 'loading'"
        >
          Nächste Eigenschaft
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
            @click="loader = 'loading3'"
          >
            Diese Übung ausblenden
          </v-btn>
        </template>
        <span>Diese Übung wird nicht mehr erscheinen</span>
      </v-tooltip>
      <v-btn
        color="primary"
        class="ma-2"
        :disabled="!finish"
        @click="loader = 'loading2'"
      >
        Nächste Übung
      </v-btn>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="success"
            class="ma-2"
            :disabled="!finish || data.length === tasks.length"
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
  </v-main>
</template>

<script>
export default {
  name: 'Practise',
  data () {
    return {
      pics: this.$store.state.pictures,
      data: this.$store.state.practises,
      length: this.$store.state.practises.length,
      shuffledTasks: undefined,
      finish: false
    }
  },
  computed: {
    tasks: function () {
      return this.$store.state.tasks
    },
    open: function () {
      return this.$store.state.open
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
    }
  }
}
</script>
