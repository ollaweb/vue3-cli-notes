<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type your note" />
      <TagsList :items="getTags" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
export default {
  components: {
    TagsList,
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
    getTags() {
      return this.$store.getters.getTags
    }
  },
  methods: {
    onSubmit() {
      const title = this.value.trim()
      const tags = document
        .querySelector('.note-form')
        .querySelectorAll('.tag-item')
      const filterActiveTags = Array.from(tags).filter(tag =>
        tag.classList.contains('isActive')
      )
      const activeTags = filterActiveTags.map(tag => tag.textContent)
      this.$store
        .dispatch('addNote', { title, activeTags })
        .then(() => (this.value = ''))
        .then(() =>
          document
            .querySelectorAll('.tag-item')
            .forEach(tag => tag.classList.remove('isActive'))
        )
        .catch(err => console.log(err))
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
