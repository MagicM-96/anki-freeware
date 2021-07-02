<template>
  <v-main>
    <v-icon @click="$router.go(-1)" x-large>mdi-arrow-left-circle-outline</v-icon>
    <template>
      <h1>Daten verwalten</h1>
      <h2>Item anklicken zum Bearbeiten</h2>
      <ul>
        <li v-for="(item, i) in items" v-bind:key="item.name + item.pic"><a @click="$router.push('/data/edit/' + i)">{{ item.name }}</a></li>
      </ul>
    </template>
  </v-main>
</template>

<script>

export default {
  name: 'Manage',
  data () {
    return {
    }
  },
  computed: {
    items: function () {
      return this.sortItems(this.$store.state.practises)
    }
  },
  methods: {
    sortItems (items) {
      return items.sort((a, b) => a.name > b.name)
    }
  }
}
</script>
