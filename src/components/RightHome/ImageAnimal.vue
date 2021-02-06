<template>
    <div class="continer">
        <div class="row">
            <!-- <img v-for="image in images" :src="images.url" :key="image.id" :alt="images.alt" /> -->
            <img class="col-sm-4" v-for="item in images" :key="item.id" :src="item.url" :alt="item.alt">
        </div>
        <!-- <img src="../image/1.jpg" alt=""> -->
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
       name:'ImageAnimal' ,
       computed:mapState(['images'])
    }
</script>

<style lang="scss" scoped>

</style>