<template>
  <Header
    @handleShowModal="this.showModal = !this.showModal"
    :showModal="showModal"
    @click="toggle = !toggle"
  />
  <Modal
  @toggleHidden="this.showModal = false"
    :showModal="showModal"
  />
  <div class="container">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Modal from "./components/Modal.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Header, Modal, Footer },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
body {
  background: $bg-main;
  margin: 0;
}
ul {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
  }
}
#nav {
  display: flex;
  justify-content: center;
  margin: 30px;
  a {
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
a {
  text-decoration: none;
}
ul {
  list-style-type: none;
}
h1,
h3,
h2,
h5,
h6 {
  margin: 0;
}
</style>
