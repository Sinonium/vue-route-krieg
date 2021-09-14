<template>
    <section class="stats">
        <div class="stats__block">
            <div class="stats__block__latest-tv-shows">
                <div class="latest__title title">
                    <span>Latest TV shows</span>
                    <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#C3CAD9"/>
                    </svg>
                </div>
                <ul class="latest__list">
                    <li v-for="show in latestTvShows" :key="show.title">
                        <span>{{show.title}}</span><span>s{{show.seasons}}e{{show.episodes}}</span>
                    </li>
                </ul>
            </div>
            <div class="stats__block__time-spent-service">
                <div class="time__spent__service-title title">
                    <span>Time Spent in Service</span>
                    <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#C3CAD9"/>
                    </svg>
                </div>
                <div class="time__spent__service-diagram">
                    <svg width="224" height="224" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M112 222C172.751 222 222 172.751 222 112C222 51.2487 172.751 2 112 2C51.2487 2 2 51.2487 2 112C2 172.751 51.2487 222 112 222Z" stroke="#3361FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M112 202C161.706 202 202 161.706 202 112C202 62.2944 161.706 22 112 22C62.2944 22 22 62.2944 22 112C22 161.706 62.2944 202 112 202Z" stroke="#29CC39" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M160.143 35.9449C146.22 27.1137 129.707 22 112 22C62.2944 22 22 62.2944 22 112C22 161.706 62.2944 202 112 202V202C129.146 202 145.171 197.206 158.81 188.884" stroke="#29CC39" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M112 182C150.66 182 182 150.66 182 112C182 73.3401 150.66 42 112 42C73.3401 42 42 73.3401 42 112C42 150.66 73.3401 182 112 182Z" stroke="#8833FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M62 160.91C74.7106 173.922 92.4509 182 112.078 182V182C150.738 182 182.078 150.66 182.078 112C182.078 73.3401 150.738 42 112.078 42C105.261 42 98.6727 42.9742 92.4432 44.7911" stroke="#8833FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>320 h</span>
                </div>
            </div>
            <div class="stats__block__time-spent-watching-shows">
                <div class="time__spent__shows-title title">
                    <span>Time Spent Watching Shows</span>
                    <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#C3CAD9"/>
                    </svg>
                </div>
                <div class="time__spent__shows-content">
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M27 52C40.8071 52 52 40.8071 52 27C52 13.1929 40.8071 2 27 2C13.1929 2 2 13.1929 2 27C2 40.8071 13.1929 52 27 52Z" stroke="#29CC39" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M43.4613 8.18397C39.0636 4.33353 33.3043 2 27 2C13.1929 2 2 13.1929 2 27C2 40.8071 13.1929 52 27 52V52C33.4089 52 39.2545 49.5884 43.679 45.6232" stroke="#29CC39" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class=time>240</span>
                    <span>hours</span>
                    <span class=time>35</span>
                    <span>min</span>
                </div>
            </div>
            <div class="stats__block__time-spent-watching-movies">
                 <div class="time__spent__movies-title title">
                     <span>Time Spent Watching Movies</span>
                     <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#C3CAD9"/>
                    </svg>
                 </div>
                 <div class="time__spent__movies-content">
                     <svg class="progress-ring" width="54" height="54">
                         <!-- <circle class="progress-ring__circle" stroke="#8833FF" fill="transparent" stroke-width="3" cx="26" cy="26" r="18"/> -->
                        <circle class="progress-ring__circle" stroke="#8833FF" opacity="0.1" fill="transparent" stroke-width="3" cx="18" cy="18" r="17"/>
                     </svg>
                    <span class=time>{{hours.h}}</span>
                    <span>hours</span>
                    <span class=time>{{hours.m}}</span>
                    <span>min</span>
                 </div>
            </div>
            <div class="stats__block__last-week-time">
                <div class="last__week__time-title title">
                    <span>Last Week Time</span>
                    <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#C3CAD9"/>
                    </svg>
                </div>
                <div class="last__week__time-content">
                    <ul class="last__week__time-content-list">
                        <li>4</li>
                        <li>3</li>
                        <li>2</li>
                        <li>1</li>
                        <li>0</li>
                    </ul>
                    <div class="last__week__time-content-diagram">
                        <ul class="last__week__time-content-diagram-list">
                            <li>
                                <div class="scale">
                                    <span style="height: 40%"></span>
                                </div>
                                <span>
                                    MO
                                </span>
                            </li>
                             <li>
                                <div class="scale">
                                    <span style="height: 60%"> </span>
                                </div>
                                <span>
                                    TU
                                </span>
                            </li>
                             <li>
                                <div class="scale">
                                    <span style="height: 90%"></span>
                                </div>
                                <span>
                                    WE
                                </span>
                            </li>
                             <li>
                                <div class="scale">
                                    <span style="height: 52%"></span>
                                </div>
                                <span>
                                    TH
                                </span>
                            </li>
                             <li>
                                <div class="scale">
                                    <span style="height: 12%"></span>
                                </div>
                                <span>
                                    FR
                                </span>
                            </li>
                             <li>
                                <div class="scale">
                                    <span style="height: 90%"></span>
                                </div>
                                <span>
                                    SA
                                </span>
                            </li>
                             <li>
                                <div class="scale">
                                    <span style="height: 70%"></span>
                                </div>
                                <span>
                                    SU
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="stats__block__last-year-time">
                <div class="last__year__time-title title">
                    <span>Last Year Time</span>
                    <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#C3CAD9"/>
                    </svg>
                </div>
                <div class="last__year__time-content">
                    <ul class="last__year__time-content-list">
                        <li>80</li>
                        <li>60</li>
                        <li>40</li>
                        <li>20</li>
                        <li>0</li>
                    </ul>
                    <div class="last__year__time-content-diagram">
                        <ul class="last__year__time-content-diagram-list">
                            <li>
                                <div class="scale">
                                    <span style="height: 45%"></span>
                                </div>
                                <span>
                                    Ja
                                </span>
                            </li>
                            <li>
                                <div class="scale">
                                    <span style="height: 63%"></span>
                                </div>
                                <span>
                                    Fe
                                </span>
                            </li>
                            <li>
                                <div class="scale">
                                    <span style="height: 90%"></span>
                                </div>
                                <span>
                                    Ma
                                </span>
                            </li>
                            <li>
                                <div class="scale">
                                    <span style="height: 55%"></span>
                                </div>
                                <span>
                                    Ap
                                </span>
                            </li>
                            <li>
                                <div class="scale">
                                    <span style="height: 28%"></span>
                                </div>
                                <span>
                                    Ma
                                </span>
                            </li>
                            <li>
                                <div class="scale">
                                    <span style="height: 87%"></span>
                                </div>
                                <span>
                                    Ju
                                </span>
                            </li>
                            <li>
                                <div class="scale">
                                    <span style="height:40%"></span>
                                </div>
                                <span>
                                    Ju
                                </span>
                            </li>
                            <li>
                                <div class="scale">
                                    <span style="height: 79%"></span>
                                </div>
                                <span>
                                    Au
                                </span>
                            </li>
                            <li>
                                <div class="scale">
                                    <span style="height: 76%"></span>
                                </div>
                                <span>
                                    Se
                                </span>
                            </li>
                            <li>
                                <div class="scale">
                                    <span style="height: 37%"></span>
                                </div>
                                <span>
                                    Oc
                                </span>
                            </li>
                            <li>
                                <div class="scale">
                                    <span style="height: 65%"></span>
                                </div>
                                <span>
                                    No
                                </span>
                            </li>
                            <li>
                                <div class="scale">
                                    <span style="height: 86%"></span>
                                </div>
                                <span>
                                    De
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="stats__block__time-spent-tv-shows">
                <div @click.ctrl="animation" class="time__spent__all-title title">
                    <span>Time Spent on TV Shows and Movies</span>
                    <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#C3CAD9"/>
                    </svg>
                </div>
                <div class="time__spent__all-content">
                    <ul class="time__spent__all-content-list">
                        <li v-for="film in timeSpentAll" :key="film.title">
                            <div  class="img">{{film.title}}</div>
                            <div class="film__title">
                                <span>{{film.title}}</span>
                                <span class="film__title-time">{{film.time}}</span>
                            </div>
                            <div class="progress-line">
                                <span :style="{width: film.progress + '%'}"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="stats__block__total">
                <div class="episodes-watched">
                    <h4>Episodes Watched</h4>
                    <span>240</span>
                    <p>Episodes</p>
                </div>
                <div class="films-watched">
                    <h4>Films Watched</h4>
                    <span>240</span>
                    <p>Films</p>
                </div>
                <div class="watched-shows">
                    <h4>Watched Shows</h4>
                    <span>240</span>
                    <p>Shows</p>
                </div>
                <div class="shows-abandoned">
                    <h4>Shows Abandoned</h4>
                    <span>240</span>
                    <p>Shows</p>
                </div>
            </div>
        </div>
        <div class="SortSystem1">
            <div class="sinonium">Si<span class="yapona">nonium</span><span class="mat">'s</span></div>
            <div class="sort">So<span class="qwe">rt</span></div>
            <div class="system">System</div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            latestTvShows: [
                {
                    title: 'Americas Got Talent',
                    seasons: '21',
                    episodes: '27'
                },{
                    title: 'Game of Trones',
                    seasons: '08',
                    episodes: '05'
                },{
                    title: 'Growing Up Chrisley',
                    seasons: '03',
                    episodes: '02'
                },{
                    title: 'Tales',
                    seasons: '04',
                    episodes: '03'
                },{
                    title: 'Pandora',
                    seasons: '03',
                    episodes: '05'
                },{
                    title: 'Adam Ruins Everything',
                    seasons: '07',
                    episodes: '11'
                },{
                    title: 'Hard Knocks',
                    seasons: '02',
                    episodes: '01'
                }
            ],
            timeSpentAll: [
                {
                    img: '1',
                    title: 'Game of Trones',
                    time: '24:12:12',
                    progress: null
                },{
                    img: '2',
                    title: 'Peaky Blinders',
                    time: '18:12:30',
                    progress: null
                },{
                    img: '3',
                    title: 'Shameless',
                    time: '15:30:12',
                    progress: null
                },{
                    img: '4',
                    title: 'Downton Abbey',
                    time: '09:12:12',
                    progress: null
                },{
                    img: '5',
                    title: 'Deadwood',
                    time: '07:45:34',
                    progress: null
                },{
                    img: '6',
                    title: 'Fargo',
                    time: '06:55:30',
                    progress: null
                },{
                    img: '7',
                    title: 'Orange Is the New Black',
                    time: '05:34:00',
                    progress: null
                },{
                    img: '8',
                    title: "It's Always Sunny in Philadelphia",
                    time: '04:23:00',
                    progress: null
                },
                // {
                //     img: '9',
                //     title: "Tratata",
                //     time: '03:23:00',
                //     progress: null
                // },{
                //     img: '10',
                //     title: "Trata",
                //     time: '33:23:00',
                //     progress: null
                // }
            ],
            progress: [],
            hours: {},
            data: '200.2,0'

        }
    },
    methods: {
        cirle(){
            $(document).ready(function(){
  $('.dial').each(function () { 

            var elm = $(this);
            var color = elm.attr("data-fgColor");  
            var perc = elm.attr("value");  

            elm.knob({ 
                 'value': 0, 
                  'min':0,
                  'max':100,
                  "skin":"tron",
                  "readOnly":true,
                  "thickness":.1,                 'dynamicDraw': true,                "displayInput":false
            });

            $({value: 0}).animate({ value: perc }, {
                duration: 2000,
                easing: 'swing',
                progress: function () {                  elm.val(Math.ceil(this.value)).trigger('change')
                }
            });

            //circular progress bar color
            $(this).append(function() {
                elm.parent().parent().find('.circular-bar-content').css('color',color);
                elm.parent().parent().find('.circular-bar-content label').text(perc+'%');
            });

            });
   
  function progressBar(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 1500).html(percent + "%&nbsp;");
  }
  
  progressBar(75, $('#progressBar'));
  
  progressBar(25, $('#progressBar2'));
  
 });
        },
    },
    mounted() {
        this.hours = this.timeSpentAll.map((item)=> {
            return (+item.time.split(':')[0]*3600) + (+item.time.split(':')[1] * 60) + (+item.time.split(':')[2])
        }).reduce((a,b) => (a+b))
        this.hours = {h: Math.floor(this.hours / 3600), m: Math.floor(this.hours % 3600 /60), s: this.hours % 3600 % 60}
        console.log(this.hours);
        this.timeSpentAll.sort((a,b) => ((+b.time.split(':')[0]*3600) + (+b.time.split(':')[1]) * 60 + (+b.time.split(':')[2])) > ((+a.time.split(':')[0]*3600) + (+a.time.split(':')[1]) * 60+(+a.time.split(':')[2])) ? 1 : -1)
        this.timeSpentAll.splice(8)
        this.timeSpentAll.forEach(item=> {
        let hms = item.time;
        let lala = hms.split(':');
        let seconds = (+lala[0]) * 60 * 60 + (+lala[1]) * 60 + (+lala[2]); 
           this.progress.push(seconds)
        })
        this.progress = this.progress.map((item, id, arr)=> {
               return (arr[id] - arr[0]) / arr[0] * 100
        })
        this.timeSpentAll = this.timeSpentAll.map((item, id, arr)=> {
           return {...item, progress: 100 + this.progress[id]}
            })
        console.log(this.timeSpentAll);
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.title{
    @include font(vw(13), 800, vw(25), $greyBlue50);
    display: flex;
    margin: vw(30);
    svg{
        width: vw(16);
        height: vw(4);
        margin: vw(11) 0 0 auto;
        cursor: pointer;
    }
}
.stats{
    max-width: vw(1140);
    &__block{
        display: grid;
        grid-template-areas:
        "A A A A B B B B C C C C"
        "A A A A B B B B C C C C"
        "A A A A B B B B D D D D"
        "A A A A B B B B D D D D"
        "E E E E E E G G G G G G"
        "E E E E E E G G G G G G"
        "E E E E E E G G G G G G"
        "E E E E E E G G G G G G"
        "F F F F F F G G G G G G"
        "F F F F F F G G G G G G"
        "F F F F F F G G G G G G"
        "F F F F F F G G G G G G"
        "H H H H H H H H H H H H"
        "H H H H H H H H H H H H"
        "H H H H H H H H H H H H";
        &__latest-tv-shows{
            grid-area: A;
            width: vw(350);
            height: vw(350);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
            margin-bottom: vw(30);
            .latest__list{
                li{
                    @include font(vw(12), 800, vw(20), $greyBlue70);
                    margin: vw(15) vw(30) vw(15);
                    max-width: vw(350);
                    display: flex;
                    span:last-child{
                        margin-left: auto;
                    }
                }
            }
        }
        &__time-spent-service{
            grid-area: B;
            width: vw(350);
            height: vw(350);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
            .time__spent__service-diagram{
                text-align: center;
                position: relative;
                display: flex;
                justify-content: center;
                svg{
                    width: vw(224);
                    height: vw(224);
                }
                span{
                    position: absolute;
                    height: vw(30);
                    left: 40.45%;
                    right: 40%;
                    top: calc(50% - 30px/2);
                    @include font(vw(16), 800,vw(30),$greyBlue50);
                }
            }
        }
        &__time-spent-watching-shows{
            grid-area: C;
            width: vw(350);
            height: vw(160);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
            .time__spent__shows-content{
                margin: vw(30);
                margin-top: vw(-5);
                display: flex;
                align-items: center;
                svg{
                    margin-right: vw(30);
                    width: vw(54);
                    height: vw(54);
                }
                span{
                    @include font(vw(18), 600, vw(30), $greyBlue70);
                    margin-right: vw(7);
                }
                & .time{
                    color: $greyBlue50;
                }
            }
        }
        &__time-spent-watching-movies{
            grid-area: D;
            width: vw(350);
            height: vw(160);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
            .time__spent__movies-content{
                margin: vw(30);
                margin-top: vw(-5);
                display: flex;
                align-items: center;
                svg{
                    width: vw(54);
                    height: vw(54)
                }
                span{
                    @include font(vw(18), 600, vw(30), $greyBlue70);
                    margin-right: vw(7);
                }
                & .time{
                    color: $greyBlue50;
                }
            }
        }
        &__last-week-time{
            grid-area: E;
            width: vw(540);
            height: vw(350);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
            margin-bottom: vw(30);
            .last__week__time-title{
                margin-bottom: vw(40);
            }
            .last__week__time-content-list{
                li::before{
                    content: '';
                    width: vw(480);
                    height: vw(2);
                    background-color: $blue;
                    position: absolute;
                    bottom: vw(10);
                    left: 0;
                    opacity: 0.1;
                }
                li::after{
                    content: '';
                    width: vw(20);
                    height: vw(2);
                    background-color: $blue;
                    position: absolute;
                    bottom: vw(10);
                    right: vw(-33);
                    opacity: 0.1;
                }
                li{
                    position: relative;
                    @include font(vw(12), 800, vw(20), $greyBlue80);
                    text-align: right;
                    margin-right: vw(33);
                    margin-bottom: vw(22);
                }
            }
            .last__week__time-content-diagram{
                &-list{
                    display: flex;
                    margin: vw(-182) vw(111) vw(30) vw(50);
                    li{
                        margin-right: vw(42);
                        .scale{
                                height: vw(180);
                                width: vw(10);
                                position: relative;
                                bottom: vw(30);
                                span{
                                    position: absolute;
                                    width: 100%;
                                    left: vw(3);
                                    height: 100%;
                                    bottom: 0;
                                    background-color: $blue;
                                    border-radius: 120px 120px 0px 0px;
                                }
                        }
                        span{
                            @include font(vw(12), 800, vw(20), $greyBlue80);
                        }
                    };
                }
            }
        }
        &__last-year-time{
            grid-area: F;
            width: vw(540);
            height: vw(350);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
            .last__year__time-title{
                margin-bottom: vw(40);
            }
            .last__year__time-content-list{
                li::before{
                    content: '';
                    width: vw(480);
                    height: vw(2);
                    background-color: $orange;
                    position: absolute;
                    bottom: vw(10);
                    left: 0;
                    opacity: 0.1;
                }
                li::after{
                    content: '';
                    width: vw(20);
                    height: vw(2);
                    background-color: $orange;
                    position: absolute;
                    bottom: vw(10);
                    right: vw(-33);
                    opacity: 0.1;
                }
                li{
                    position: relative;
                    @include font(vw(12), 800, vw(20), $greyBlue80);
                    text-align: right;
                    margin-right: vw(33);
                    margin-bottom: vw(22);
                }
            }
            .last__year__time-content-diagram{
                &-list{
                    display: flex;
                    margin: vw(-182) vw(0) vw(30) vw(30);
                    li{
                        margin-right: vw(20);
                        .scale{
                                height: vw(180);
                                width: vw(10);
                                position: relative;
                                bottom: vw(30);
                                span{
                                    position: absolute;
                                    width: 100%;
                                    left: vw(3);
                                    height: 100%;
                                    bottom: 0;
                                    background-color: $orange;
                                    border-radius: 120px 120px 0px 0px;
                                }
                        }
                        span{
                            @include font(vw(12), 800, vw(20), $greyBlue80);
                        }
                    };
                }
            }
        }
        &__time-spent-tv-shows{
            grid-area: G;
            width: vw(540);
            height: vw(730);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
            .time__spent__all-content-list{
                margin: vw(30);
                li{
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: vw(20);
                    .img{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: vw(80);
                        height: vw(60);
                        background-color: $purple;
                        border-radius: vw(10);
                    }
                    .film__title{
                        display: flex;
                        width: vw(375);
                        height: vw(20);
                        margin: vw(10) 0 0 vw(25);
                        span{
                            @include font(vw(12), 800, vw(20), $greyBlue50);
                        }
                        .film__title-time{
                            margin-left: auto;
                            @include font(vw(12), 800, vw(20), $greyBlue70);
                        }
                    }
                    .progress-line{
                        margin: vw(-20) 0 0 vw(105);
                        height: vw(5);
                        width: vw(365);
                        position: relative;
                        background: $greyBlue95;
                        border-radius: 10px;
                        span{
                            position: absolute;
                            height: 100%;
                            top: 0%;
                            background-color: $green;
                            display: inline-block;
                            border-radius: 10px;  
                        }
                    }
                }
            }
        }
        &__total{
            grid-area: H;
            display: flex;
            margin: vw(30) 0 vw(80);
            text-align: center;
            div{
                h4{
                    margin-top: vw(40);
                    @include font(vw(12), 800, vw(20), $greyBlue70);
                }
                span{
                    display: inline-block;
                    margin: vw(20) 0;
                    @include font(vw(36), 600, vw(60), $greyBlue50);
                }
                p{
                    margin-bottom: vw(40);
                    @include font(vw(12), 800, vw(20), $greyBlue70);
                }
            }
            & .episodes-watched{
                background-color: $white;
                width: vw(255);
                height: vw(255);
                margin-right: vw(30);
                box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
                border-radius: 10px;
            }
            & .films-watched{
                background-color: $white;
                width: vw(255);
                height: vw(255);
                margin-right: vw(30);
                box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
                border-radius: 10px;
            }
            & .watched-shows{
                background-color: $white;
                width: vw(255);
                height: vw(255);
                margin-right: vw(30);
                box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
                border-radius: 10px;
            }
            & .shows-abandoned{
                background-color: $white;
                width: vw(255);
                height: vw(255);
                box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
                border-radius: 10px;
            }
        }
    }
}
@keyframes SortSystemAppearance {
    0% {opacity: 0}
    12% {opacity: 1;}
    92%{opacity: 1;}
    100% {opacity: 0}
}
@keyframes sinoniumAppear1 {
    0% {opacity: 0;font-size: vw(0)} //1% 8vw
    1.875%{opacity: 0.2;font-size: vw(15)}
    3.75%{font-size: vw(30)}
    5.65%{font-size: vw(45); opacity: 0.3}
    11.25%{font-size: vw(90); opacity: 0.5;}
    18%{font-size: vw(50); opacity: 0.1}
    30%{font-size: 0; opacity: 0;}
    40% {opacity: 0;font-size: vw(0)}
    51.875% {opacity: 0.2; font-size: vw(15);}
    53.75%{font-size: vw(30)}
    55.65%{font-size: vw(45); opacity: 0.3}
    61.25%{font-size: vw(90); opacity: 0.5;}
    67.25%{font-size: vw(27);opacity: 0.3;}
    71%{font-size: vw(90);opacity: 0.7;}
    100%{font-size: vw(40); opacity: 0.01}
}
@keyframes finalAppear {
    0%{font-size: vw(0); opacity: 0;}
    10%{font-size: vw(9); opacity: 0.1;}
    50%{left: 5%;}
    100%{font-size: vw(90); opacity: 1;}
}
.SortSystem1{
    display: none;
}
.SortSystem{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: black;
    animation: SortSystemAppearance 32s ease;
    div{
        @include font(vw(70), 700, vw(30), wheat);
        position: absolute;
        top: 50%;
        left: 45%;
        opacity: 1;
    }
    .sinonium{
        animation: sinoniumAppear1 6.5s linear 4.5s, 5.5s finalAppear 10.5s linear;
        left: 50%;
        z-index: 2;
    }

    .sort{
        left: 73%;  //73%, 44.5
        z-index: 1;
        }
    .system{
        left: 82%;
    }
}


</style>