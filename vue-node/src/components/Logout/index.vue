<template>
 <div>
   <el-button plain @click="logout">退出</el-button>
 </div>
</template>

<script>
  import router from '@/router'
  import { getToken,removeToken } from '@/utils/auth' // getToken from cookie
  export default {
    name: 'logout',
    methods: {
      logout() {
        removeToken();
        router.push({ path: '/login' })
      }
    }
  }
</script>


