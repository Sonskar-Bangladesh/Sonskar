<script lang="ts" setup></script>

<template>
  <main class="main">
    <LayoutsHeader />
    <div>
      <slot />
    </div>
    <LayoutsFooter />
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
