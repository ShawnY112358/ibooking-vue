<template>
 <div style="margin-top: 40px">
    <side-menu id="side-menu"></side-menu>
      <div class="home">
        <!--<div id="studyrooms">
          <div style="height: 50px"></div>
        </div>-->
        <studyrooms id="studyrooms"></studyrooms>
      </div>
  </div>
</template>

<script>
import SideMenu from './SideMenu'
import Studyrooms from './Studyrooms.vue'
export default {
  name: 'AppIndex',
  components: { SideMenu, Studyrooms }
}
</script>

<style scoped>
  .home {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
  }

  /*#studyrooms {
    padding-bottom: 20px;
    padding-left: 5px;
    background-color: white;
  }*/

  #side-menu {
    position: fixed;
    margin-left: auto;
    
  }


</style>
