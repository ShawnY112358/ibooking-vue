<template>
  <div>
    <nav-menu></nav-menu>
    <router-view/>
  </div>
</template>

<script>
  import NavMenu from './NavMenu'
  export default {
    name: 'ManagerHome',
    components: {NavMenu}
  }
</script>

<style scoped>

</style>

