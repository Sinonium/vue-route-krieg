<template>
  <div class="Schedule__head">
    <h1 class="Schedule__title">Schedule</h1>
    <nav class="Schedule__month-nav">
      <ul class="Schedule__month-list">
        <li class="Schedule__month-item">
          <span
            @click="handelMonth('May')"
            :class="{ active: currentMonth === 'May' }"
          >
            May
          </span>
        </li>
        <li class="Schedule__month-item">
          <span
            @click="handelMonth('June')"
            :class="{ active: currentMonth === 'June' }"
          >
            June
          </span>
        </li>
        <li class="Schedule__month-item">
          <span
            @click="handelMonth('July')"
            :class="{ active: currentMonth === 'July' }"
          >
            July
          </span>
        </li>
        <li class="Schedule__month-item">
          <span
            @click="handelMonth('September')"
            :class="{ active: currentMonth === 'September' }"
          >
            September
          </span>
        </li>
        <li class="Schedule__month-item">
          <span
            @click="handelMonth('October')"
            :class="{ active: currentMonth === 'October' }"
          >
            October
          </span>
        </li>
        <li class="Schedule__month-item">
          <span
            @click="handelMonth('November')"
            :class="{ active: currentMonth === 'November' }"
          >
            November
          </span>
        </li>
      </ul>
    </nav>
    <button
      @click="subscribeAccept"
      style="background: none; border: none; cursor: pointer"
      class="Schedule__addres"
    >
      <img src="~@/assets/img/icons/email__icon-gray.svg" alt="adders icon" />
      <span class="Schedule__adders-text">{{ ScheduleAddres.text }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["catalogFilmsMonths", "ScheduleAddres", "currentMonth"],
  data() {
    return {
      ScheduleAddresAccept: false,
    };
  },
  methods: {
    subscribeAccept() {
      this.ScheduleAddresAccept = !this.ScheduleAddresAccept;
      alert(this.ScheduleAddres.text);
    },
    handelMonth(by) {
      this.$emit("chooseMonth", by);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.active {
  color: $purple !important;
}
.Schedule__head {
  display: flex;
  margin-top: vw(100);
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: vw(12);
  .Schedule__month-nav {
    .Schedule__month-list {
      display: flex;
      .Schedule__month-item {
        margin-left: vw(25);
        cursor: pointer;
        span {
          @include font(vw(14), bold, vw(20), $greyBlue60);
          transition: 0.5s;
        }
      }
    }
  }
  .Schedule__title {
    @include font(vw(30), bold, vw(50), $greyBlue50);
  }
  .Schedule__addres {
    align-items: center;
    justify-content: center;
    display: flex;
    @include font(vw(13), bold, vw(25), $greyBlue50);
    &:hover {
      @include font(vw(13), bold, vw(25), darken($greyBlue50, 5%));
    }
    img {
      margin-right: vw(15);
    }
  }
}
@media screen and (max-width: 708px) {
  .Schedule__head {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: vw(12);
    .Schedule__month-nav {
      .Schedule__month-list {
        display: flex;
        .Schedule__month-item {
          margin-left: vw(25);
          cursor: pointer;
          span {
            @include font(vw(23), bold, vw(20), $greyBlue60);
            transition: 0.5s;
          }
        }
      }
    }
    .Schedule__title {
      @include font(vw(33), bold, vw(50), $greyBlue50);
    }
    .Schedule__addres {
      align-items: center;
      justify-content: center;
      display: flex;
      @include font(vw(20), bold, vw(25), $greyBlue50);
      &:hover {
        @include font(vw(20), bold, vw(25), darken($greyBlue50, 5%));
      }
      img {
        margin-right: vw(15);
      }
    }
  }
}
@media screen and (max-width: 592px) {
  .Schedule__head {
    margin-top: vmin(50);
    display: block;
    width: 100%;
    align-items: center;
    padding: vmin(5) vmin(15);
    .Schedule__month-nav {
      .Schedule__month-list {
        display: flex;
        flex-wrap: wrap;
        .Schedule__month-item {
          margin-left: vmin(10);
          cursor: pointer;
          span {
            @include font(vmin(14), bold, vmin(20), $greyBlue60);
            transition: 0.5s;
          }
        }
      }
    }
    .Schedule__title {
      margin: 0;
      @include font(vmin(30), bold, vmin(50), $greyBlue50);
    }
    .Schedule__addres {
      margin-top: vmin(15);
      align-items: center;
      justify-content: center;
      display: flex;
      @include font(vmin(13), bold, vmin(25), $greyBlue50);
      &:hover {
        @include font(vmin(13), bold, vmin(25), darken($greyBlue50, 5%));
      }
      img {
        margin-right: vmin(15);
      }
    }
  }
}
@media screen and (max-width: 245px) {
  .Schedule__head {
    margin-top: vmin(50);
    display: block;
    width: 100%;
    align-items: center;
    padding: vmin(5) vmin(15);
    .Schedule__month-nav {
      .Schedule__month-list {
        display: flex;
        flex-wrap: wrap;
        .Schedule__month-item {
          margin-left: vmin(10);
          cursor: pointer;
          span {
            @include font(vmin(17), bolder, vmin(20), $greyBlue60);
            transition: 0.5s;
          }
        }
      }
    }
    .Schedule__title {
      margin: 0;
      @include font(vmin(30), bold, vmin(50), $greyBlue50);
    }
    .Schedule__addres {
      margin-top: vmin(15);
      align-items: center;
      justify-content: center;
      display: flex;
      @include font(vmin(15), bolder, vmin(25), $greyBlue50);
      &:hover {
        @include font(vmin(15), bold, vmin(25), darken($greyBlue50, 5%));
      }
      img {
        margin-right: vmin(15);
      }
    }
  }
}
@media screen and (max-width: 216px) {
  .Schedule__head {
    margin-top: vmin(50);
    display: block;
    width: 100%;
    align-items: center;
    padding: vmin(5) vmin(15);
    .Schedule__month-nav {
      .Schedule__month-list {
        display: flex;
        flex-wrap: wrap;
        .Schedule__month-item {
          margin-left: vmin(10);
          cursor: pointer;
          span {
            @include font(vmin(19), bolder, vmin(20), $greyBlue60);
            transition: 0.5s;
          }
        }
      }
    }
    .Schedule__title {
      margin: 0;
      @include font(vmin(30), bold, vmin(50), $greyBlue50);
    }
    .Schedule__addres {
      margin-top: vmin(15);
      align-items: center;
      justify-content: center;
      display: flex;
      @include font(vmin(19), bolder, vmin(25), $greyBlue50);
      &:hover {
        @include font(vmin(19), bold, vmin(25), darken($greyBlue50, 5%));
      }
      img {
        margin-right: vmin(15);
      }
    }
  }
}
</style>