<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/" replace>
        <v-img src="@/assets/logo.png" max-width="45" height="45"></v-img>
      </router-link>
      &nbsp;
      <v-toolbar-title class="headline">
        <router-link to="/" replace>
          <span>Anki Freeware</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon v-on:click="() => $router.replace('/search')">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer
      padless
    >
      <v-card
        tile
        width="100%"
        class="lighten-1 text-center"
        elevation="5"
        app
      >
        <v-card-text>
          Version <router-link to="/about" replace>{{version.version}}</router-link> ({{version.date}})
          <br /> &copy; 2021 - {{new Date().getFullYear()}} — <a href="mailto:magicm-96@gmx.de"><strong>MagicM</strong></a>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import store from './store/index'

export default {
  name: 'App',
  data () {
    return {
      version: store.state.version
    }
  },
  methods: {
  }
}
</script>

<style scoped>
a {
  color: var(--v-anchor-link) !important;
}
</style>
