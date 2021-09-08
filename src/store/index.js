import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkTheme: false,
    version: {
      version: '0.1.2', // eslint-disable-next-line
      date: process.env.NODE_ENV === 'production' ? __BUILDDATE__ : '~deveplopment use~'
    },
    practises: [],
    pictures: {},
    tasks: [],
    open: [],
    closed: []
  },
  mutations: {
    clearData (state) {
      state.practises = []
      state.pictures = {}
      state.tasks = []
      state.open = []
      state.closed = []
    },
    loadSave (state, payload) {
      state.practises = payload.practises || []
      state.tasks = payload.tasks || []
      state.open = payload.open || []
      state.closed = payload.closed || []
      const praclen = state.practises.length
      const tasklen = state.tasks.length
      const oplen = state.open.length
      const closlen = state.closed.length
      if (tasklen + oplen + closlen < praclen) {
        state.open = []
        for (let i = 0; i < praclen; i++) {
          if (state.tasks.indexOf(i) === -1 && state.closed.indexOf(i) === -1) {
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
    addTask (state) {
      if (state.open.length > 0) {
        const newprac = Math.floor(Math.random() * state.open.length)
        state.tasks.push(state.open[newprac])
        state.open.splice(newprac, 1)
      }
    },
    closeTask (state, taskID) {
      if (taskID < state.practises.length) {
        const index = state.tasks.indexOf(taskID)
        if (index !== -1) {
          state.tasks.splice(index, 1)
          state.closed.push(taskID)
        } else {
          console.error('Could not find taskID in tasks: ' + taskID)
        }
      } else {
        alert('Task could not be closed, unknown taskID: ' + taskID)
      }
    },
    resetPractises (state) {
      state.tasks = []
      state.open = []
      state.closed = []
      if (state.practises.length > 0) {
        for (let i = 0; i < state.practises.length; i++) {
          state.open.push(i)
        }
      }
    },
    /*  addPractise (state, payload) {
      state.practises.push({
        pic: payload.pic || 'Picture is undefined',
        name: payload.name || 'Name is undefined',
        entities: payload.entities || []
      })
    }, */
    createData (state, payload) {
      state.open.push(state.practises.length)
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
