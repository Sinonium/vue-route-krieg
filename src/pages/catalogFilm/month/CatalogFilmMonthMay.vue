<template>
   <main>
      <div class="content">
        <div class="container">
        <div class="Schedule__row">
          <div class="Schedule__films">
          <div class="Schedule-films__week catalog__films">
            <div class="col-2" v-for="day in catalogFilmsWeek" :key="day.title">
              <router-link :to="day.to" class="catalog__films-item">
                <h3>{{ day.title }}</h3>
                <span>{{ day.data }}</span>
              </router-link>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            catalogFilmsWeek: [],
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
        const catalogFilmsWeek = async () => {
            const response = await fetch('http://localhost:8080/json/db.json');
            const catalogFilmsWeekk  = await response.json();
            this.catalogFilmsWeek = catalogFilmsWeekk.catalogFilmsWeek;
        };
        catalogFilmsWeek();
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
      }
    }
  }
}
</style>