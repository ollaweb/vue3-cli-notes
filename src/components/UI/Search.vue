<template>
  <div class="wrapper__search">
    <!-- Search -->
    <div class="search">
      <div class="search-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
    <!-- Search input -->
    <input
      type="text"
      placeholder="Find your note"
      @input="onSearch"
      v-model="value"
    />
    <!-- Show notes icons -->
    <div class="notes-show">
      <svg
        :class="{ active: !getGrid }"
        @click="onFalseGrid"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3" y2="6"></line>
        <line x1="3" y1="12" x2="3" y2="12"></line>
        <line x1="3" y1="18" x2="3" y2="18"></line></svg
      >.
      <svg
        :class="{ active: getGrid }"
        @click="onTrueGrid"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { value: '' }
  },
  computed: {
    getGrid() {
      return this.$store.getters.getGrid
    }
  },
  methods: {
    onTrueGrid() {
      this.$store.dispatch('trueGrid')
    },
    onFalseGrid() {
      this.$store.dispatch('falseGrid')
    },
    onSearch() {
      this.$store
        .dispatch('searchNote', this.value)
    }
  }
}
</script>

<style lang="scss">
/* Search */
.wrapper__search {
  margin-top: 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
    color: #e4e4e4;
  }
  & input {
    padding: 16px 16px 16px 56px !important;
    margin-bottom: 0px;
    border-radius: 30px;
    color: #909399;
    font-size: 16px;
    min-width: 400px;
    height: auto;
    @media (max-width: 640px) {
      flex: 0 1 75%;
      min-width: auto;
    }
  }
}
.search {
  top: 0px;
  bottom: 0px;
  left: 0px;
  position: absolute;
}
.search-icon {
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  display: flex;
}

.notes-show {
  text-align: right;
  flex: 0 1 25%;
  & svg {
    color: #999;
    cursor: pointer;
    &.active {
      color: #0e39c9;
    }
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  // @media (max-width:640px) {
  //   flex: 0 1 30%;
  // }
}
</style>
