<template>
    <div class="continer right-color2">
        <div class="row list-group-item list-group-item-active right-color1" v-for="item in rightItems" :key="item.id">
            <h2 @click="item.showLink=!item.showLink" class="col-sm-12 btn btn-secondary dropdown-toggle" >{{item.header}}</h2>
            <tsright-side>
                <div v-if="item.showLink">
                    <div v-if="item.part"  class="row">
                    <router-link class="col-sm-12  btn btn-light" v-for="sub in item.part" :key="sub.id" :to="{path:sub.router}">
                        {{sub.name}}
                    </router-link>  
                </div>
                </div>
            </tsright-side>
        </div>           
    </div>
</template>

<script>
import {mapState} from 'vuex'
import TsrightSide from '../TsRightSide.vue'
    export default {
        name:'RightSide',
        components:{
             TsrightSide
        },
       computed:mapState(['rightItems','rightHeader'])
    }
</script>

<style lang="scss" scoped>
.right-color1{
    background-color: #fffeee;
   
    // height: 100%;
}
.right-color2{
    background-color: #fffeee;
    // background-color: #d60d5a;
   
    height: 100%;
}
</style>