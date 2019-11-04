<template>
  <div id="app" class="container">
    <div style="float: left; width:500px;"><h1>Todo App</h1></div>
    <div style="float: left; width:50px;"><img class="logo" src="./assets/logo.png"></div>
    <todo-list></todo-list>

  </div>
</template>

<script>


import TodoList from "./TodoList";
export default {
  name: 'app',
  components: {TodoList}
}
</script>

<style lang="scss">

  *{
  box-sizing: border-box;
  }
  .container {
    max-width:600px;
    margin: 0 auto;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
    font-size: 24px;
}

  .logo {
    display: block;
    margin: 20px auto;
    height: 75px;
  }

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
