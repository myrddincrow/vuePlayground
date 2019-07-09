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
      props: {
        anyRemaining: {
          type: Boolean,
          required: true,
        }
      },
      methods:{
          allChecked(){
            eventBus.$emit('checkAllChanged', this.anyRemaining)

            if (this.$refs.selected.checked == true){
              return this.checkAll = 'Uncheck'
            } else {
              return this.checkAll = 'Check'
            }
          }
      }
    }
</script>

