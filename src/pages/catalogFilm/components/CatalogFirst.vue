<template>
  <div class="catalog__films">
    <div @click="toggleShow(index)"
      class="col-2"
      v-for="(film, index) in catalogFilms"
      :key="film.title"
    >
      <div ref="catalogFilmsItem" class="catalog__films-item catalog__film">
        <h3>{{ film.title }}</h3>
        <span>{{ film.data }}</span>
        <p>{{ film.code }}</p>
        <img src="~@/assets/img/catalog-films/catalog-film1.png" alt="" />
        <!-- <img :src="film.imageUrl" alt=""> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["catalogFilms"],
  data() {
    return {
        showCatalogFilm: false,
    }
  },
  methods: {
    toggleShow(id) {
      this.showCatalogFilm = !this.showCatalogFilm;
      const catalogFilms = Array.from(
        document.querySelectorAll(".catalog__film")
      );
      catalogFilms.map((film) => {
        if (this.showCatalogFilm) {
          catalogFilms[id].classList.add("catalogFilms__active");
        } else {
          catalogFilms[id].classList.remove("catalogFilms__active");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.catalog__films {
  display: flex;
  flex-wrap: wrap;
  .col-2 {
    .catalog__films-item {
      overflow: hidden;
      &:hover {
        background: darken($white, 5%);
      }
      h3 {
        @include font(vw(17), bold, vw(20), $greyBlue50);
        padding: vw(5);
        cursor: pointer;
        transition: 0.6s;
      }
      span,
      p {
        @include font(vw(10), bold, vw(20), $greyBlue70);
        padding-left: vw(5);
        transition: 0.6s;
      }
      span {
        position: absolute;
        right: vw(10);
        top: vw(5);
        opacity: 0;
      }
      img {
        left: 0;
        top: 0;
        position: absolute;
        opacity: 0;
        height: vw(120);
        width: 100%;
        border-radius: vw(5);
        transition: 0.6s;
        z-index: -1;
      }
    }
  }
}
.col-2 {
  width: 13.33%;
  margin-left: vw(10);
  margin-top: vw(5);
  .catalog__films-item {
    width: 100%;
    transition: 0.6s;
    box-shadow: 0 vw(2) vw(5) $bx-shadowBlack48;
    border-radius: vw(5);
    background: $white;
    position: relative;
    height: vw(80);
    cursor: pointer;
  }
}
.catalogFilms__active {
  span {
    opacity: 1 !important;
    padding-left: vw(10) !important;
    color: $white !important;
    transition: 0.6s !important;
  }
  h3 {
    position: absolute !important;
    bottom: vw(20) !important;
    left: vw(5) !important;
    color: $white !important;
    transition: 0.6s !important;
  }
  p {
    color: $white !important;
    position: static !important;
    transition: 0.6s !important;
  }
  img {
    opacity: 1 !important;
    transition: 0.6s !important;
  }
  background: none !important;
  height: vw(120) !important;
}
</style>