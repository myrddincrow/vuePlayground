<template>
  <div>
  <input type="text" class="todo-input" placeholder="add new todo item here " v-model="newTodo" @keyup.enter="addTodo">
 <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <todo-item v-for="(todo, index) in todosFiltered" :key="todo.id" :todo="todo" :index="index" :checkAll="!anyRemaining" @removedTodo="removeTodo" @finishedEdit="finishedEdit">
 </todo-item>
 </transition-group>

    <div class="extra-container">
      <div><label><input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos" ref="selected"> {{ checkAll }} All</label></div>
      <div>{{ remaining }} items left</div>
    </div>

    <div class="extra-container">
      <div>
        <button :class="{ active: filter == 'all' }" @click="filter = 'all'">All</button>
        <button :class="{ active: filter == 'active' }" @click="filter = 'active'">Active</button>
        <button :class="{ active: filter == 'completed' }" @click="filter = 'completed'">Completed</button>

      </div>

      <div>
      <transition name="fade">
        <button v-if="showCompletedButton" @click="clearCompleted">Clear Completed</button>
      </transition>
      </div>


    </div>

  </div>
</template>

<script>
  import TodoItem from './TodoItem'
    export default {
        name: "TodoList",
      components: {
          TodoItem,
      },
      data (){
          return{
            newTodo:'',
            idForTodo: 3,
            beforeEditCache:'',
            filter: 'all',
            checkAll: 'Check',
            todos: [
              {
                'id':1,
                'title':'Todo Sample Item',
                'completed':false,
                'editing':false,
              },
            ]
          }
      },
      computed:{
        remaining(){
          return this.todos.filter(todo => !todo.completed).length
        },
        anyRemaining(){
          return this.remaining != 0
        },
        todosFiltered(){
          if (this.filter == 'all'){
            return this.todos
          } else if(this.filter == 'active') {
            return this.todos.filter(todo => !todo.completed)
          } else if(this.filter == 'completed') {
            return this.todos.filter(todo => todo.completed)
          }
          return this.todos
        },
        showCompletedButton(){
          return this.todos.filter(todo => todo.completed).length > 0
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
            editing: false,
          })
            this.newTodo = ''
            this.idForTodo++
          },

        removeTodo(index){
            this.todos.splice(index,1)
        },

        checkAllTodos(){
          this.todos.forEach((todo) => todo.completed = event.target.checked)
          if (this.$refs.selected.checked == true){
            return this.checkAll = 'Uncheck'
          } else {
            return this.checkAll = 'Check'
          }

        },

        clearCompleted(){
            this.todos = this.todos.filter(todo => !todo.completed)
        },

        finishedEdit(data){
            this.todos.splice(data.index, 1, data.todo)
        }


      }
    }
</script>

<style lang="scss">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

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
    animation-duration: 0.3s;
  }

  .remove-item {
    cursor: pointer;
    margin-left: 14px;
    &:hover{
      color:red;
    }
  }  .edit-item {
    cursor: pointer;
         margin-left: 14px;
         &:hover{
      color:green;
    }
  }
    .todo-item-left { //later
      display: flex;
      align-items: center;
    }

    .todo-item-label {
      padding: 10px;
      border: 1px solid white;
      margin-left: 12px;
    }

    .todo-item-edit {
      font-size: 24px;
      color: #2c3e50;
      margin-left: 12px;
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc; //override defaults
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      &:focus{
        outline: none;
      }
    }
  .completed {
    text-decoration: line-through;
    color:grey;
  }

  .extra-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top:1px solid lightgrey;
    padding-top: 14px;
    margin-bottom: 14px;
  }

  .button {
    font-size: 14px;
    background-color: white;
    appearance:none;
    &:hover {
      background: lightgreen;
    }
  }

  .active {
    background: lightgreen;
  }

  //CSS Transitions
  .fade-enter-active, .fade-leave-active{
    transition: opacity 2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }


</style>
