<template>
    <div class="continer fixed-top ">
        <div class="row ">
            <router-link
            class="col-sm list-group-item list-group-item-action bg-dark text-light text-center center-block"
            v-for="item in navItems" 
            :key="item.id"
            :to="{path:item.router}"
            >
                {{item.name}}
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'NavHome',
        computed:mapState(['navItems'])
    }
</script>

<style lang="scss" scoped>
.nav-pos{
    position: fixed;
}
.nav-w100{
    width: 100%;
}
</style>