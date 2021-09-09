<template>
  <div id="nav">
    <router-link to="/1">1</router-link> |
    <router-link to="/2">2</router-link> |
    <router-link to="/3">3</router-link> |
    <router-link to="/4">4</router-link> |
    <router-link :to="{ name: 'CatalogFilms' }">5</router-link> |
    <router-link to="/7">7</router-link>
  </div>
    <Header/>
    <Modal/>
      <div class="container">
      <router-view/>
      <Footer/>
      </div>
</template>

<script>
import Header from './components/Header.vue'
import Modal from './components/Modal.vue'
import Footer from './components/Footer.vue'
export default {
  components: {Header, Modal, Footer}
}
</script>


<style lang="scss">
@import '@/assets/scss/index.scss';
body{
  background: $bg-main;
  margin: 0;
}
ul{
  padding: 0;
  margin: 0;
  li{
    list-style: none;
  }
}
#nav{
  display: flex;
  justify-content: center;
  margin: 30px;
  a{
  text-decoration: none;
  color: inherit;
  margin: 0 15px;
}

}
.container {
  max-width: vw(1510);
  margin: vw(-1455) auto 0;
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
