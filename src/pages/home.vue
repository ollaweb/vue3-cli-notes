<template>
  <Form @onSubmit="handleSubmit" />
  <List :items="notes" @onRemove="handleRemove" />
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
      notes: ['task 1', 'task 2', 'task 3']
    }
  },
  methods: {
    handleSubmit(note) {
      this.notes.push(note)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>
