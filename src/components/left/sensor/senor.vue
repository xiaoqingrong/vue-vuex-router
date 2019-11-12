<template>
    <div class="sener">
        <ul>
            <li v-for="(item,index) in plantList" @click="leftList(index)">
                <router-link :class="index==active ? 'activeColor' : 'defaultColor'" :to="item.path" key={{index}}>{{item.val}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"sener",
    data(){
        return{
            // activeName: '1'
            plantList:[
                {id:0,path:"",val:"jquery"},
                {id:1,path:"",val:"jquery"},
                {id:2,path:"",val:"jquery"}
            ],
            active:0
        }
    },
    methods:{
        leftList(index){
            console.log(index)
            this.active = index;
        }
    }
}
</script>
<style scoped lang="less">
@activeColor:#a4b9a2;
@defaultColor:#ffffff;
@defaultBg:#798d95;
@Wfull:100%;
@Hfull:100%;
.sener{
    height: 100vh;
    background-color: @defaultBg;
    li{
        width: 100%;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: left;
        a{
            display: inline-block;
            width: @Wfull;
            height: @Hfull;
            color: @defaultColor;
            text-decoration: none;
        }
    }
    
}
.activeColor{
    color: @activeColor !important;
}
.defaultColor{
    color: @defaultColor !important;
}
</style>