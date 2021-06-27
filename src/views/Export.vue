<template>
  <v-main>
    <h1>Hier können die Daten exportiert werden</h1>
    <div>
      <v-btn
        rounded
        x-large
        color="primary"
        dark
        v-on:click="export_data()"
      >
        Export starten
      </v-btn>
    </div>
  </v-main>
</template>

<script>
export default {
  methods: {
    export_data () {
      var element = document.createElement('a')
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify({ data: this.$store.state.practises, pics: this.$store.state.pictures })))
      element.setAttribute('download', `data_${(new Date()).toISOString()}.json`)

      element.style.display = 'none'
      document.body.appendChild(element)

      element.click()

      document.body.removeChild(element)
    }
  }
}
</script>
