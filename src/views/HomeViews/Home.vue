<template>
  <div class="continer">
          <nav-hom />
          <hr>
      <div class="row">
        <div class="col-sm-8">
              <router-view v-slot="{ Component, route }">
                <transition :name="route.meta.transition">
                    <component :is="Component" />
                </transition>
          </router-view>
          </div>

        <div class="col-sm-4"><right-side /></div>
      </div>
  </div>
</template>

<script>
import NavHom from '../../components/NavHom.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import RightSide from '../../components/RightHome/RightSide.vue'

export default {
  name: 'Home',
  components: {
    RightSide,
    NavHom
  }
}
</script>
<style lang="scss" scoped>

hr{
  background-color: red;
}

</style>
