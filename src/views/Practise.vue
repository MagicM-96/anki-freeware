<template>
  <v-main>
    <h1>Hier können im Moment nur die Datensätze angesehen werden</h1>
    <h2>Im Moment wird Datensatz {{ currentIndex + 1 }} von {{ length }} angezeigt!</h2>
    <div>
      Name: {{ data[currentIndex].name }}<br />
      Eigenschaften:<br />
      <ul>
        <li v-for="entity in data[currentIndex].entities" v-bind:key="entity.name"><b>{{ entity.name }}</b>: {{ entity.value }}</li>
      </ul>
      Bild:<br />
      <img :src="pics[data[currentIndex].pic]" /><br />
    </div>
    <div>
      <v-btn
        rounded
        x-large
        color="primary"
        dark
        v-on:click="next()"
      >
        Nächster Datensatz
      </v-btn>
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
      currentIndex: Math.floor(Math.random() * this.$store.state.practises.length)
    }
  },
  methods: {
    next () {
      const tmp = this.currentIndex
      do {
        this.currentIndex = Math.floor(Math.random() * this.length)
      } while (tmp === this.currentIndex)
    }
  }
}
</script>
