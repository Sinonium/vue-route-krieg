<template>
  <div class="Schedule__week ScheduleWeek">
    <div
      class="col-2"
      @click="currentWeek('MondayFirst')"
      :class="{ active: this.currentWeekFirst === 'MondayFirst' }"
    >
      <div class="catalog__films-item">
        <h3>Monday</h3>
        <span>26.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('TuesdayFirst')"
      :class="{ active: this.currentWeekFirst === 'TuesdayFirst' }"
    >
      <div class="catalog__films-item">
        <h3>Tuesday</h3>
        <span>27.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('WednesdayFirst')"
      :class="{ active: this.currentWeekFirst === 'WednesdayFirst' }"
    >
      <div class="catalog__films-item">
        <h3>Wednesday</h3>
        <span>28.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('ThursdayFirst')"
      :class="{ active: this.currentWeekFirst === 'ThursdayFirst' }"
    >
      <div class="catalog__films-item">
        <h3>Thursday</h3>
        <span>29.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('FridayFirst')"
      :class="{ active: this.currentWeekFirst === 'FridayFirst' }"
    >
      <div class="catalog__films-item">
        <h3>Friday</h3>
        <span>30.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('SaturdayFirst')"
      :class="{ active: this.currentWeekFirst === 'SaturdayFirst' }"
    >
      <div class="catalog__films-item">
        <h3>Saturday</h3>
        <span>31.05</span>
      </div>
    </div>
    <div
      class="col-2"
      @click="currentWeek('SundayFirst')"
      :class="{ active: this.currentWeekFirst === 'SundayFirst' }"
    >
      <div class="catalog__films-item">
        <h3>Sunday</h3>
        <span>32.05</span>
      </div>
    </div>
  </div>
  <splide :options="options" class="Schedule__week ScheduleWeekSlider">
    <splide-slide>
      <div
        class="col-2"
        @click="currentWeek('MondayFirst')"
        :class="{ active: this.currentWeekFirst === 'MondayFirst' }"
      >
        <div class="catalog__films-item">
          <h3>Monday</h3>
          <span>26.05</span>
        </div>
      </div>
    </splide-slide>
    <splide-slide>
      <div
        class="col-2"
        @click="currentWeek('TuesdayFirst')"
        :class="{ active: this.currentWeekFirst === 'TuesdayFirst' }"
      >
        <div class="catalog__films-item">
          <h3>Tuesday</h3>
          <span>27.05</span>
        </div>
      </div>
    </splide-slide>
    <splide-slide>
      <div
        class="col-2"
        @click="currentWeek('WednesdayFirst')"
        :class="{ active: this.currentWeekFirst === 'WednesdayFirst' }"
      >
        <div class="catalog__films-item">
          <h3>Wednesday</h3>
          <span>28.05</span>
        </div>
      </div>
    </splide-slide>
    <splide-slide>
      <div
        class="col-2"
        @click="currentWeek('ThursdayFirst')"
        :class="{ active: this.currentWeekFirst === 'ThursdayFirst' }"
      >
        <div class="catalog__films-item">
          <h3>Thursday</h3>
          <span>29.05</span>
        </div>
      </div>
    </splide-slide>
    <splide-slide>
      <div
        class="col-2"
        @click="currentWeek('FridayFirst')"
        :class="{ active: this.currentWeekFirst === 'FridayFirst' }"
      >
        <div class="catalog__films-item">
          <h3>Friday</h3>
          <span>30.05</span>
        </div>
      </div>
    </splide-slide>
    <splide-slide>
      <div
        class="col-2"
        @click="currentWeek('SaturdayFirst')"
        :class="{ active: this.currentWeekFirst === 'SaturdayFirst' }"
      >
        <div class="catalog__films-item">
          <h3>Saturday</h3>
          <span>31.05</span>
        </div>
      </div>
    </splide-slide>
    <splide-slide>
      <div
        class="col-2"
        @click="currentWeek('SundayFirst')"
        :class="{ active: this.currentWeekFirst === 'SundayFirst' }"
      >
        <div class="catalog__films-item">
          <h3>Sunday</h3>
          <span>32.05</span>
        </div>
      </div>
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  props: ["catalogFilmsWeek", "currentWeekFirst"],
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      sliderScheduleWeek: true,
      options: {
        rewind: false,
        gap: "1rem",
        perPage: 4,
        pagination: false,
        arrows: false,
      },
    };
  },
  methods: {
    currentWeek(week) {
      this.$emit("current", week);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
.ScheduleWeek {
  display: flex;
}
.Schedule__week.ScheduleWeekSlider {
  display: none;
}
.Schedule__week {
  display: flex;
  flex-wrap: nowrap;
  .col-2 {
    width: 13.33%;
    margin-left: vw(10);
    margin-top: vw(5);
    &:hover {
      background: lighten($purple, 1.9%);
      h3,
      span {
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
    h3,
    span {
      color: white !important;
    }
  }
}
@media screen and (max-width: 592px) {
  .ScheduleWeek {
    display: none !important;
  }
  .Schedule__week.ScheduleWeekSlider {
    display: block !important;
    overflow: hidden;
  }
  .splide {
    .splide__track {
      .splide__list {
        width: 25%;
        overflow: hidden;
      }
    }
  }
  // .splide.is-active .splide__list {
  //   width: 25% ;
  //   overflow: hidden ;
  // }
  // .splide__track {
  //   .splide__list {
  //   width: 1000px ;
  //   overflow: hidden ;
  // }
  // }
  // #splide01-list {
  //   width: 1000px ;
  //   overflow: hidden ;
  // }

  .Schedule__week {
    justify-content: center;
    align-items: center;
    .col-2 {
      width: 90%;
      margin-left: vmin(10);
      margin-top: vmin(5);
      &:hover {
        background: lighten($purple, 1.9%);
        h3,
        span {
          color: white;
        }
      }
      .catalog__films-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
          @include font(vmin(17), bold, vmin(20), $greyBlue50);
          padding: vmin(5);
          cursor: pointer;
        }
        span {
          @include font(vmin(10), bold, vmin(20), $greyBlue70);
          transition: 0.6s;
          padding: vmin(5);
        }
      }
    }
  }
  .col-2 {
    width: 90%;
    margin-left: vmin(10);
    margin-top: vmin(5);
    background: $white;
    border-radius: vmin(5);
    box-shadow: 0 vmin(2) vmin(5) $bx-shadowBlack48;
    transition: 0.6s;
    .catalog__films-item {
      width: 100%;
      height: vmin(80);
    }
  }
}
@media screen and (max-width: 541px) {
  .Schedule__week {
    justify-content: center;
    align-items: center;
    .col-2 {
      width: 90%;
      margin-left: vmin(10);
      margin-top: vmin(5);
      &:hover {
        background: lighten($purple, 1.9%);
        h3,
        span {
          color: white;
        }
      }
      .catalog__films-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
          @include font(vmin(20), bold, vmin(20), $greyBlue50);
          padding: vmin(5);
          cursor: pointer;
        }
        span {
          @include font(vmin(15), bold, vmin(20), $greyBlue70);
          transition: 0.6s;
          padding: vmin(5);
        }
      }
    }
  }
  .col-2 {
    width: 90%;
    margin-left: vmin(10);
    margin-top: vmin(5);
    background: $white;
    border-radius: vmin(5);
    box-shadow: 0 vmin(2) vmin(5) $bx-shadowBlack48;
    transition: 0.6s;
    .catalog__films-item {
      width: 100%;
      height: vmin(80);
    }
  }
}
@media screen and (max-width: 482px) {
  .Schedule__week {
    justify-content: center;
    align-items: center;
    .col-2 {
      width: 90%;
      margin-left: vmin(10);
      margin-top: vmin(5);
      &:hover {
        background: lighten($purple, 1.9%);
        h3,
        span {
          color: white;
        }
      }
      .catalog__films-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
          @include font(vmin(26), bolder, vmin(20), $greyBlue50);
          padding: vmin(5);
          cursor: pointer;
        }
        span {
          @include font(vmin(20), bolder, vmin(20), $greyBlue70);
          transition: 0.6s;
          padding: vmin(5);
        }
      }
    }
  }
  .col-2 {
    width: 90%;
    margin-left: vmin(10);
    margin-top: vmin(5);
    background: $white;
    border-radius: vmin(5);
    box-shadow: 0 vmin(2) vmin(5) $bx-shadowBlack48;
    transition: 0.6s;
    .catalog__films-item {
      width: 100%;
      height: vmin(100);
    }
  }
}
@media screen and (max-width: 390px) {
  .Schedule__week {
    justify-content: center;
    align-items: center;
    .col-2 {
      width: 95%;
      margin-left: vmin(10);
      margin-top: vmin(5);
      &:hover {
        background: lighten($purple, 1.9%);
        h3,
        span {
          color: white;
        }
      }
      .catalog__films-item {
        display: flex;
        align-items: center;
        h3 {
          @include font(vmin(32), bolder, vmin(20), $greyBlue50);
          padding: vmin(5);
          cursor: pointer;
        }
        span {
          @include font(vmin(25), bolder, vmin(20), $greyBlue70);
          transition: 0.6s;
          padding: vmin(5);
        }
      }
    }
  }
  .col-2 {
    position: relative;
    width: 94%;
    margin-left: vmin(10);
    margin-top: vmin(5);
    background: $white;
    border-radius: vmin(5);
    box-shadow: 0 vmin(2) vmin(5) $bx-shadowBlack48;
    transition: 0.6s;
    .catalog__films-item {
      width: 100%;
      height: vmin(150);
    }
  }
}
</style>