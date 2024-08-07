<script lang="ts" setup></script>

<template>
  <main class="main bg-white text-bangladeshGreen font-sans">
    <LayoutsHeader />
    <div class="content mt-16 mb-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <slot />
    </div>
    <LayoutsFooter />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
</style>
