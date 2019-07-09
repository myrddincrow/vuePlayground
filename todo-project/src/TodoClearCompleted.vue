<template>
  <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
</template>

<script>
  export default {
    name: "todo-clear-completed",
    computed: {
      showClearCompletedButton() {
        return this.$store.getters.showCompletedButton
      }
    },
    methods:{
      clearCompleted(){
        this.$store.dispatch('clearCompleted')
      }
    }
  }
</script>

