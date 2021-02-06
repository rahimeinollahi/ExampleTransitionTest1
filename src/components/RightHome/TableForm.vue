<template>
   <div class="continer">
  <!-- <div class="row"> -->
      <h4 class="text-center">get data from jsonplaceholder</h4>
        <div class="table-responsive-sm">          
            <table class="table table-bordered table-striped table-hover">
                <!-- <thead class="thead-dark">
                    <tr v-for="item in tableHeader" :key="item.id">
                        <th >{{item.header}}</th>
                    </tr>
                </thead> -->
                <thead class="thead-dark" >
                    <tr class="text-center">
                        <th class="">Name</th>
                        <th class=" ">Age</th>
                        <th class="">Email</th>
                    </tr>
                    </thead>
                <tbody>
                <tr v-for="item in tableItems" :key="item.id">
                    <td>{{item.id}}</td>
                    <td class="col-xs-1 center-block text-center">{{item.title}}</td>
                    <td>{{item.completed}}</td>
                </tr>
                </tbody>
         </table>
        </div>
     <!-- </div> -->
   </div>   
</template>

<script>
import {mapState,mapActions} from 'vuex'
    export default {
        name:'TableForm',
        computed:mapState(['tableItems','tableHeader']),
        methods:mapActions(['fetchData']),
        created(){
            this.fetchData();
        }
    }
</script>

<style lang="scss" scoped>
// div{
//     padding: 2px;
// }
*{
    box-sizing: border-box;
}
h4{
    text-shadow: 5px 5px 15px rgb(248, 8, 88),
    5px 5px 20px rgb(55, 0, 255);
    border-bottom: 1px solid rgb(37, 235, 11);
    // text-decoration: underline;
}
</style>