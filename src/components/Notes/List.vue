<template>
  <Search />

  <div class="notes-list">
    <div
      class="note-item"
      :class="{ grid: getGrid }"
      v-for="note in getNotes"
      :key="note.id"
    >
      <div class="note-header">
        <p>{{ note.title }}</p>
        <p style="cursor: pointer" @click="onRemove(note.id)">&#10005;</p>
      </div>
      <div class="note-footer">
        <TagsList
          isPreview
          v-if="note.tags && note.tags.length > 0"
          :items="note.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
import Search from '@/components/UI/Search.vue'

export default {
  components: {
    TagsList,
    Search
  },
  mounted() {
    this.$store.getters.checkLocalStorage
  },
  computed: {
    getNotes() {
      return this.$store.getters.getNotes
    },
    getGrid() {
      return this.$store.getters.getGrid
    }
  },
  methods: {
    onRemove(id) {
      this.$store.dispatch('removeNote', id)
    }
  }
}
</script>

<style lang="scss">
.notes-list {
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &.grid {
    flex: 0 1 48%;
    margin-right: 10px;
  }
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
</style>
