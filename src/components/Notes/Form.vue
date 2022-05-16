<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="note.value" placeholder="Type ur note" />
      <TagsList @onItemClick="handleTagClick" :items="tags" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
export default {
  components: {
    TagsList
  },
  data() {
    return {
      note: {
        value: '',
        tags: []
      },
      tags: ['home', 'work', 'travel']
    }
  },
  methods: {
    onSubmit() {
      const title = this.note.value.trim()
      const tags = this.note.tags
      this.$store.dispatch('addNote', { title, tags })
      this.note.value = ''
      this.note.tags = []
      document
        .querySelectorAll('.tag-item')
        .forEach(tag => tag.classList.remove('isActive'))
    },
    handleTagClick(tag) {
      event.target.classList.toggle('isActive')
      if (!this.note.tags.includes(tag)) {
        this.note.tags.push(tag)
      } else {
        const tagIndex = this.note.tags.indexOf(tag)
        this.note.tags.splice(tagIndex, 1)
      }
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  & textarea {
    margin-bottom: 0;
  }
}
</style>
