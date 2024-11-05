<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="w-full text-center my-4 underline font-bold text-blue-600">
    <RouterLink to="/">Home</RouterLink>
  </div>
  <RouterView />
</template>

<style>
li {
  list-style-type: none;
}
</style>
