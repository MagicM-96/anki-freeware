import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkTheme: false,
    version: {
      version: '0.0.3', // eslint-disable-next-line
      date: process.env.NODE_ENV === 'production' ? __BUILDDATE__ : '~deveplopment use~'
    },
    practises: [],
    pictures: {},
    tasks: []
  },
  mutations: {
    clearData (state) {
      state.practises = []
      state.pictures = {}
      state.tasks = []
    },
    loadSave (state, payload) {
      state.practises = payload.practises
    },
    loadPics (state, payload) {
      payload.forEach((picture) => {
        state.pictures[picture.id] = picture.data
      })
    },
    /*  addPractise (state, payload) {
      state.practises.push({
        pic: payload.pic || 'Picture is undefined',
        name: payload.name || 'Name is undefined',
        entities: payload.entities || []
      })
    }, */
    createData (state, payload) {
      state.practises.push({
        pic: payload.id || 'Picture is undefined',
        name: payload.name || 'Name is undefined',
        entities: payload.entities || []
      })
      state.pictures[payload.id] = payload.picture
    },
    editItem (state, payload) {
      state.practises[payload.index].pic = payload.id || 'Picture is undefined'
      state.practises[payload.index].name = payload.name || 'Name is undefined'
      state.practises[payload.index].entities = payload.entities || []
      state.pictures[payload.id] = payload.picture
    }
  },
  actions: {
  },
  modules: {
  }
})
