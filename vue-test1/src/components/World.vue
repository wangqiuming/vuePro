<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'World',
    data () {
      return {
        msg: 'I am World'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hello {
    position: absolute;
    text-align: center;
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background: orange;

  }
</style>
