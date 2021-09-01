<template>
    <div class="Schedule__head">
            <h1 class="Schedule__title">
              Schedule
            </h1>
            <nav class="Schedule__month-nav">
              <ul class="Schedule__month-list">
                <li  class="Schedule__month-item" v-for="month in catalogFilmsMonths" :key="month.title">
                    <router-link :to="month.to">
                      {{month.title}}
                    </router-link>
                </li>
              </ul>
            </nav>
            <button @click="subscribeAccept" style="background:none;border:none;cursor:pointer;" class="Schedule__addres">
              <img src="~@/assets/img/icons/email__icon-gray.svg" alt="adders icon">
              <span class="Schedule__adders-text">{{ ScheduleAddres.text }}</span>
            </button>
    </div>
</template>

<script>
export default {
  props: ["catalogFilmsMonths","ScheduleAddres"],
    data() {
        return {
            
        }
    },
    methods:{
      subscribeAccept() {
        alert(this.ScheduleAddres.text)
      }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
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
            a {
              @include font(vw(14),bold,vw(20),$text-greyBlue83);
              transition: 0.5s;
            }
            .router-link-exact-active{
              color: red;
            }
            &:hover {
              a {
                @include font(vw(14),bold,vw(20),$text-perple44);
              }
            }
          }
        }
      }
      .Schedule__title{
        @include font(vw(30),bold,vw(50),$text-greyBlue50);
      }
      .Schedule__addres{
        align-items: center;
        justify-content: center;
        display: flex;
        @include font(vw(13),bold,vw(25),$text-greyBlue50);
        &:hover{       
           @include font(vw(13),bold,vw(25),$text-greyBlue36);
        }
        img{
          margin-right: vw(15);
        }
      }
}
</style>