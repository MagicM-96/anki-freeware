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
    tasks: [],
    open: []
  },
  mutations: {
    clearData (state) {
      state.practises = []
      state.pictures = {}
      state.tasks = []
      state.open = []
    },
    loadSave (state, payload) {
      state.practises = payload.practises || []
      state.tasks = payload.tasks || []
      state.open = payload.open || []
      const praclen = state.practises.length
      const tasklen = state.tasks.length
      const oplen = state.open.length
      if (tasklen + oplen < praclen) {
        state.open = []
        for (let i = 0; i < praclen; i++) {
          if (state.tasks.indexOf(i) === -1) {
            state.open.push(i)
          }
        }
      }
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
