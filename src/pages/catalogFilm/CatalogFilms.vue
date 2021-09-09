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
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'TuesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'WednesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'ThursdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'FridayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'SaturdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeekFirst === 'SundayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="!currentWeekFirst.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
                </div>
                <div style="margin-top:50px"  class="Schedukle__films-second-block">
                  <SheduleWeekSecond
                    @current="this.currentWeekSecond = $event"
                    :currentWeekSecond="currentWeekSecond"
                    :catalogFilmsWeek="catalogFilmsWeek"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'MondaySecond'"
                    :catalogFilms="catalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'TuesdaySecond'"
                    :catalogFilms="catalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'WednesdaySecond'"
                    :catalogFilms="catalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'ThursdaySecond'"
                    :catalogFilms="catalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'FridaySecond'"
                    :catalogFilms="catalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'SaturdaySecond'"
                    :catalogFilms="catalogFilms"
                  />
                  <CatalogSecond
                    v-if="this.currentWeekSecond === 'SundaySecond'"
                    :catalogFilms="catalogFilms"
                  />
                  <CatalogSecond
                    v-if="!currentWeekSecond.length"
                    :AutoCatalogFilms="AutoCatalogFilms"
                  />
                  <span
                    v-if="!catalogFilms.length"
                    class="catalogFilms__loading"
                  ></span>
                </div>
              <div style="margin-top:50px"  class="Schedukle__films-third-block">
                <SheduleWeekThird
                  @current="this.currentWeekThird = $event"
                  :currentWeekThird="currentWeekThird"
                  :catalogFilmsWeek="catalogFilmsWeek"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'MondayThird'"
                  :catalogFilms="catalogFilms"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'MondayThird'"
                  :catalogFilms="catalogFilms"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'WednesdayThird'"
                  :catalogFilms="catalogFilms"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'ThursdayThird'"
                  :catalogFilms="catalogFilms"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'FridayThird'"
                  :catalogFilms="catalogFilms"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'SaturdayThird'"
                  :catalogFilms="catalogFilms"
                />
                <CatalogThird
                  v-if="this.currentWeekThird === 'SundayThird'"
                  :catalogFilms="catalogFilms"
                />
                <CatalogThird
                  v-if="!currentWeekThird.length"
                  :AutoCatalogFilms="AutoCatalogFilms"
                />
                <span
                  v-if="!catalogFilms.length"
                  class="catalogFilms__loading"></span>
                  <span
                  v-if="!AutoCatalogFilms.length"
                  class="catalogFilms__loading"></span>
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
      catalogFilms: [],
      catalogFilmsMonths: [],
      AutoCatalogFilms: [],
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
      const catalogFilms = async () => {
        const response = await fetch("http://localhost:3000/catalogFilms");
        const catalogFilmss = await response.json();
        this.catalogFilms = catalogFilmss;
      };
      const catalogFilmsMonths = async () => {
        const response = await fetch("http://localhost:3000/catalogFilmsMonths");
        const catalogFilmsMonthss = await response.json();
        this.catalogFilmsMonths = catalogFilmsMonthss;
      };
      const AutoCatalogFilms = async () => {
        const response = await fetch("http://localhost:3000/AutoCatalogFilms");
        const AutoCatalogFilmss = await response.json();
        this.AutoCatalogFilms = AutoCatalogFilmss;
      };
      setTimeout(catalogFilms, 1500);
      setTimeout(AutoCatalogFilms, 1300);
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