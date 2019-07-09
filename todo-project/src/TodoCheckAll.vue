<template>
  <div><label><input type="checkbox" :checked="!anyRemaining" @change="allChecked" ref="selected"> {{ checkAll }} All</label></div>
</template>

<script>
    export default {
        name: "todo-check-all",
      data (){
        return{
          checkAll: 'Check',
        }
      },
      computed: {
        anyRemaining() {
       return this.$store.getters.anyRemaining
        }
      },
      methods:{
          allChecked(){
            this.$store.dispatch('checkAll', event.target.checked)

            if (this.$refs.selected.checked == true){
              return this.checkAll = 'Uncheck'
            } else {
              return this.checkAll = 'Check'
            }
          }
      }
    }
</script>

