<template>
  <div ref="Modal" class="Modal" :class="{ modalTrue: showModal }">
    <div class="modal">
      <div class="popa">
        <img
          class="modal__avatar"
          src="..\assets\img\Modal-avatar.png"
          alt=""
        />
        <span class="modal__name">Jean Cortez</span>
        <svg
          class="modal__setting"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.1593 10.98C17.1993 10.66 17.2293 10.34 17.2293 10C17.2293 9.66 17.1993 9.34 17.1593 9.02L19.2693 7.37C19.4593 7.22 19.5093 6.95 19.3893 6.73L17.3893 3.27C17.2693 3.05 16.9993 2.97 16.7793 3.05L14.2893 4.05C13.7693 3.65 13.2093 3.32 12.5993 3.07L12.2193 0.42C12.1893 0.18 11.9793 0 11.7293 0H7.72933C7.47933 0 7.26933 0.18 7.23933 0.42L6.85933 3.07C6.24933 3.32 5.68933 3.66 5.16933 4.05L2.67933 3.05C2.44933 2.96 2.18933 3.05 2.06933 3.27L0.0693316 6.73C-0.0606684 6.95 -0.000668392 7.22 0.189332 7.37L2.29933 9.02C2.25933 9.34 2.22933 9.67 2.22933 10C2.22933 10.33 2.25933 10.66 2.29933 10.98L0.189332 12.63C-0.000668392 12.78 -0.0506684 13.05 0.0693316 13.27L2.06933 16.73C2.18933 16.95 2.45933 17.03 2.67933 16.95L5.16933 15.95C5.68933 16.35 6.24933 16.68 6.85933 16.93L7.23933 19.58C7.26933 19.82 7.47933 20 7.72933 20H11.7293C11.9793 20 12.1893 19.82 12.2193 19.58L12.5993 16.93C13.2093 16.68 13.7693 16.34 14.2893 15.95L16.7793 16.95C17.0093 17.04 17.2693 16.95 17.3893 16.73L19.3893 13.27C19.5093 13.05 19.4593 12.78 19.2693 12.63L17.1593 10.98ZM9.72933 13.5C7.79933 13.5 6.22933 11.93 6.22933 10C6.22933 8.07 7.79933 6.5 9.72933 6.5C11.6593 6.5 13.2293 8.07 13.2293 10C13.2293 11.93 11.6593 13.5 9.72933 13.5Z"
            fill="#C3CAD9"
          />
        </svg>
      </div>
      <span class="modal__subscription">Your Subscription</span>
      <span class="modal__data">Left 30 days</span>
      <div class="modal__sub__line">
        <span :style="widthLineLeft"></span>
      </div>
      <div class="modal__list">
        <router-link :to="{ name: 'PageOne' }" class="modal__list-column">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.95286 15.7333C4.95286 15.7333 0 15.1963 0 10.9971C0 6.79791 2.53581 5.06667 4.64504 4.0128C6.75427 2.95893 7.08326 0 7.08326 0C7.08326 0 10.3801 1.85876 10.8542 4.18686C11.3283 6.51497 9.89102 8.44444 9.89102 8.44444C9.89102 8.44444 11.4796 8.32292 12.1577 7.16771C12.8358 6.0125 12.9889 5.06667 12.9889 5.06667C12.9889 5.06667 16.068 9.80043 14.4328 12.2156C12.7976 14.6307 10.3751 16 10.3751 16C10.3751 16 7.43432 14.6768 6.70687 13.1947C5.97941 11.7126 6.50234 9.6 6.50234 9.6C6.50234 9.6 4.09996 10.3661 3.72077 12.2156C3.34158 14.065 4.95286 15.7333 4.95286 15.7333Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>Popular</span>
        </router-link>
        <router-link :to="{ name: 'PageFour' }" class="modal__list-column">
          <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3536 17.1307C10.5936 17.8207 9.42357 17.8207 8.66357 17.1207L8.55357 17.0207C3.30357 12.2707 -0.126429 9.16065 0.00357106 5.28065C0.0635711 3.58065 0.933571 1.95065 2.34357 0.990654C4.98357 -0.809346 8.24357 0.0306542 10.0036 2.09065C11.7636 0.0306542 15.0236 -0.819346 17.6636 0.990654C19.0736 1.95065 19.9436 3.58065 20.0036 5.28065C20.1436 9.16065 16.7036 12.2707 11.4536 17.0407L11.3536 17.1307Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>Favorite</span>
        </router-link>
        <div class="modal__list-column">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM13.55 13.8L9.47 11.29C9.17 11.11 8.99 10.79 8.99 10.44V5.75C9 5.34 9.34 5 9.75 5C10.16 5 10.5 5.34 10.5 5.75V10.2L14.34 12.51C14.7 12.73 14.82 13.2 14.6 13.56C14.38 13.91 13.91 14.02 13.55 13.8Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>Watch Later</span>
        </div>
        <router-link :to="{ name: 'PageThree' }" class="modal__list-column">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0H12V12H8V0ZM6 7H2V12H6V7ZM0 16V13H20V16H0ZM18 3H14V12H18V3Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>Statistics</span>
        </router-link>
        <router-link :to="{ name: 'CatalogFilms' }" class="modal__list-column">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 2H15V1C15 0.45 14.55 0 14 0C13.45 0 13 0.45 13 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.89 2 0.01 2.9 0.01 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM15 18H3C2.45 18 2 17.55 2 17V7H16V17C16 17.55 15.55 18 15 18ZM5 9H8C8.55 9 9 9.45 9 10V13C9 13.55 8.55 14 8 14H5C4.45 14 4 13.55 4 13V10C4 9.45 4.45 9 5 9Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>Schedule</span>
        </router-link>
        <router-link :to="{ name: 'PageTwo' }" class="modal__list-column">
          <svg
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.12 0.443758L6.58 5.98376C6.21 6.35376 6 6.86376 6 7.39376V17.3838C6 18.4838 6.9 19.3838 8 19.3838H17C17.8 19.3838 18.52 18.9038 18.84 18.1738L22.1 10.5638C22.94 8.58376 21.49 6.38376 19.34 6.38376H13.69L14.64 1.80376C14.74 1.30376 14.59 0.793758 14.23 0.433758C13.64 -0.146242 12.7 -0.146242 12.12 0.443758ZM2 19.3838C3.1 19.3838 4 18.4838 4 17.3838V9.38376C4 8.28376 3.1 7.38376 2 7.38376C0.9 7.38376 0 8.28376 0 9.38376V17.3838C0 18.4838 0.9 19.3838 2 19.3838Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>For Me</span>
        </router-link>
        <router-link :to="{ name: 'PageSeven' }" class="modal__list-column">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.99683 5.74682V9.42682C7.99683 9.77682 8.18683 10.1068 8.48683 10.2868L11.6068 12.1368C11.9668 12.3468 12.4268 12.2268 12.6368 11.8768C12.8468 11.5168 12.7368 11.0568 12.3768 10.8468L9.50683 9.13682V5.73682C9.49683 5.33682 9.15683 4.99682 8.74683 4.99682C8.33683 4.99682 7.99683 5.33682 7.99683 5.74682ZM17.9968 6.49682V1.20682C17.9968 0.756825 17.4568 0.536825 17.1468 0.856825L15.3668 2.63682C13.5568 0.826825 10.9768 -0.213175 8.15683 0.0368247C3.96683 0.416825 0.516833 3.78682 0.0568334 7.97682C-0.543167 13.3968 3.68683 17.9968 8.99683 17.9968C13.5868 17.9968 17.3768 14.5568 17.9268 10.1168C17.9968 9.51682 17.5268 8.99683 16.9268 8.99683C16.4268 8.99683 16.0068 9.36683 15.9468 9.85682C15.5168 13.3468 12.5068 16.0468 8.89683 15.9968C5.18683 15.9468 2.05683 12.8168 1.99683 9.09682C1.93683 5.19682 5.10683 1.99682 8.99683 1.99682C10.9268 1.99682 12.6768 2.78682 13.9468 4.04682L11.8568 6.13682C11.5368 6.45682 11.7568 6.99682 12.2068 6.99682H17.4968C17.7768 6.99682 17.9968 6.77682 17.9968 6.49682Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>History</span>
        </router-link>
        <div class="modal__list-column">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 13V5C7 3.9 7.89 3 9 3H18V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V15H9C7.89 15 7 14.1 7 13ZM10 5C9.45 5 9 5.45 9 6V12C9 12.55 9.45 13 10 13H19V5H10ZM13 10.5C12.17 10.5 11.5 9.83 11.5 9C11.5 8.17 12.17 7.5 13 7.5C13.83 7.5 14.5 8.17 14.5 9C14.5 9.83 13.83 10.5 13 10.5Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>Subscription</span>
        </div>
      </div>
      <div class="modal__episode">
        <img src="..\assets\img\modal-img.png" alt="" />
        <svg
          class="modal__episode-zoom"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="40" height="40" rx="20" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.6 16.8H21.9882L19.8226 18.9656L19.8225 18.9657L18.9656 19.8226L16.8 21.9882V21.6C16.8 21.16 16.44 20.8 16 20.8C15.56 20.8 15.2 21.16 15.2 21.6V24C15.2 24.44 15.56 24.8 16 24.8H18.4C18.84 24.8 19.2 24.44 19.2 24C19.2 23.56 18.84 23.2 18.4 23.2H17.8509L20.0963 20.9546L20.097 20.9539L20.9539 20.0971L23.2 17.851V18.4C23.2 18.84 23.56 19.2 24 19.2C24.44 19.2 24.8 18.84 24.8 18.4V16C24.8 15.56 24.44 15.2 24 15.2H21.6C21.16 15.2 20.8 15.56 20.8 16C20.8 16.44 21.16 16.8 21.6 16.8Z"
            fill="white"
          />
        </svg>
        <svg
          class="modal__episode-play"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.5" width="60" height="60" rx="30" fill="#0D111A" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25 25.0014V35.3614C25 36.1514 25.87 36.6314 26.54 36.2014L34.68 31.0214C35.3 30.6314 35.3 29.7314 34.68 29.3314L26.54 24.1614C25.87 23.7314 25 24.2114 25 25.0014Z"
            fill="white"
          />
        </svg>
        <span>Continue the series</span>
      </div>
    </div>
    <div class="modal-2">
      <div class="modal-2__head">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 2H15V1C15 0.45 14.55 0 14 0C13.45 0 13 0.45 13 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.89 2 0.01 2.9 0.01 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM15 18H3C2.45 18 2 17.55 2 17V7H16V17C16 17.55 15.55 18 15 18ZM5 9H8C8.55 9 9 9.45 9 10V13C9 13.55 8.55 14 8 14H5C4.45 14 4 13.55 4 13V10C4 9.45 4.45 9 5 9Z"
            fill="#C3CAD9"
          />
        </svg>
        <span>Show Schedule</span>
        <svg
          width="16"
          height="4"
          viewBox="0 0 16 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
            fill="#C3CAD9"
          />
        </svg>
      </div>
      <div class="modal-2__list">
        <ul>
          <li>05.12</li>
          <li>06.12</li>
          <li>07.12</li>
          <li>08.12</li>
          <li>12.12</li>
        </ul>
        <ul>
          <li>Sherlock</li>
          <li>Daredevil</li>
          <li>Westworld</li>
          <li>Wahlburgers</li>
          <li>The Real World</li>
        </ul>
        <ul>
          <li>s02e03</li>
          <li>s01e03</li>
          <li>s11e04</li>
          <li>s06e05</li>
          <li>s02e03</li>
        </ul>
      </div>
    </div>
  </div>
  <div @click.self="toggleHiddenModal" class="overlay"></div>
</template>

<script>
export default {
  props: ["showModal"],
  data() {
    return {
      widthLineLeft: `width: 30%`,
    };
  },
  methods: {
    toggleHiddenModal() {
      this.$emit("toggleHidden");
    },
  },
  updated(showModal) {
    if (this.showModal) {
      const Overlay = document.querySelector(".overlay");
      const Modall = document.querySelector(".Modal");
      Modall.classList.add("modalTrue");
      Overlay.classList.add("overlaySowModal");
    } else {
      const Overlay = document.querySelector(".overlay");
      const Modall = document.querySelector(".Modal");
      Modall.classList.remove("modalTrue");
      Overlay.classList.remove("overlaySowModal");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
a {
  text-decoration: none;
}
.overlay {
  display: none;
}
.Modal {
  position: absolute;
  z-index: 222;
  transform: scale(0);
  transition: 1s;
  left: 76%;
  .modal {
    text-align: center;
    max-width: vw(340);
    height: vw(1015);
    border-radius: vw(10);
    background-color: $white;
    position: relative;
    .popa {
      display: flex;
      & .modal__setting {
        margin-top: vw(38);
        margin-left: vw(20);
      }
    }
    &__avatar {
      margin: vw(30) 0 vw(20) vw(20);
    }
    &__name {
      @include font(vw(14), 700, vw(30));
      margin: auto vw(83) auto vw(25);
      cursor: pointer;
    }
    &__subscription {
      @include font(vw(14), 700, vw(30));
      margin: vw(20) vw(80) vw(0) vw(20);
      cursor: pointer;
    }
    &__data {
      @include font(vw(14), 700, vw(30));
      margin-right: vw(20);
      cursor: pointer;
    }
    &__sub__line {
      height: vw(5);
      width: vw(260);
      position: relative;
      background-color: #f0f2f7;
      border-radius: vw(5);
      margin: vw(20) vw(23) vw(15);
      padding: vw(2);
      & span {
        position: relative;
        height: vw(5);
        background-color: #8833ff;
        border-radius: vw(5);
        display: block;
      }
    }
  }
  .modal__list {
    margin-left: vw(20);
    margin-top: vw(43);
    display: grid;
    grid-template-columns: vw(130) vw(130);
    grid-template-rows: vw(125) vw(125) vw(125) vw(125);
    grid-column-gap: vw(19);
    grid-row-gap: vw(17);
    .modal__list-column.router-link-exact-active {
      background: orange;
      svg path {
        fill: white;
      }
      span {
        color: white;
      }
    }
    .modal__list-column {
      background-color: $greyBlue99;
      border-radius: vw(10);
      cursor: pointer;
      text-align: center;
      transition: 0.3s;
      & svg {
        margin: vw(36) vw(50) vw(21) vw(50);
      }
      & span {
        @include font(vw(12), 700, vw(25), $greyBlue60);
        margin: vw(30) 0 vw(30) 0;
      }
    }
    .modal__list-column:hover {
      background-color: #ff6633;
      & svg path {
        fill: $white;
      }
      & span {
        color: $white;
      }
    }
  }
  .modal__episode {
    max-width: vw(280);
    max-height: vw(195);
    position: relative;
    margin-top: vw(10);
    margin-left: vw(20);
    & img {
      max-width: vw(280);
      max-height: vw(195);
      margin-top: vw(10);
    }
    &-zoom {
      position: absolute;
      top: 0;
      left: 0;
      margin: vw(25) 0 0 vw(15);
      cursor: pointer;
    }
    &-play {
      position: absolute;
      bottom: 0;
      left: 0;
      margin: vw(50) vw(110);
      cursor: pointer;
    }
    & span {
      position: absolute;
      @include font(vw(14), 700, vw(25), $white);
      bottom: 0;
      left: 0;
      margin: 0 0 vw(15) vw(25);
    }
  }
  .modal__episode-play rect:hover {
    fill: #ff6633;
    opacity: 1;
    transition: 0.2s;
  }
  .modal__episode-zoom rect:hover {
    fill: #ff6633;
    opacity: 1;
    transition: 0.2s;
  }
  .modal-2 {
    margin-top: vw(30);
    max-width: vw(340);
    height: vw(350);
    border-radius: vw(10);
    background-color: $white;
    padding-top: vw(7);
    & span {
      @include font(vw(13), 700, vw(25), $greyBlue60);
      cursor: pointer;
    }
    & svg {
      cursor: pointer;
    }
    &__list {
      display: flex;

      & ul {
        margin-left: vw(40);
        li {
          @include font(vw(12), 700, vw(25), $greyBlue60);
          margin-top: vw(30);
        }
      }
    }
  }
  .modal-2__head {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: vw(10);
    svg:first-child {
      margin-right: vw(40);
    }
    svg:last-child {
      margin-left: vw(35);
    }
  }
}
.modalTrue {
  transform: scale(1) !important;
  right: 0%;
  transition: 1s;
}
@media screen and (max-width: 1260px) {
  .Modal {
    position: absolute;
    transition: 0.7s;
    transform: scale(0);
  }
  // .modalTrue {
  //   transform: scale(1);
  //   right: 0%;
  //   transition: 0.7s;
  // }
}
@media screen and (max-width: 1024px) {
  // .modalTrue {
  //   transform: scale(1) !important;
  //   left: 75%;
  //   transition: 0.7s;
  // }
  .Modal {
    position: absolute;
    transition: 0.7s;
    transform: scale(0);
    .modal {
    text-align: center;
    max-width: vw(540);
    height: vw(1085);
    .popa {
      & .modal__setting {
        margin-left: vw(10);
        margin-top: vw(50);
      }
    }
    &__avatar {
      margin: vw(30) 0 vw(20) vw(30);
    }
    &__name {
     font-size: vw(16)
    
    }
    &__subscription {
      @include font(vw(16), 700, vw(30));
    }
    &__data {
      @include font(vw(16), 700, vw(30));
    }
    &__sub__line {
      height: vw(10);
      width: vw(330);
      margin: vw(20) vw(30) vw(15);
      & span {
        height: vw(11);
      }
    }
    }
    .modal__list {
    margin-left: vw(40);
    margin-top: vw(43);
    display: grid;
    grid-template-columns: vw(150) vw(150);
    grid-template-rows: vw(135) vw(135) vw(135) vw(135);
    .modal__list-column {
      & span {
        @include font(vw(14), 700, vw(25), $greyBlue60);
        margin: vw(30) 0 vw(30) 0;
      }
    }
  }
    .modal__episode {
      width: vw(300);
      height: vw(185);
      margin-left: vw(50);
      margin-top: vw(20);
    & img {
      max-width: vw(350);
      max-height: vw(205);
      margin-top: vw(-5);
    }
    &-zoom {
      margin: vw(0) 0 0 vw(25);
      width: vw(50);
    }
    &-play {
      margin: vw(50) vw(110);
      width: vw(70);
    }
    & span {
      @include font(vw(18), 700, vw(25), $white);
    }
  }
   .modal-2 {
    margin-top: vw(30);
    max-width: vw(540);
    height: vw(350);
    border-radius: vw(10);
    background-color: $white;
    padding-top: vw(7);
    & span {
      @include font(vw(16), 700, vw(25), $greyBlue60);
      margin: 0 vw(30);
    }
    & svg {
      cursor: pointer;
    }
    &__list {
      display: flex;

      & ul {
        margin-left: vw(50);
        li {
          @include font(vw(16), 700, vw(25), $greyBlue60);
          margin-top: vw(30);
        }
      }
    }
  }
  }
}
@media screen and (max-width: 768px) {
 .Modal {
    // position: absolute;
    // transition: 0.7s;
    // transform: scale(0);
    left: 72.5%;
    .modal {
    text-align: center;
    max-width: vw(440);
    height: vw(1170);
    .popa {
      & .modal__setting {
        margin-left: vw(10);
        margin-top: vw(50);
      }
    }
    &__avatar {
      margin: vw(30) 0 vw(20) vw(30);
    }
    &__name {
     font-size: vw(19)
    
    }
    &__subscription {
      @include font(vw(19), 700, vw(30));
    }
    &__data {
      @include font(vw(19), 700, vw(30));
    }
    &__sub__line {
      height: vw(10);
      width: vw(330);
      margin: vw(20) vw(40) vw(15);
      & span {
        height: vw(11);
      }
    }
    }
    .modal__list {
    margin-left: vw(39);
    margin-top: vw(43);
    display: grid;
    grid-template-columns: vw(160) vw(160);
    grid-template-rows: vw(145) vw(145) vw(145) vw(145);
    .modal__list-column {
      & span {
        @include font(vw(19), 700, vw(25), $greyBlue60);
        margin: vw(30) 0 vw(30) 0;
      }
    }
  }
    .modal__episode {
      width: vw(350);
      height: vw(185);
      margin-left: vw(40);
      margin-top: vw(20);
    & img {
      max-width: vw(360);
      max-height: vw(230);
      margin-top: vw(-5);
    }
    &-zoom {
      margin: vw(0) 0 0 vw(25);
      width: vw(60);
    }
    &-play {
      margin: vw(30) vw(130);
      width: vw(80);
    }
    & span {
      @include font(vw(19), 700, vw(25), $white);
    }
  }
   .modal-2 {
    margin-top: vw(30);
    max-width: vw(540);
    height: vw(350);
    border-radius: vw(10);
    background-color: $white;
    padding-top: vw(7);
    & span {
      @include font(vw(19), 700, vw(25), $greyBlue60);
      margin: 0 vw(30);
    }
    & svg {
      cursor: pointer;
    }
    &__list {
      display: flex;

      & ul {
        margin-left: vw(50);
        li {
          @include font(vw(19), 700, vw(25), $greyBlue60);
          margin-top: vw(30);
        }
      }
    }
  }
  }
}
@media screen and (max-width: 425px) {
   .overlaySowModal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: block;
    z-index: 1;
  }
  .Modal {
    // position: absolute;
    // transition: 0.7s;
    // transform: scale(0);
    left: 40%;
    .modal {
    // text-align: center;
    max-width: vw(900);
    height: vw(2600);
    border-radius: vw(20);
    // background-color: $white;
    .popa {
      & .modal__setting {
        margin-top: vw(98);
        margin-left: 8vw;
      }
    }
     &__avatar {
      margin: vw(60) 0 vw(30) vw(60);
    }
    &__name {
      font-size: vmin(9);
    }
    &__subscription {
      font-size: vmin(9);
      margin: vw(20) vw(80) vw(0) vw(20);
      cursor: pointer;
    }
    &__data {
      font-size: vmin(9);
      margin-right: vw(20);
      cursor: pointer;
    }
    &__sub__line {
      height: vw(10);
      width: vmin(160);
      margin: vw(20) vw(90) vw(15);
      & span {
        height: vw(11);
      
      }
    }
  }
   .modal__list {
    margin-left: vw(60);
    margin-top: vw(43);
    display: grid;
    grid-template-columns: vmin(80) vmin(80);
    grid-template-rows: vmin(80) vmin(80) vmin(80) vmin(80);
    grid-column-gap: vw(49);
    grid-row-gap: vw(30);
    .modal__list-column {
      border-radius: vw(10);
      & svg {
        margin: vw(56) vw(120) vw(81) vw(110);
      }
      & span {
       font-size: vmin(10);
        margin: vw(30) 0 vw(60) 0;
      }
    }
  }
  .modal__episode {
    max-width: vmin(155);
    max-height: vmin(185);
    position: relative;
    margin-top: vmin(10);
    margin-left: vmin(20);
    & img {
      max-width: vmin(165);
      max-height: vmin(195);
      margin-top: vw(10);
    }
    &-zoom {
      position: absolute;
      top: 0;
      left: 0;
      margin: vw(40) 0 0 vw(35);
      cursor: pointer;
      width: vmin(30);
    }
    &-play {
      margin: vmin(-50) vmin(60);
      width: vmin(40);
    }
    & span {
      font-size: vmin(10);
      margin: 0 0 vmin(-60) vw(25);
    }
  }
   .modal-2 {
    margin-top: vw(30);
    max-width: vw(900);
    height: vw(650);
    padding-top: vw(7);
    & span {
      font-size: vmin(10);
      cursor: pointer;
      margin: vw(40) vw(100);
    }
    & svg {
      cursor: pointer;
    }
    &__list {
      display: flex;

      & ul {
        margin-left: vw(80);
        li {
          font-size: vmin(10);
          margin-top: vw(70);
        }
      }
    }
  }
  }
}
@media screen and (max-width: 320px) {
  .Modal {
    position: absolute;
    transition: 0.7s;
    transform: scale(0);
    left: 35%;
    .modal {
    // text-align: center;
    max-width: vw(1000);
    min-height: vw(2600);
    border-radius: vw(20);
    // background-color: $white;
    .popa {
      & .modal__setting {
        margin-top: vw(110);
        margin-left: 8vw;
      }
    }
     &__avatar {
      margin: vw(60) 0 vw(30) vw(60);
    }
    &__name {
      font-size: vmin(9);
    }
    &__subscription {
      font-size: vmin(9);
      margin: vw(20) vw(80) vw(0) vw(20);
      cursor: pointer;
    }
    &__data {
      font-size: vmin(9);
      margin-right: vw(20);
      cursor: pointer;
    }
    &__sub__line {
      height: vw(10);
      width: vmin(160);
      margin: vw(20) vw(140) vw(15);
      & span {
        height: vw(11);
      
      }
    }
  }
   .modal__list {
    margin-left: vw(130);
    margin-top: vw(43);
    display: grid;
    grid-template-columns: vmin(80) vmin(80);
    grid-template-rows: vmin(80) vmin(80) vmin(80) vmin(80);
    grid-column-gap: vw(49);
    grid-row-gap: vw(30);
    .modal__list-column {
      border-radius: vw(10);
      & svg {
        margin: vw(56) vw(120) vw(61) vw(110);
      }
      & span {
       font-size: vmin(10);
        margin: vw(30) 0 vw(70) 0;
      }
    }
  }
  .modal__episode {
    max-width: vmin(155);
    max-height: vmin(185);
    position: relative;
    margin-top: vmin(10);
    margin-left: vmin(32);
    & img {
      max-width: vmin(165);
      max-height: vmin(195);
      margin-top: vw(10);
    }
    &-zoom {
      position: absolute;
      top: 0;
      left: 0;
      margin: vw(40) 0 0 vw(35);
      cursor: pointer;
      width: vmin(30);
    }
    &-play {
      margin: vmin(-50) vmin(60);
      width: vmin(40);
    }
    & span {
      font-size: vmin(10);
      margin: 0 0 vmin(-60) vw(25);
    }
  }
   .modal-2 {
    margin-top: vw(30);
    max-width: vw(1000);
    height: vw(650);
    padding-top: vw(10);
    & span {
      font-size: vmin(10);
      cursor: pointer;
      margin: vw(40) vw(100);
    }
    & svg {
      cursor: pointer;
    }
    &__list {
      display: flex;

      & ul {
        margin-left: vw(110);
        li {
          font-size: vmin(10);
          margin-top: vw(70);
        }
      }
    }
  }
  }
}
// @media screen and (max-width: 700px) {
//   .Modal {
//     .modal {
//       height: 84vw;
//       .modal__list {
//         grid-template-columns: 9.125vw 9.125vw;
//         grid-template-rows: 10vw 10vw 10vw 10vw;
//         grid-column-gap: 0.1875vw;
//         grid-row-gap: 3.0625vw;
//         .modal__list-column {
//           padding: vw(15);
//           svg {
//             margin: 2.25vw 3.125vw 1.3125vw 2.125vw;
//           }
//         }
//       }
//     }
//   }
// }
// @media screen and (max-width: 700px) {
//   .Modal {
//     .modal {
//       height: 86vw;
//     }
//   }
// }
// @media screen and (max-width: 612px) {
//   .Modal {
//     .modal {
//       height: 92vw;
//       .modal__list {
//         grid-template-columns: 9.125vw 9.125vw;
//         grid-template-rows: 11vw 11vw 11vw 11vw;
//         grid-column-gap: 0.1875vw;
//         grid-row-gap: 3.0625vw;
//         .modal__list-column {
//           span {
//             font-size: vw(19);
//           }
//         }
//       }
//     }
//     .modal-2 {
//       height: 30vw;
//       padding: vw(15) vw(10);
//       width: 49vw;
//       .modal-2__head {
//         display: flex;
//         flex-direction: column;
//         & svg:first-child {
//           margin-top: 2vw;
//         }
//         & span {
//           margin-top: 2vw;
//           margin-left: -3vw;
//           font-size: vw(18);
//         }
//         & svg:last-child {
//           margin-top: 2vw;
//           margin-left: -1.8125vw;
//         }
//       }
//       .modal-2__list {
//         ul {
//           margin-left: 1.5vw;
//           li {
//             font-size: vw(16);
//           }
//         }
//       }
//     }
//   }
// }
// @media screen and (max-width: 593px) {
//   .modalTrue {
//     transform: scale(1) !important;
//     right: 0%;
//     transition: 1s;
//   }
//   .overlaySowModal {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0,0,0,0.5);
//     display: block;
//     z-index: 1;
//   }
//   .Modal {
//     position: absolute;
//     z-index: 222;
//     transform: scale(1) !important;
//     transition: 1s;
//     right: -10%;
//   }
//   .Modal .modal .popa .modal__name {
//     font-size: 3vmin !important;
//     line-height: 3vmin !important;
//   }
//   .modal {
//     text-align: center !important;
//     max-width: vmin(200) !important;
//     height: 150vmin !important;
//     border-radius: vmin(10) !important;
//     position: relative !important;
//     .popa {
//       display: flex;
//       & .modal__setting {
//         width: 5vmin;
//         height: 5vmin;
//         margin-left: -3vmin !important;
//       }
//     }
//     &__avatar {
//       margin: vmin(30) 0 vmin(20) vmin(20);
//       height: 20vmin;
//       width: 20vmin;
//     }
//     &__name {
//       font-size: 40vmin !important;
//     }
//     &__subscription {
//       @include font(vmin(20) !important, 700 !important, vmin(30) !important);
//       margin: vmin(20) vmin(80) vmin(0) vmin(20);
//     }
//     &__data {
//       @include font(vmin(20) !important, 700 !important, vmin(30) !important);
//       margin-right: vmin(20);
//     }
//     &__sub__line {
//       height: vmin(5) !important;
//       width: 40vmin !important;
//       position: relative;
//       background-color: #f0f2f7;
//       border-radius: vmin(5);
//       margin: vmin(20) vmin(23) vmin(15) !important;
//       padding: vmin(2) !important;
//       & span {
//         position: relative;
//         height: 100% !important;
//         background-color: #8833ff;
//         border-radius: vmin(5) !important;
//         display: block;
//       }
//     }
//   }
//   .modal__list {
//     margin-top: vmin(43);
//     display: grid;
//     grid-template-columns: 23.125vmin 21.125vmin !important;
//     grid-template-rows: 11vmin 11vmin 11vmin 12vmin !important;
//     grid-column-gap: 2.1875vmin !important;
//     grid-row-gap: 4.0625vmin !important;
//     margin-top: 1vmin;
//     align-items: center;
//     justify-content: center;
//     .modal__list-column {
//       background-color: $greyBlue99;
//       border-radius: vmin(10);
//       cursor: pointer;
//       text-align: center;
//       transition: 0.3s;
//       & svg {
//         margin: vmin(36) vmin(50) vmin(21) vmin(50);
//       }
//       & span {
//         @include font(
//           vmin(8) !important,
//           700 !important,
//           vmin(25) !important,
//           $greyBlue60
//         );
//         margin: vmin(30) 0 vmin(30) 0;
//       }
//     }
//     .modal__list-column:hover {
//       background-color: #ff6633;
//       & svg path {
//         fill: $white;
//       }
//       & span {
//         color: $white;
//       }
//     }
//   }
//   .modal__episode {
//     max-width: vmin(280) !important;
//     max-height: vmin(195) !important;
//     margin-top: vmin(10) !important;
//     margin-left: 0 !important;
//     & img {
//       max-width: 110vmin !important;
//       max-height: 55vmin !important;
//       margin-top: vmin(10) !important;
//     }
//     &-zoom {
//       height: 6vmin !important;
//       width: 6vmin !important;
//       margin: vmin(25) 0 0 vmin(15) !important;
//       cursor: pointer;
//     }
//     &-play {
//       width: 20vmin !important;
//       height: 15vmin !important;
//       margin: vmin(50) vmin(50) !important;
//     }
//     & span {
//       @include font(
//         vmin(14) !important,
//         700 !important,
//         vmin(25) !important,
//         $white
//       );
//       margin: 0 0 0.9375vmin 4.5625vmin !important;
//     }
//   }
//   .modal-2 {
//     margin-top: vmin(30) !important;
//     max-width: vmin(360) !important;
//     height: 62.33333vmin !important;
//     border-radius: vw(10) !important;
//     & span {
//       font-size: vmin(17) !important;
//       margin: -1vmin 9vmin -36px 4.6vmin;
//       cursor: pointer;
//     }
//     & svg {
//       margin-left: 0 !important;
//       margin-top: 0 !important;
//       margin: 2.33333vmin 43.33333vmin 2vmin 7.66667vmin !important;
//       width: 10.66667vmin !important;
//       height: 7.66667vmin !important;
//     }
//     & svg:last-child {
//       cursor: pointer;
//       margin: 1.33333vmin -25.66667vmin 0 6.66667vmin !important;
//       width: 8.66667vmin !important;
//       height: 0vmin;
//     }
//     &__list {
//       display: flex;
//       flex-wrap: wrap;
//       & ul {
//         margin-left: 2vmin !important;
//         li {
//           @include font(
//             vmin(12) !important,
//             700 !important,
//             vmin(25) !important,
//             $greyBlue60
//           );
//           margin-top: vmin(30);
//         }
//       }
//     }
//   }
// }
// @media screen and (max-width: 584px) {
//   .modal {
//     width: 100vmin;
//     // max-width: 86.33333vmin !important;
//     height: 100vmin !important;
//     border-radius: 2.66667vmin !important;
//   }
//   .modal__avatar {
//     margin: 8vmin 0 5.33333vmin 5.33333vmin;
//     height: 40vmin;
//     width: 38vmin; 
//   }
//   .modal__list {
//     margin-top: 11.46667vmin !important;
//     grid-template-columns: 38.125vmin 36.125vmin !important;
//     grid-template-rows: 50vmin 50vmin 50vmin 50vmin !important;
//     grid-column-gap: 5.1875vmin !important;
//     grid-row-gap: -8.9375vmin !important;
//     margin-top: 1vmin !important;
//   }
//   .modal__list .modal__list-column span {
//     font-size: 8vmin !important;
//     line-height: 10vmin;
//   }
//   .Modal .modal .modal__list .modal__list-column svg {
//     margin: 12.25vmin 3.125vmin 9.3125vmin 3.125vmin;
//   }
//   .Modal .modal .modal__list .modal__list-column {
//     padding: 4vmin;
//   }
//   .modal__sub__line {
//     height: 1.33333vmin !important;
//     width: 87% !important;
//     margin: 5.33333vmin 6.13333vmin 4vmin !important;
//     padding: 0.53333vmin !important;
//   }
//   .Modal .modal .popa .modal__name {
//     font-size: 10vmin !important;
//     line-height: 10vmin !important;
//   }
//   .modal .popa .modal__setting {
//     width: 27vmin;
//     height: 19vmin;
//     margin-left: -4vmin !important;
//   }
//   .modal__subscription {
//     font-size: 9.33333vmin !important;
//     line-height: 14vmin !important;
//   }
//   .modal__data {
//     font-size: 10.33333vmin !important;
//     font-weight: 700 !important;
//     line-height: 12vmin !important;
//     font-style: normal;
//     color: #4d5e80;
//     margin-right: 5.33333vmin;
//   }
//   .Modal {
//     right: -100%;
//   }
// }
</style>