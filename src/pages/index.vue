<template>
  <div class="home-container">
    <div class="headline-container">
      <h1 class="header-title">Student Protest Happening Bangladesh</h1>
      <p class="header-subtitle">
        আমরা মাহির আল মু’আইক্বিলীর তিলাওয়াত ভালোবাসি, কিন্তু তার এমন কোন
        নেতৃত্বগুণ কিম্বা ব্যক্তিত্ব বা রাজনৈতিক প্রজ্ঞা নেই যা দিয়ে রাজতন্ত্রের
        স্ক্রিপ্টেড বক্তব্যের বাহিরে কিছু বলার সুযোগ ছিল। এজন্যই আরাফাহর
        বক্তব্যে লক্ষ কোটি মুসলমানের সামনে দাঁড়িয়ে সে বলতে পারে-"হজ্জ্ব ধর্মীয়
        উৎসব, রাজনৈতিক স্লোগানের ময়দান নয়"। সে কি দেখে
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  name: "home",
});

useHead({
  title: "Home",
});
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .headline-container {
    padding: 2rem 1rem;
    max-width: 1388px;

    .header-title {
      font-size: 3.5rem;
    }

    .header-subtitle {
      font-size: 1.5rem;
    }
  }
}
</style>
