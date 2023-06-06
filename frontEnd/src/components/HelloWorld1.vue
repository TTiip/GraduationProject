<template>
  <h1 class="btn">{{ msg }} - 1</h1>
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
