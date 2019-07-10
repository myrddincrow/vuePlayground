<template>
  <div><label><input type="checkbox" :checked="!anyRemaining" @change="allChecked" ref="selected"> {{ checks }} All</label></div>
</template>

<script>
    export default {
        name: "todo-check-all",
      data (){
        return{
          checks: 'Check',
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
              return this.checks = 'Uncheck'
            } else {
              return this.checks = 'Check'
            }
          }
      }
    }
</script>

