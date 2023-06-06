<template>
  <h1 class="btn">{{ msg }}</h1>
</template>

<script setup lang="ts">
  defineProps({
    msg: {
      type: String,
      default: '123'
    }
  })
</script>

<style scoped></style>
