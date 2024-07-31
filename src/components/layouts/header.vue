<template>
  <header class="">
    <nav class="headerNav">
      <ul class="nav">
        <li>
          <NuxtLink to="/">
            <a>Home</a>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            <a>Protest Timeline</a>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            <a>Students' Demands</a>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            <a>Martyr List</a>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            <a>News & Programs</a>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            <a>Gallery</a>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
header {
  width: 100%;
  background: #333;
  color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: center;
}

.headerNav {
  max-width: 1366px;
}
.nav {
  display: flex;
  justify-content: center;
  padding: 0;
}

.nav li {
  margin: 0 15px;
}

.nav li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.nav li a:hover {
  text-decoration: underline;
}
</style>
