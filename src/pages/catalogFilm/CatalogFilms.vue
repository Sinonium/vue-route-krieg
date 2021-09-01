<template>
   <main>
      <div class="content">
      <div class="container">
        <div class="Schedule__row">
          <Header :ScheduleAddres="ScheduleAddres"  :catalogFilmsMonths="catalogFilmsMonths"/>
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
            catalogFilms: [],
            catalogFilmsMonths: [],
            ScheduleAddres: {},
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
        const ScheduleAddres = async () => {
            const response = await fetch('http://localhost:8080/json/db.json');
            const ScheduleAddress  = await response.json();
            this.ScheduleAddres = ScheduleAddress.ScheduleAddres;
        };
        const catalogFilmsMonths = async () => {
            const response = await fetch('http://localhost:8080/json/db.json');
            const catalogFilmsMonthss  = await response.json();
            this.catalogFilmsMonths = catalogFilmsMonthss.catalogFilmsMonths;
        };
        setTimeout(cataogFilms , 2000);
        ScheduleAddres();
        catalogFilmsMonths();
        }
        getData();
    },
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
      .Schedule-films__week{
          display: flex;
      }
      .catalog__films {
        display: flex;
        flex-wrap: wrap;
        &:first-child{
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
                  @include font(vw(17),bold,vw(20),$text-greyBlue50);
                  padding: vw(5);
                  cursor: pointer;
                  }
                  span{
                    @include font(vw(10),bold,vw(20),$text-greyBlue8C);
                    transition: 0.6s;
                    padding: vw(5);
                  }
                }
              }
        }
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
        &:last-child{
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
    top: 123%;
  }
}
.catalogFilms__active{
  span{
    opacity: 1 !important;;
    padding-left: vw(10) !important;;
    color: #FFF !important;;
    transition: 0.6s !important;;
  }
  h3{
    position: absolute !important;;
    bottom: vw(20) !important;;
    left: vw(5) !important;;
    color: #ffff !important;;
    transition: 0.6s !important;;
  }
  p{
    color: #FFFF !important;;
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