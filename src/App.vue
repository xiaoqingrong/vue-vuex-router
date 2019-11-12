<template>
  <div id="app">
    <!-- <Home></Home> -->
    <router-view/>
  </div>
</template>

<script>
import Home from './page/home/home'
export default {
  name: 'App',
  components:{
    Home
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body{
  height: 100%;
  font-size: 19px;
}
#app {

  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #798d95; */
}

</style>
