<template>
    <div class="farm">
        <ul>
            <li v-for="(item,index) in plantList" @click="leftList(index)">
                <router-link :class="index==active ? 'activeColor' : 'defaultColor'" :to="item.path" key={{index}}>{{item.val}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"farm",
    data(){
        return{
            // activeName: '1'
            plantList:[
                {id:0,path:"",val:"1"},
                {id:1,path:"",val:"2"},
                {id:2,path:"",val:"3"},
                {id:3,path:"",val:"4"},
                {id:5,path:"",val:"5"}
            ],
            active:0
        }
    },
    methods:{
        
    }
}
</script>
<style scoped lang="less">
@activeColor:#a4b9a2;
@defaultColor:#ffffff;
@Wfull:100%;
@Hfull:100%;
.farm {
    li{
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: left;
        padding-left: 20px;

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