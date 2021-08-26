<template>
 <div class="container">
    <div id="nav">
    <router-link to="/1">1</router-link> |
    <router-link to="/2">2</router-link> |
    <router-link to="/3">3</router-link> |
    <router-link to="/4">4</router-link> |
    <router-link to="/5">5</router-link> |
    <router-link to="/6">6</router-link> |
    <router-link to="/7">7</router-link>
  </div>
  <router-view/>
 </div>
</template>

<style lang="scss">

.container {
  max-width: 1100px;
  margin: 0 auto;
}
    nav.router-link-exact-active {
      color: #42b983;
}
</style>
