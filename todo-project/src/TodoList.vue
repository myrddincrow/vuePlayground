<template>
  <div>
  <input type="text" class="todo-input" placeholder="what needs to be done" v-model="newTodo" @keyup.enter="addTodo"/>
 <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
   <div>
     {{ todo.title }}
   </div>
<div class="remove-item" @click="removeTodo(index)">
&times;
</div>
 </div>

  </div>
</template>

<script>
    export default {
        name: "TodoList",
      data (){
          return{
            newTodo:'',
            idForTodo: 3,
            todos: [
              {
                'id':1,
                'title':'Finish Vue Todo App',
                'completed':false,
              },
              {
                'id':2,
                'title':'Do stuff to this',
                'completed':false,
              },
            ]
          }
      },
      methods: {
          addTodo() {

            if (this.newTodo.trim().length == 0){
              return
            }

          this.todos.push({
            id: this.idForTodo,
            title: this.newTodo,
            completed: false,
          })
            this.newTodo = ''
            this.idForTodo++
          },
        removeTodo(index){
            this.todos.splice(index,1)
        }
      }
    }
</script>

<style lang="scss">
 .todo-input{
   width: 100%;
   padding: 10px 18px;
   font-size: 18px;
   margin-bottom: 16px;

   &:focus{
     outline: 0;
   }
 }

  .todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .remove-item {
    cursor: pointer;
    margin-left: 14px;
    &:hover{
      color:red;
    }
  }
</style>
