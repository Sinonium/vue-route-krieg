<template>
    <section class="stats">
        <div class="stats__block">
            <div class="stats__block__latest-tv-shows">

            </div>
            <div class="stats__block__time-spent-service">

            </div>
            <div class="stats__block__time-spent-watching-shows">

            </div>
            <div class="stats__block__time-spent-watching-movies">
                 
            </div>
            <div class="stats__block__last-week-time">

            </div>
            <div class="stats__block__last-year-time">

            </div>
            <div class="stats__block__time-spent-tv-shows">

            </div>
            <div class="stats__block__total">
                <div class="episodes-watched">

                </div>
                <div class="films-watched">

                </div>
                <div class="watched-shows">

                </div>
                <div class="shows-abandoned">

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

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
        }
        &__time-spent-service{
            grid-area: B;
            width: vw(350);
            height: vw(350);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
        }
        &__time-spent-watching-shows{
            grid-area: C;
            width: vw(350);
            height: vw(160);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
            // margin-bottom: vw(28);
        }
        &__time-spent-watching-movies{
            grid-area: D;
            width: vw(350);
            height: vw(160);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
        }
        &__last-week-time{
            grid-area: E;
            width: vw(540);
            height: vw(350);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
            margin-bottom: vw(30);
        }
        &__last-year-time{
            grid-area: F;
            width: vw(540);
            height: vw(350);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
        }
        &__time-spent-tv-shows{
            grid-area: G;
            width: vw(540);
            height: vw(730);
            background: $white;
            box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
            border-radius: 10px;
        }
        &__total{
            grid-area: H;
            display: flex;
            margin: vw(30) 0 vw(80);
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

</style>
