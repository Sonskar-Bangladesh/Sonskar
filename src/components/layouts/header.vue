<template>
  <header class="">
    <nav>
      <ul class="">
        <li><a href="index.html">Home</a></li>
        <li><a href="timeline.html">Protest Timeline</a></li>
        <li><a href="demands.html">Students' Demands</a></li>
        <li><a href="martyrs.html">Martyr List</a></li>
        <li><a href="news.html">News & Programs</a></li>
        <li><a href="gallery.html">Gallery</a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
header {
  background: #333;
  color: #fff;
  padding: 10px 0;
}

header nav ul {
  display: flex;
  justify-content: center;
  padding: 0;
}

header nav ul li {
  margin: 0 15px;
}

header nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

header nav ul li a:hover {
  text-decoration: underline;
}
</style>
