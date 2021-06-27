<template>
  <v-main>
    <h1>Welcome to Anki Freeware</h1>
    <h2>The Anki where you can decide what you want to learn!</h2>
    <br />
    <div>
      <v-btn
        rounded
        x-large
        color="primary"
        dark
        v-on:click="$router.push('/practise')"
      >
        Übungen starten
      </v-btn>
    </div>
    <br />
    <div>
      <v-btn
        rounded
        x-large
        color="primary"
        dark
        v-on:click="$router.push('/data/create')"
      >
        Daten eintragen
      </v-btn>
    </div>
    <br />
    <div>
      <v-btn
        rounded
        x-large
        color="primary"
        dark
        v-on:click="$router.push('/expimp')"
      >
        Export / Import
      </v-btn>
    </div>
  </v-main>
</template>

<script>

export default {
  name: 'Home',

  components: {

  }
}
</script>
