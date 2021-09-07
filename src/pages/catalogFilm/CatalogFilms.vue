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
          <div v-if="currentMonth === 'May'" class="Schedule__films">
            <div style="margin-top:50px" class="Schedukle__films-first-block">
              <SheduleWeekFirst
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'MondayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'TuesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'WednesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'ThursdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'FridayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SaturdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SundayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-second-block">
              <SheduleWeekSecond
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'MondaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'TuesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'WednesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'ThursdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'FridaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SaturdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SundaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-third-block">
              <SheduleWeekThird
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'WednesdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'ThursdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'FridayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SaturdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SundayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
          </div>
          <div v-if="currentMonth === 'June'" class="Schedule__films">
            <div style="margin-top:50px" class="Schedukle__films-first-block">
              <SheduleWeekFirst
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'MondayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'TuesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'WednesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'ThursdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'FridayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SaturdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SundayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-second-block">
              <SheduleWeekSecond
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'MondaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'TuesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'WednesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'ThursdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'FridaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SaturdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SundaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-third-block">
              <SheduleWeekThird
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'WednesdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'ThursdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'FridayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SaturdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SundayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
          </div>
          <div v-if="currentMonth === 'July'" class="Schedule__films">
            <div style="margin-top:50px" class="Schedukle__films-first-block">
              <SheduleWeekFirst
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'MondayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'TuesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'WednesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'ThursdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'FridayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SaturdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SundayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-second-block">
              <SheduleWeekSecond
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'MondaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'TuesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'WednesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'ThursdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'FridaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SaturdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SundaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-third-block">
              <SheduleWeekThird
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'WednesdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'ThursdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'FridayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SaturdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SundayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
          </div>
          <div v-if="currentMonth === 'September'" class="Schedule__films">
            <div style="margin-top:50px" class="Schedukle__films-first-block">
              <SheduleWeekFirst
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'MondayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'TuesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'WednesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'ThursdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'FridayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SaturdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SundayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-second-block">
              <SheduleWeekSecond
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'MondaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'TuesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'WednesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'ThursdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'FridaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SaturdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SundaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-third-block">
              <SheduleWeekThird
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'WednesdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'ThursdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'FridayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SaturdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SundayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
          </div>
          <div v-if="currentMonth === 'October'" class="Schedule__films">
            <div style="margin-top:50px" class="Schedukle__films-first-block">
              <SheduleWeekFirst
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'MondayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'TuesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'WednesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'ThursdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'FridayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SaturdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SundayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-second-block">
              <SheduleWeekSecond
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'MondaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'TuesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'WednesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'ThursdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'FridaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SaturdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SundaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-third-block">
              <SheduleWeekThird
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'WednesdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'ThursdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'FridayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SaturdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SundayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
          </div>
          <div v-if="currentMonth === 'November'" class="Schedule__films">
            <div style="margin-top:50px" class="Schedukle__films-first-block">
              <SheduleWeekFirst
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'MondayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'TuesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'WednesdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'ThursdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'FridayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SaturdayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="this.currentWeek === 'SundayFirst'"
                :catalogFilms="catalogFilms"
              />
              <CatalogFirst
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-second-block">
              <SheduleWeekSecond
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'MondaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'TuesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'WednesdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'ThursdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'FridaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SaturdaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="this.currentWeek === 'SundaySecond'"
                :catalogFilms="catalogFilms"
              />
              <CatalogSecond
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
            <div style="margin-top:50px"  class="Schedukle__films-third-block">
              <SheduleWeekThird
                @current="this.currentWeek = $event"
                :currentWeek="currentWeek"
                :catalogFilmsWeek="catalogFilmsWeek"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'MondayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'WednesdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'ThursdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'FridayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SaturdayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="this.currentWeek === 'SundayThird'"
                :catalogFilms="catalogFilms"
              />
              <CatalogThird
                v-if="!currentWeek.length"
                :AutoCatalogFilms="AutoCatalogFilms"
              />
              <span
                v-if="!catalogFilms.length"
                class="catalogFilms__loading"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "./components/CatalogFilmsHead.vue";
import AutoCatalog from "./components/AutoCatalog-films.vue";
import CatalogFirst from "./components/CatalogFirst.vue";
import CatalogSecond from "./components/CatalogSecond.vue";
import CatalogThird from "./components/CatalogThird.vue";
import SheduleWeekFirst from "./components/SheduleWeekFirst.vue";
import SheduleWeekSecond from "./components/SheduleWeekSecond.vue";
import SheduleWeekThird from "./components/SheduleWeekSThird.vue";

export default {
  components: { Header, AutoCatalog, CatalogFirst  , CatalogSecond , CatalogThird , SheduleWeekFirst , SheduleWeekSecond , SheduleWeekThird },
  data() {
    return {
      currentWeek: "",
      currentMonth: "May",
      ScheduleAddres: {},
      catalogFilmsWeek: [],
      catalogFilms: [],
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
      const AutoCatalogFilms = async () => {
        const response = await fetch("http://localhost:3000/AutoCatalogFilms");
        const AutoCatalogFilmss = await response.json();
        this.AutoCatalogFilms = AutoCatalogFilmss;
      };
      setTimeout(catalogFilms, 1500);
      setTimeout(AutoCatalogFilms, 1300);
      catalogFilmsWeek();
      ScheduleAddres();
    };
    getData();
  },
  methods: {
    toggleShow(id) {
      this.showCatalogFilm = !this.showCatalogFilm;
      const AvtoCatalogFilms = Array.from(
        document.querySelectorAll(".catalog__film")
      );
      AvtoCatalogFilms.map((film) => {
        if (this.showCatalogFilm) {
          AvtoCatalogFilms[id].classList.add("catalogFilms__active");
        } else {
          AvtoCatalogFilms[id].classList.remove("catalogFilms__active");
        }
      });
    },
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
  top: 115%;
  left: 50%;
  animation: anim-catalogFilmsLoading 0.4s ease-in-out infinite alternate;
}
@keyframes anim-catalogFilmsLoading {
  0% {
    top: 110%;
    background: $bg-greenRgbLight;
  }
  100% {
    background: $bg-blueRgbDark;
    top: 120%;
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