<script setup>
  import './header.scss'
  const props = defineProps({
    MenuOpen: Function,
  });
</script>
<template>
  <header class="top-header">
    <div class="container">
        <h1 class="logo">
          <RouterLink to ="/"> <icon-ic-outline-local-dining />
          FastEat</RouterLink>
        </h1>
        <button class="btn-menu" @click="MenuOpen"><icon-ic-baseline-dehaze class="ico-white"/></button>
    </div>
  </header>
</template>