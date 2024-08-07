<template>
  <header
    class="bg-BangladeshGreen text-white p-4 fixed top-0 w-full flex justify-between items-center"
  >
    <NuxtLink :to="{ name: 'home' }">
      <h1 class="text-2xl font-bold">সংস্কার</h1>
    </NuxtLink>

    <nav class="flex justify-between">
      <NuxtLink>
        <h2 href="#" class="text-white mx-2">আগামীর বাংলাদেশ</h2>
      </NuxtLink>
      <NuxtLink>
        <h2 href="#" class="text-white mx-2">ঘটনাপ্রবাহ</h2>
      </NuxtLink>
      <NuxtLink>
        <h2 href="#" class="text-white mx-2">শহীদগণ</h2>
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
