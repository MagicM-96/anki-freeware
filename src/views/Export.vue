<template>
  <v-main>
    <h1>Hier können die Daten exportiert & importiert werden</h1>
    <br />
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
    <br />
    <span>
      <div style="width: 200px;">
        <v-file-input
          accept=".json"
          label="Importdatei wählen"
          v-on:change="fileChange"
          ref="fileupload"
          :append-icon="importIcon"
        ></v-file-input>
      </div>
      <div>
        <v-btn
          rounded
          x-large
          color="primary"
          dark
          v-on:click="import_data()"
          :disabled="importFile === ''"
        >
          Import starten
        </v-btn>
      </div>
    </span>
    <div v-if="loading">
      <v-img src="@/assets/loading.gif" max-width="45" height="45"></v-img>
      <p>
        Import is running . . .
      </p>
    </div>
  </v-main>
</template>

<script>
export default {
  data: () => {
    return {
      importFile: '',
      importIcon: '',
      loading: false
    }
  },
  methods: {
    export_data () {
      const element = document.createElement('a')
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify({ data: this.$store.state.practises, pics: this.$store.state.pictures })))
      element.setAttribute('download', `anki_freeware_data_${(new Date()).toISOString()}.json`)

      element.style.display = 'none'
      document.body.appendChild(element)

      element.click()

      document.body.removeChild(element)
    },
    fileChange (e) {
      if (e) {
        this.importIcon = 'mdi-loading'
        const reader = new FileReader()
        reader.readAsText(e)
        reader.onload = () => this.fileSuccess(JSON.parse(reader.result))
        reader.onerror = error => this.fileError(error)
      } else {
        this.importIcon = ''
        this.importFile = ''
      }
    },
    fileSuccess (data) {
      console.log(data)
      this.importFile = data
      this.importIcon = 'mdi-checkbox-marked-circle'
    },
    fileError (error) {
      this.importIcon = 'mdi-cancel'
      console.error(error)
    },
    import_data () {
      if (this.importFile !== '') {
        if (window.confirm('Der Import überschreibt alle bestehenden Daten! Dieser Vorgang kann nicht rückgängig gemacht werden.\nFalls Daten vorhanden sind, sollte vorher ein Export durchgeführt werden!\nFortfahren?')) {
          this.loading = true
          const pictures = this.importFile.pics
          const data = this.importFile.data
          this.$store.commit('clearData')
          data.forEach((entry) => {
            this.$store.commit('createData', {
              name: entry.name,
              entities: entry.entities,
              picture: pictures[entry.pic],
              id: entry.pic
            })
          })
          this.loading = false
          this.$router.replace('/')
        }
      }
    }
  }
}
</script>
