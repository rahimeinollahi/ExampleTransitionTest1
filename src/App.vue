<template>
  <div class="continer home-page">
        <div class="row home-page">
            <h2 class="header-center">Test project..</h2>
        </div>

        <hr>
        <!-- <router-link to="/">home page</router-link> -->

  </div>
  <router-view/>

  <!-- <div class="continer">
    <div class="row">
      
      <div class="col-sm-4">
        <left-side />
      </div>

      <div class="col-sm-8">
        <router-view  v-slot="{Component,route}">
            <transition :name="route.meta.transition">
              <component :is="Component" />
            </transition>
        </router-view>
      </div>
    </div>

  </div> -->

</template>

<style lang="scss">
@font-face {
  font-family: 'page-font';
  src: url('./assets/fonts/AlexandriaFLF-Italic.ttf');
}
*{
  font-family: 'page-font';
}
*{box-sizing: border-box;}

.home-page{
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 1px;
}
.header-center
{
  text-align: center;
  text-shadow: 5px 5px 15px red,
  4px 4px 20px blue;
  align-items: center;
  color: green;
}
</style>
