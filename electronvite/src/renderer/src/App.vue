<template>
  <div class="">this is hello electronVite {{ xxx }}</div>
  <el-button type="primary">Primary</el-button>
</template>

<script lang="ts" setup>
  import {ref} from "vue"
  const xxx = ref("1111")
  console.log(xxx)  
</script>

<style>


</style>