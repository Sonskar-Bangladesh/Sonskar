<template>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/shohid");
</script>

<style scoped></style>
