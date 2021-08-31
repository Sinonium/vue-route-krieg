<template>
 <div class="container">
  <div id="nav">
    <router-link :to="{ name: 'CatalogFilms' }">5</router-link> | 
  </div>
  <router-view/>
 </div>
</template>


<style lang="scss">
@import '@/assets/scss/index.scss';
#nav{
  display: flex;
  justify-content: center;
  a{
  text-decoration: none;
  color: inherit;
  margin: 0 15px;
}

}
.container {
  max-width: vw(1510);
  margin: 0 auto;
}
#nav .router-link-exact-active {
      color: #42b983;
}
a{
    text-decoration: none;
}
ul{
    list-style-type: none;
}
h1,h3,h2,h5,h6{
  margin: 0;
}
</style>
