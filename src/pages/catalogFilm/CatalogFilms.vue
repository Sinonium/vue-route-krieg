<template>
   <main>
      <div class="content">
      <div class="container">
        <div class="Schedule__row">
          <Header @chooseMonth="currentMonth = $event" :currentMonth="currentMonth" :ScheduleAddres="ScheduleAddres"/>
          <div v-if="currentMonth === 'May'" class="Schedule__films">
          <!-- <div class="Schedule__week">
            <div v-for="day in catalogFilmsWeek" :key="day.title" class="col-2">
                  <div class="catalog__films-item Schedule__films-item">
                      <h3>{{ day.title }}</h3>
                      <span>{{ day.data }}</span>
                  </div>
            </div>
          </div> -->
          <!-- <div v-if="currentWeek.length">

          </div> -->
          <div v-if="CatalogFilms.length" class="catalog__films">
            <div @click="toggleShow(index)" class="col-2" v-for="(film,index) in AvtoCatalogFilms" :key="film.title">
                <div ref="catalogFilmsItem" class="catalog__films-item catalog__film">
                  <h3>{{ film.title }}</h3>
                  <span>{{ film.data }}</span>
                  <p>{{ film.code }}</p>
                  <img src="~@/assets/img/catalog-films/catalog-film1.png" alt="">
                  <!-- <img :src="film.imageUrl" alt=""> -->
                </div>
          </div>
          </div>
          <span v-else class="catalogFilms__loading"></span>
          </div>
          <div v-if="currentMonth === 'July'" class="Schedule__films">
          <div class="Schedule__week">
            <div v-for="day in catalogFilmsWeek" :key="day.title" class="col-2">
                  <div class="catalog__films-item Schedule__films-item">
                      <h3>{{ day.title }}</h3>
                      <span>{{ day.data }}</span>
                  </div>
            </div>
          </div>
          <div v-if="CatalogFilms.length" class="catalog__films">
          <div @click="toggleShow(index)" class="col-2" v-for="(film,index) in CatalogFilms" :key="film.title">
                <div ref="catalogFilmsItem" class="catalog__films-item catalog__film">
                  <h3>{{ film.title }}</h3>
                  <span>{{ film.data }}</span>
                  <p>{{ film.code }}</p>
                  <img src="~@/assets/img/catalog-films/catalog-film1.png" alt="">
                </div>
              </div>
          </div>
          <span v-else class="catalogFilms__loading"></span>
          </div>
        </div>
        </div>
      </div>
    </main>
</template>

<script>
import Header from "./components/CatalogFilmsHead.vue";

export default {
  components: { Header },
    data() {
        return {
            currentWeek: '',
            currentMonth: 'May',
            ScheduleAddres: {},
            catalogFilmsWeek: [],
            AvtoCatalogFilms: [],
            showCatalogFilm: false,
        }
    },
    mounted() {
        const getData =  () => {
        const ScheduleAddres = async () => {
            const response = await fetch('http://localhost:3000/ScheduleAddres');
            const ScheduleAddress  = await response.json();
            this.ScheduleAddres = ScheduleAddress;
        };
        const catalogFilmsWeek = async () => {
            const response = await fetch('http://localhost:3000/catalogFilmsWeek');
            const catalogFilmsWeekk  = await response.json();
            this.catalogFilmsWeek = catalogFilmsWeekk;
        }
        const AvtoCatalogFilms = async () => {
            const response = await fetch('http://localhost:3000/AvtoCatalogFilms');
            const AvtoCatalogFilmss  = await response.json();
            this.AvtoCatalogFilms = AvtoCatalogFilmss;
        };
        setTimeout(AvtoCatalogFilms, 1500);
        catalogFilmsWeek()
        ScheduleAddres();
        }
        getData();
    },
    methods:{
      toggleShow(id) {
        this.showCatalogFilm = !this.showCatalogFilm
        const AvtoCatalogFilms = Array.from(document.querySelectorAll('.catalog__film'))
        AvtoCatalogFilms.map(film => {
          if(this.showCatalogFilm) {
            AvtoCatalogFilms[id].classList.add('catalogFilms__active')
          }
          else {
            AvtoCatalogFilms[id].classList.remove('catalogFilms__active')
          }
        })
      },
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.content {
  position: absolute;
  top: vw(60);
  .Schedule__row {
    padding-top: vw(100);
    padding-right: vw(60);
    .Schedule__films{
      width: vw(1111);
      .Schedule__week {
          display: flex;
          flex-wrap: nowrap;
                .col-2{
                  width: 13.33%;
                  margin-left: vw(10);
                  margin-top: vw(5);
                  .catalog__films-item{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    &:hover{
                      background: lighten( #d3b8fa , 10%);
                    }
                    h3{
                    @include font(vw(17),bold,vw(20),$greyBlue50);
                    padding: vw(5);
                    cursor: pointer;
                    }
                    span{
                      @include font(vw(10),bold,vw(20),$greyBlue70);
                      transition: 0.6s;
                      padding: vw(5);
                  }
              }
          }
      }
      .catalog__films {
        display: flex;
        flex-wrap: wrap;
          .col-2 {
            .catalog__films-item {
                  overflow: hidden;
                  &:hover {
                    background: darken($white , 5%)
                  }
                  h3 {
                  @include font(vw(17),bold,vw(20),$greyBlue50);
                  padding: vw(5);
                  cursor: pointer;
                  transition: 0.6s;
                  }
                  span,p{
                    @include font(vw(10),bold,vw(20),$greyBlue70);
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
    }
  }
}
.catalogFilms__loading{
  background: $bg-blueRgbDark;
  height: vw(50);
  width: vw(50);
  border-radius: 50%;
  position: absolute;
  top: 115%;
  left: 50%;
  animation: anim-catalogFilmsLoading 0.4s ease-in-out infinite alternate;
}
@keyframes anim-catalogFilmsLoading {
  0%{
    top: 110%;
    background: $bg-greenRgbLight;
  }
  100%{
    background: $bg-blueRgbDark;
    top: 120%;
  }
}
.catalogFilms__active {
  span{
    opacity: 1 !important;;
    padding-left: vw(10) !important;;
    color: $white !important;;
    transition: 0.6s !important;;
  }
  h3{
    position: absolute !important;;
    bottom: vw(20) !important;;
    left: vw(5) !important;;
    color:$white !important;;
    transition: 0.6s !important;;
  }
  p{
    color: $white !important;;
    position: static !important;;
    transition: 0.6s !important;;
  }
  img{
    opacity: 1 !important;
    transition: 0.6s !important;;
  }
  background: none !important;
  height: vw(120) !important;
}
</style>