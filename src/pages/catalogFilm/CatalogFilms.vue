<template>
  <main>
    <div class="content">
      <div class="container">
        <div class="Schedule__row">
          <Header
            @chooseMonth="currentMonth = $event"
            :currentMonth="currentMonth"
            :ScheduleAddres="ScheduleAddres"
          />
          <div v-for="monthSchdeule in catalogFilmsMonths" v-bind:key="monthSchdeule" class="Schedule__films">
              <div v-if="currentMonth === monthSchdeule">
                <div style="margin-top:50px" class="Schedukle__films-first-block">
              <SheduleWeekFirst
                @current="this.currentWeekFirst = $event"
                :currentWeekFirst="currentWeekFirst"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'MondayFirst'"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'TuesdayFirst'"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'WednesdayFirst'"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'ThursdayFirst'"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'FridayFirst'"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'SaturdayFirst'"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'SundayFirst'"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <CatalogFirst
                v-if="!currentWeekFirst.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
                </div>
                <div style="margin-top:50px"  class="Schedukle__films-second-block">
                  <SheduleWeekSecond
                    @current="this.currentWeekSecond = $event"
                    :currentWeekSecond="currentWeekSecond"
                    :catalogFilmsWeek="catalogFilmsWeek"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'MondaySecond'"
                    :AutoCatalogFilms="AutoCatalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'TuesdaySecond'"
                    :AutoCatalogFilms="AutoCatalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'WednesdaySecond'"
                    :AutoCatalogFilms="AutoCatalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'ThursdaySecond'"
                    :AutoCatalogFilms="AutoCatalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'FridaySecond'"
                    :AutoCatalogFilms="AutoCatalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'SaturdaySecond'"
                    :AutoCatalogFilms="AutoCatalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'SundaySecond'"
                    :AutoCatalogFilms="AutoCatalogFilms"
                  />
                  <CatalogSecond
                    v-if="!currentWeekSecond.length"
                    :AutoCatalogFilms="AutoCatalogFilms"
                  />
                </div>
              <div style="margin-top:50px"  class="Schedukle__films-third-block">
                <SheduleWeekThird
                  @current="this.currentWeekThird = $event"
                  :currentWeekThird="currentWeekThird"
                  :catalogFilmsWeek="catalogFilmsWeek"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'MondayThird'"
                  :AutoCatalogFilms="AutoCatalogFilms"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'WednesdayThird'"
                  :AutoCatalogFilms="AutoCatalogFilms"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'ThursdayThird'"
                  :AutoCatalogFilms="AutoCatalogFilms"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'FridayThird'"
                  :AutoCatalogFilms="AutoCatalogFilms"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'SaturdayThird'"
                  :AutoCatalogFilms="AutoCatalogFilms"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'SundayThird'"
                  :AutoCatalogFilms="AutoCatalogFilms"
                />
                <CatalogThird
                  v-if="!currentWeekThird.length"
                  :AutoCatalogFilms="AutoCatalogFilms"
                />
                <!-- <span
                  v-if="!catalogFilms.length"
                  class="catalogFilms__loading"></span>
                  <span
                  v-if="!AutoCatalogFilms.length"
                  class="catalogFilms__loading"></span> -->
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "./components/CatalogFilmsHead.vue";
import CatalogFirst from "./components/CatalogFirst.vue";
import CatalogSecond from "./components/CatalogSecond.vue";
import CatalogThird from "./components/CatalogThird.vue";
import SheduleWeekFirst from "./components/SheduleWeekFirst.vue";
import SheduleWeekSecond from "./components/SheduleWeekSecond.vue";
import SheduleWeekThird from "./components/SheduleWeekSThird.vue";

export default {
  components: { Header, CatalogFirst  , CatalogSecond , CatalogThird , SheduleWeekFirst , SheduleWeekSecond , SheduleWeekThird },
  data() {
    return {
      currentWeekFirst: "",
      currentWeekSecond: "",
      currentWeekThird: "",
      currentMonth: "May",
      ScheduleAddres: {},
      catalogFilmsWeek: [],
      // catalogFilms: [],
      AutoCatalogFilms: [
        {
            id: 1,
            title: "Big Brother",
            code: "s21e27",
            data: "19: 00",
            imageUrl: 'catalog-film1'
        },
        {
            id: 2,
            title: "American Ninja War…",
            code: "s21e27",
            data: "19: 00",
           imageUrl: '~@/assets/img/catalog-films/catalog-film2.png'
        },
        {
          id: 3,
          title: "Americas Got Talent",
          code: "s21e27",
          data: "19: 00",
         imageUrl: '@/assets/img/catalog-films/catalog-film3.png'
        },
        {
          id: 4,
          title: "Big Brother",
          code: "s21e27",
          data: "19: 00",
         imageUrl: '../assets/img/catalog-films/catalog-film4.png'
        },
        {
          id: 5,
          title: "The Outpost",
          code: "s21e27",
          data: "13: 00",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film5.png"/>`
        },
        {
          id: 6,
          title: "BattleBots",
          code: "s21e27",
          data: "15: 00",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film6.png"/>`
        },
        {
          id: 7,
          title: "Americas Got Talent",
          code: "s21e27",
          data: "9: 00",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film7.png"/>`
        },
        {
          id: 8,
          title: "Power",
          code: "s06e01",
          data: "5: 00",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film8.png"/>`
        },
        {
          id: 9,
          title: "Penn & Tellar",
          code: "s06e01",
          data: "18: 00",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film9.png"/>`
        },
        {
          id: 10,
          title: "Tales",
          code: "s06e01",
          data: "20: 00",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film10.png"/>`
        },
        {
          id: 11,
          title: "Masterchief",
          code: "s06e01",
          data: "23: 00",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film11.png"/>`
        },
        {
          id: 12,
          title: "Queen of the South",
          code: "s06e01",
          data: "24: 00",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film12.png"/>`
        },
        {
          id: 13,
          title: "Fargo",
          code: "s21e27",
          data: "19: 00",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film13.png"/>`
        },
        {
          id: 14,
          title: "Tales",
          code: "s06e01",
          data: "16: 24",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film14.png"/>`
        },
        {
          id: 15,
          title: "Orange Is the New Black",
          code: "s21e27",
          data: "12: 24",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film15.png"/>`
        },
        {
          id: 16,
          title: "Whose Line Is It Any…",
          code: "s01e02",
          data: "15: 50",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film16.png"/>`
        },
        {
          id: 17,
          title: "Adam Ruins Everything",
          code: "s01e02",
          data: "19: 16.48",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film17.png"/>`
        },
        {
          id: 18,
          title: "Downton Abbey",
          code: "s21e27",
          data: "6: 47",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film18.png"/>`
        },
        {
          id: 19,
          title: "Reaed Break",
          code: "s01e02",
          data: "2: 30",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film1.png"/>`
        },
        {
          id: 20,
          title: "13 Reasons Why",
          code: "s01e02",
          data: "8: 25.54",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film2.png"/>`
        },
        {
          id: 21,
          title: "Pandora",
          code: "s01e02",
          data: "17: 34",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film3.png"/>`
        },
        {
          id: 22,
          title: "Fear The Walking ...",
          code: "s05e01",
          data: "14: 34",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film4.png"/>`
        },
        {
          id: 23,
          title: "Instinct",
          code: "s05e01",
          data: "18: 14.22",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film5.png"/>`
        },
        {
          id: 24,
          title: "American Dad",
          code: "s05e01",
          data: "19: 00",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film6.png"/>`
        },
        {
          id: 25,
          title: "Shameless",
          code: "s05e01",
          data: "14: 34",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film7.png"/>`
        },
        {
          id: 26,
          title: "Carnival Row",
          code: "s05e01",
          data: "14: 34",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film8.png"/>`
        },
        {
          id: 27,
          title: "Florida Girls",
          code: "s05e01",
          data: "14: 34",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film9.png"/>`
        },
        {
          id: 28,
          title: "Conan",
          code: "s05e01",
          data: "14: 34",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film10.png"/>`
        },
        {
          id: 29,
          title: "Fear The Walking ...",
          code: "s05e01",
          data: "14: 34",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film11.png"/>`
        },
        {
          id: 30,
          title: "Conan",
          code: "s05e01",
          data: "14: 34",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film12.png"/>`
        },
        {
          id: 31,
          title: "Westworld",
          code: "s05e01",
          data: "19: 00",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film13.png"/>`
        },
        {
          id: 32,
          title: "Boardwalk Empire",
          code: "fw216f",
          data: "20: 38",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film14.png"/>`
        },
        {
          id: 33,
          title: "Harlots",
          code: "D6SBJF",
          data: "14: 34",
         imageUrl: `<img src="~@/assets/img/catalog-films/catalog-film15.png"/>`
        }
      ],
      catalogFilmsMonths: [],
      // AutoCatalogFilms: [],
    };
  },
  mounted() {
    const getData = () => {
      const ScheduleAddres = async () => {
        const response = await fetch("http://localhost:3000/ScheduleAddres");
        const ScheduleAddress = await response.json();
        this.ScheduleAddres = ScheduleAddress;
      };
      const catalogFilmsWeek = async () => {
        const response = await fetch("http://localhost:3000/catalogFilmsWeek");
        const catalogFilmsWeekk = await response.json();
        this.catalogFilmsWeek = catalogFilmsWeekk;
      };
      const catalogFilmsMonths = async () => {
        const response = await fetch("http://localhost:3000/catalogFilmsMonths");
        const catalogFilmsMonthss = await response.json();
        this.catalogFilmsMonths = catalogFilmsMonthss;
      };
      setTimeout(catalogFilmsWeek , 1200);
      ScheduleAddres();
      catalogFilmsMonths()
    };
    getData();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.content {
  position: absolute;
  top: vw(60);
  .Schedule__row {
    padding-top: vw(100);
    padding-right: vw(60);
    .Schedule__films {
      width: vw(1111);
    }
  }
}
.catalogFilms__loading {
  background: $bg-blueRgbDark;
  height: vw(50);
  width: vw(50);
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 40%;
  transform: translate(-50%,-50%);
  animation: anim-catalogFilmsLoading 0.4s ease-in-out infinite alternate;
}
@keyframes anim-catalogFilmsLoading {
  0% {
    transform: translate(-50%,-50%);
    top: 50%;
    background: $bg-greenRgbLight;
  }
  100% {
    transform: translate(-50%,-50%);
    background: $bg-blueRgbDark;
    top: 60%;
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