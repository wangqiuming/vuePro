<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="nav">
      <router-link to="/">go home</router-link>
      <router-link to="/hello">go hello</router-link>
      <router-link to="/world">go world</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .nav{
    text-align: center;
    font-size:14px;
    font-weight: bold;
  }
.nav a{
  margin-right:10px ;
  background: cadetblue;
  line-height: 35px;
  height:35px;
  display: inline-block;
}
</style>
