<template>
 <!-- @click="$event.target.classList.toggle('active')" -->
    <div class="container clear">
    <div  class="catalog-films flex-wrap">
      <div class="col-2" @click="toggleSow" style="margin-left:5px;width:7%;" v-for="film in catalogFilms" :key="film.imageUrl">
      <h3>{{film.title}}</h3>
      <p>{{film.code}}</p>
      <img v-if="show" :src="film.imageUrl" alt="film">
      </div>
      </div>
    </div>
</template>

<script>


export default({
    props:['catalogFilms'],
    data(){
        return{
            show: false,
        }
    },
    methods:{
        toggleSow(){
        this.show = !this.show
        },
    },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.catalog-films{
  display: flex;
  width: 100%;
  transition: 0.6s;
}
.active{
    transform: translateY(vw(50));
}
</style>