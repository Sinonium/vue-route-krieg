<template>
          <div v-if="catalogFilms.length" class="catalog__films">
            <div v-for="film in catalogFilms" :key="film.title" class="col-2">
              <div @click="toggleShow" ref="catalogFilmsItem" class="catalog__films-item">
                <h3> {{ film.title }} </h3>
                <span>{{ film.data }}</span>
                <p>{{ film.code }}</p>
                <img :src="film.imageUrl" alt="film">
              </div>
            </div>
          </div>
          <span v-else class="catalogFilms__loading"></span>
</template>

<script>
export default {
  data() {
        return {
            catalogFilms: [],
        }
    },
    methods:{
        toggleShow() {
        const catalogFilmsItem = this.$refs.catalogFilmsItem
        catalogFilmsItem.classList.toggle('catalogFilms__active') 
        },
    },
    mounted() {
        const getData =  () =>{
        const cataogFilms = async () => {
            const response = await fetch('http://localhost:8080/json/db.json');
            const catalogFilmss  = await response.json();
            this.catalogFilms = catalogFilmss.catalogFilms;
        };
        setTimeout(cataogFilms , 2000);
        }
        getData();
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.col-2{
    width: 13.33%;
    margin-left: vw(10);
    margin-top: vw(5);
    .catalog__films-item{
        width: 100%;
        transition: 0.6s;
        box-shadow: 0 vw(2) vw(5) $bx-shadowBlack48;
        border-radius: vw(5);
        background: $bg-white;
        position: relative;
        height: vw(80);
        cursor: pointer;
  }
}
.catalog__films {
    .catalog__films-item{
        overflow: hidden;
        &:hover{
          background: darken($bg-white , 5%)
        }
        h3{
          @include font(vw(17),bold,vw(20),$text-greyBlue50);
          padding: vw(5);
          cursor: pointer;
          transition: 0.6s;
        }
              span,p{
                @include font(vw(10),bold,vw(20),$text-greyBlue8C);
                padding-left: vw(5);
                transition: 0.6s;
              }
              span{
                position: absolute;
                right: vw(10);
                top: vw(5);
                opacity: 0;
              }
              img{
                left: 0;
                top: 0;
                position: absolute;
                z-index: 3;
                opacity: 1;
                height: vw(120);
                width: 100%;
                border-radius: vw(5);
                transition: 0.6s;
            }
          }
}
</style>