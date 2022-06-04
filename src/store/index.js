import { createStore } from 'vuex'
import {
  getFromLocalStorage,
  setToLocalStorage
} from '@/utils/handleLocalStorage'
import uniqid from 'uniqid'

export const store = createStore({
  state: {
    notes: [
      {
        id: uniqid(),
        title: 'Learn Vue 3',
        tags: ['work']
      },
      {
        id: uniqid(),
        title: 'Finish Course',
        tags: ['work', 'home']
      },
      {
        id: uniqid(),
        title: 'Visit Museum',
        tags: ['travel']
      }
    ],
    tags: ['home', 'work', 'travel'],
    grid: false,
    search: ''
  },
  mutations: {
    addNote(state, { title, activeTags }) {
      const newNote = {
        id: uniqid(),
        title: title.trim(),
        tags: activeTags
      }
      state.notes.push(newNote)
      setToLocalStorage('notes', state.notes)
    },
    removeNote(state, id) {
      state.notes.splice(
        state.notes.findIndex(note => note.id === id),
        1
      )
      setToLocalStorage('notes', state.notes)
    },
    trueGrid(state) {
      state.grid = true
    },
    falseGrid(state) {
      state.grid = false
    },
    searchNote(state, value) {
      state.search = value.trim().toLowerCase()
    }
  },
  actions: {
    addNote({ commit }, { title, activeTags }) {
      commit('addNote', { title, activeTags })
    },
    removeNote({ commit }, id) {
      commit('removeNote', id)
    },
    trueGrid({ commit }) {
      commit('trueGrid')
    },
    falseGrid({ commit }) {
      commit('falseGrid')
    },
    searchNote({ commit }, value) {
      commit('searchNote', value)
    }
  },
  getters: {
    checkLocalStorage(state) {
      if (getFromLocalStorage('notes')) {
        const localNotes = getFromLocalStorage('notes')
        return (state.notes = localNotes)
      } else {
        return state.notes
      }
    },
    getNotes(state) {
      return state.search
        ? state.notes.filter(item => {
            if (item.title.toLowerCase().indexOf(state.search) !== -1) {
              return item
            }
          })
        : state.notes
    },
    getTags(state) {
      return state.tags
    },
    getGrid(state) {
      return state.grid
    }
  }
})
