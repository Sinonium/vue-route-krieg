<template>
  <div class="Schedule__week">
    <div
      class="col-2"
      @click="currentWeek('MondayThird')"
      :class="{ active: this.currentWeekThird === 'MondayThird' }"
    >
      <div class="catalog__films-item">
        <h3>Monday</h3>
        <span>26.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('c')"
      :class="{ active: this.currentWeekThird === 'TuesdayThird' }"
    >
      <div class="catalog__films-item">
        <h3>Tuesday</h3>
        <span>27.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('WednesdayThird')"
      :class="{ active: this.currentWeekThird === 'WednesdayThird' }"
    >
      <div class="catalog__films-item">
        <h3>Wednesday</h3>
        <span>28.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('ThursdayThird')"
      :class="{ active: this.currentWeekThird === 'ThursdayThird' }"
    >
      <div class="catalog__films-item">
        <h3>Thursday</h3>
        <span>29.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('FridayThird')"
      :class="{ active: this.currentWeekThird === 'FridayThird' }"
    >
      <div class="catalog__films-item">
        <h3>Friday</h3>
        <span>30.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('SaturdayThird')"
      :class="{ active: this.currentWeekThird === 'SaturdayThird' }"
    >
      <div class="catalog__films-item">
        <h3>Saturday</h3>
        <span>31.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('SundayThird')"
      :class="{ active: this.currentWeekThird === 'SundayThird' }"
    >
      <div class="catalog__films-item">
        <h3>Sunday</h3>
        <span>32.05</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["catalogFilmsWeek", "currentWeekThird"],
  methods: {
    currentWeek(week) {
      this.$emit('current' , week)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.Schedule__week {
  display: flex;
  flex-wrap: nowrap;
  .col-2 {
    width: 13.33%;
    margin-left: vw(10);
    margin-top: vw(5);
    &:hover {
      background: lighten($purple, 1.9%);
      h3 , span {
        color: white;
      }
    }
    .catalog__films-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        @include font(vw(17), bold, vw(20), $greyBlue50);
        padding: vw(5);
        cursor: pointer;
      }
      span {
        @include font(vw(10), bold, vw(20), $greyBlue70);
        transition: 0.6s;
        padding: vw(5);
      }
    }
  }
}
.col-2 {
  width: 13.33%;
  margin-left: vw(10);
  margin-top: vw(5);
  background: $white;
  border-radius: vw(5);
  box-shadow: 0 vw(2) vw(5) $bx-shadowBlack48;
  transition: 0.6s;
  .catalog__films-item {
    width: 100%;
    transition: 0.6s;
    position: relative;
    height: vw(80);
    cursor: pointer;
  }
}
.active {
  background: purple;
  .catalog__films-item {
    h3 , span {
      color: white !important;
    }
  }
}
</style>