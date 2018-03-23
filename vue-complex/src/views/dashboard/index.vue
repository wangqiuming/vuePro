<template>
  <div class="dashboard-container">
    <div class="dashboard-text">欢迎您:{{name}}</div>
    <div class="dashboard-text">您的角色:<span v-for='(role,index) in roles' :key='role'>{{role}}{{index < roles.length-1 ? ',' : ''}}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
