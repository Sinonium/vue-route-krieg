<template>
  <header class="header">
            <div class="header__panel">
                <div class="header__hamburger">
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z" fill="#C3CAD9"/>
                    </svg>
                </div>
                <div class="header__logo"><a href="">Constructor</a></div>
                <div class="header__navigation">
                    <ul>
                        <li>Series</li>
                        <li>Films</li>
                        <li>Collections</li>
                        <li>Tv</li>
                    </ul>
                </div>
                <div class="header__search">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z" fill="#C3CAD9"/>
                    </svg>
                    <input type="text" placeholder="Search series, films, artist …">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8.59249H12.17L7.29 13.4725C6.9 13.8625 6.9 14.5025 7.29 14.8925C7.68 15.2825 8.31 15.2825 8.7 14.8925L15.29 8.30249C15.68 7.91249 15.68 7.28249 15.29 6.89249L8.71 0.292486C8.52317 0.105233 8.26952 0 8.005 0C7.74048 0 7.48683 0.105233 7.3 0.292486C6.91 0.682486 6.91 1.31249 7.3 1.70249L12.17 6.59249H1C0.45 6.59249 0 7.04249 0 7.59249C0 8.14249 0.45 8.59249 1 8.59249Z" fill="#C3CAD9"/>
                    </svg>
                </div>
                <div class="header__profile">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z" fill="#C3CAD9"/>
                    </svg>
                    <span>Profile</span>
                </div>
                <div class="header__natifications">
                    <svg width="43" height="45" viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8711 33.5V28.5C20.8711 25.43 19.2311 22.86 16.3711 22.18V21.5C16.3711 20.67 15.6911 20 14.8611 20C14.0311 20 13.3711 20.67 13.3711 21.5V22.18C10.5011 22.86 8.87107 25.42 8.87107 28.5V33.5L7.57107 34.79C6.94107 35.42 7.38107 36.5 8.27107 36.5H21.4411C22.3311 36.5 22.7811 35.42 22.1511 34.79L20.8711 33.5ZM14.8611 39.5C15.9611 39.5 16.8611 38.6 16.8611 37.5H12.8611C12.8611 38.6 13.7511 39.5 14.8611 39.5ZM9.64107 22.23C10.0611 21.85 10.0711 21.2 9.67107 20.8C9.29107 20.42 8.67107 20.41 8.28107 20.78C6.57107 22.34 5.39107 24.46 5.01107 26.84C4.92107 27.45 5.39107 28 6.01107 28C6.49107 28 6.91107 27.65 6.99107 27.17C7.29107 25.23 8.25107 23.5 9.64107 22.23ZM21.4711 20.78C21.0711 20.41 20.4511 20.42 20.0711 20.8C19.6711 21.2 19.6911 21.84 20.1011 22.22C21.4811 23.49 22.4511 25.22 22.7511 27.16C22.8211 27.64 23.2411 27.99 23.7311 27.99C24.3411 27.99 24.8211 27.44 24.7211 26.83C24.3411 24.46 23.1711 22.35 21.4711 20.78Z" fill="#FFCB33"/>
                        <rect x="23" width="20" height="20" rx="10" fill="#FF6633"/>
                        <path d="M32.9961 13.1406C34.4219 13.1406 35.4102 12.4688 35.4102 11.4766C35.4102 10.7148 34.8359 10.1797 34.043 10.043V10.0156C34.7266 9.86328 35.2031 9.37891 35.2031 8.76172C35.2031 7.86719 34.3047 7.22266 32.9961 7.22266C31.6914 7.22266 30.7891 7.86719 30.7891 8.75781C30.7891 9.38281 31.2695 9.86328 31.957 10.0156V10.043C31.1641 10.1797 30.5859 10.7109 30.5859 11.4727C30.5859 12.4688 31.5664 13.1406 32.9961 13.1406ZM32.9961 9.60938C32.5352 9.60938 32.207 9.32031 32.207 8.90625C32.207 8.48828 32.5352 8.20312 32.9961 8.20312C33.457 8.20312 33.793 8.48828 33.793 8.90625C33.793 9.32031 33.457 9.60938 32.9961 9.60938ZM32.9961 12.1562C32.4609 12.1562 32.0898 11.8242 32.0898 11.3672C32.0898 10.9219 32.4609 10.5938 32.9961 10.5938C33.5352 10.5938 33.9062 10.918 33.9062 11.3672C33.9062 11.8242 33.5352 12.1562 32.9961 12.1562Z" fill="white"/>
                    </svg>
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13V5C7 3.9 7.89 3 9 3H18V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V15H9C7.89 15 7 14.1 7 13ZM10 5C9.45 5 9 5.45 9 6V12C9 12.55 9.45 13 10 13H19V5H10ZM13 10.5C12.17 10.5 11.5 9.83 11.5 9C11.5 8.17 12.17 7.5 13 7.5C13.83 7.5 14.5 8.17 14.5 9C14.5 9.83 13.83 10.5 13 10.5Z" fill="#C3CAD9"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99984 0.666668C4.8385 0.666668 0.666504 4.83867 0.666504 10C0.666504 15.1613 4.8385 19.3333 9.99984 19.3333C15.1612 19.3333 19.3332 15.1613 19.3332 10C19.3332 4.83867 15.1612 0.666668 9.99984 0.666668ZM14.0132 14.0133C13.6492 14.3773 13.0612 14.3773 12.6972 14.0133L9.99984 11.316L7.3025 14.0133C6.9385 14.3773 6.3505 14.3773 5.9865 14.0133C5.81173 13.839 5.71352 13.6022 5.71352 13.3553C5.71352 13.1085 5.81173 12.8717 5.9865 12.6973L8.68384 10L5.9865 7.30267C5.81173 7.12829 5.71352 6.89155 5.71352 6.64467C5.71352 6.39778 5.81173 6.16104 5.9865 5.98667C6.3505 5.62267 6.9385 5.62267 7.3025 5.98667L9.99984 8.684L12.6972 5.98667C13.0612 5.62267 13.6492 5.62267 14.0132 5.98667C14.3772 6.35067 14.3772 6.93867 14.0132 7.30267L11.3158 10L14.0132 12.6973C14.3678 13.052 14.3678 13.6493 14.0132 14.0133Z" fill="#C3CAD9"/>
                    </svg>
                </div>
            </div>
   </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.header{
    background-color: #fff;
    &__panel{
        display: flex;
        align-items: center;
        margin-left: vw(66);
    }
    &__logo{
       margin-left: vw(31);
       @include font(vw(18),700,vw(30))
   }
   &__navigation{
       margin-left: vw(115);
       & ul{
           display: flex;
        & li{
            margin-right: vw(40);
            @include font(vw(13),700, vw(25));
            cursor: pointer;
            transition: 0.3s;
        }
      }
   }
   &__search{
       margin: vw(20) 0;
      & input{
        width: vw(445);
        height: vw(60);
        margin-left: vw(121);
        border-radius:vw(30) ;
        border: 2px solid #F5F6F7;
        background: #FFFFFF;
        box-sizing: border-box;
        padding-left: vw(60);
        outline: none;
        position: relative;
        @include font(vw(13),600, vw(25),$greyBlue85)
      }
      & svg:first-child{
          position: absolute;
          z-index: 1;
          margin-top: vw(20);
          margin-left: vw(140);
          cursor: pointer;
      }
      & svg{
          position: absolute;
          margin-left: vw(-50);
          margin-top: vw(20);
          cursor: pointer;
      }
   }
   &__profile{
       display: flex;
       align-items: center;
       margin-left: vw(70);
       & span{ 
        margin-left: vw(22);   
        @include font(vw(13),700, vw(25));
        cursor: pointer;
        transition: 0.3s;
       }
       & :hover{
           color: #FF6633;
       }
   }
   &__natifications{
       display: flex;
       align-items: center;
       margin-left: vw(70);
       & svg:last-child{
           margin-top: vw(5);
           margin-left: vw(45);
       }
   }
}
.header ul li:hover{
        color: #FF6633;
}
@media screen and (max-width: 1024px){
    .header{
         &__natifications{
             & svg:last-child{
           margin-top: vw(5);
           margin-left: vw(25);
       } 
    }
}
}
@media screen and (max-width: 875px){
 .header{
        &__logo{
            font-size: vw(30);
        }
        &__navigation{
         margin-left: vw(90) ;
        & ul{
        & li{
          font-size: vw(15);
        }
       }
     }
        &__search{
         margin-left: vw(-90);
        & svg:first-child{
          margin-top: vw(19);
      }
      & svg{
          margin-top: vw(19);
      }   
     }
        &__profile{
          margin-left: vw(13);
           & span{
            font-size: vw(15);
           }
     }
        &__natifications{
            margin-left: vw(30);
     }
    }  
}
@media screen and (max-width: 768px){
    .header{
        &__logo{
            font-size: vw(30);
        }
         &__navigation{
         margin-left: vw(70) ;
        & ul{
        & li{
          font-size: vw(17);
        }
       }
     }
     &__search{
         margin-left: vw(-110);
        & input{
        width: vmin(145);
        height: vmin(20);
        margin-left: vw(121);
        border-radius:vw(35) ;
        @include font(vmin(6),600, vw(25),$greyBlue85)
      }
        & svg:first-child{
          margin-top: vw(20);
          width: vmin(9.05);
          height: vmin(9.05);
      }
      & svg{
          margin-left: vw(-60);
          width: vmin(9.05);
          height: vmin(9.05);
      }
     }
      &__profile{
          margin-left: vw(13);
           & span{
            font-size: vw(15);
           }
      }
    }  
}
@media screen and (max-width: 578px){
    .header{
        &__logo{
            font-size: vmin(10);
        }
          &__navigation{
              display: none;
          }
            &__profile{
                display: none;
            }
              &__search{
                  margin-left: vw(30);
        & input{
        width: vmin(145);
        height: vmin(20);
        margin-left: vw(121);
        border-radius:vw(35) ;
        @include font(vmin(6),600, vw(25),$greyBlue85)
      }
        & svg:first-child{
          margin-top: vw(22);
          margin-left: vw(140);
          margin-right: vw(40);
          width: vmin(10.05);
          height: vmin(10.05);
      }
      & svg{
          margin-left: vw(-70);
          margin-top: vw(20);
          width: vmin(10.05);
          height: vmin(10.05);
      }
     }
     &__natifications{
           & svg:last-child{
           margin-top: vw(5);
           margin-left: vw(75);
       }
     }
    }
}
@media screen and (max-width: 425px){
    .header{
         &__natifications{
             display: none;
            }
          &__search{
                  margin-left: vw(250);
        & svg:first-child{
          width: vmin(9.05);
          height: vmin(9.05);
      }
      & svg{
          width: vmin(9.05);
          height: vmin(9.05);
      }   
    }
    }
}   
@media screen and (max-width: 375px){
    .header{
         &__natifications{
             display: none;
            }
          &__search{
                  margin-left: vw(250);
        & svg:first-child{
          margin-top: vw(30);
          width: vmin(8.05);
          height: vmin(8.05);
      }
      & svg{
          margin-left: vw(-90);
          margin-top: vw(30);
          width: vmin(8.05);
          height: vmin(8.05);
      }   
    }
    }
}  
@media screen and (max-width: 320px){
    .header{
          &__search{
                  margin-left: vw(280);
        & svg:first-child{
          margin-top: vw(40);
      }
      & svg{
          margin-top: vw(40);
      }   
    }
    }
} 
</style>