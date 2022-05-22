<template>
    <el-menu
      default-active="1"
      style="width: 170px">
      <a href="#studyrooms">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">可用自习室</span>
        </el-menu-item>
      </a>
      <a href="#nearby">
        <el-menu-item index="2">
          <i class="el-icon-location"></i>
          <span slot="title">附近自习室</span>
        </el-menu-item>
      </a>
      <a href="#recommend">
        <el-menu-item index="3">
          <i class="el-icon-discover"></i>
          <span slot="title">座位推荐</span>
        </el-menu-item>
      </a>
    </el-menu>
</template>

<script>
  export default {

  }
</script>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
