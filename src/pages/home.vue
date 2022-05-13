<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

export default {
  components: {
    Form,
    List
  },
  data() {
    return {
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
      ]
    }
  },
  mounted() {
    this.getNotes()
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    // * get / set notes
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    // * submit notes
    handleSubmit(title) {
      const note = {
        title: title,
        tags: []
      }
      this.notes.push(note)
    },
    // * remove note
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>
