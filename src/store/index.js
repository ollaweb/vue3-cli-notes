import { createStore } from 'vuex'
import {
  getFromLocalStorage,
  setToLocalStorage
} from '@/utils/handleLocalStorage'

export const store = createStore({
  state: {
    notes: [
      {
        title: 'Learn Vue 3',
        tags: ['work']
      },
      {
        title: 'Finish Course',
        tags: ['work', 'home']
      },
      {
        title: 'Visit Museum',
        tags: ['travel']
      }
    ],
    tags: ['home', 'work', 'travel']
  },
  mutations: {
    addNote(state, { title, activeTags }) {
      const newNote = {
        title: title,
        tags: activeTags
      }
      state.notes.push(newNote)
      setToLocalStorage('notes', state.notes)
    },
    removeNote(state, index) {
      state.notes.splice(index, 1)
      setToLocalStorage('notes', state.notes)
    }
  },
  actions: {
    addNote({ commit }, { title, activeTags }) {
      commit('addNote', { title, activeTags })
    },
    removeNote({ commit }, index) {
      commit('removeNote', index)
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
      return state.notes
    },
    getTags(state) {
      return state.tags
    }
  }
})
