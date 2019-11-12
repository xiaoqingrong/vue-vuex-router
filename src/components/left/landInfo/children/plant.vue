<template>
    <!-- <div class="plant">
        <ul>
            <li v-for="(item,index) in plantList" @click="leftList(index)">
                <router-link :class="index==active ? 'activeColor' : 'defaultColor'" :to="item.path" key={{index}}>{{item.val}}</router-link>
            </li>
        </ul>
    </div> -->
    <el-collapse accordion @change="handleChange">
        <el-collapse-item title="农事活动记录"  class="listBox" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        </el-collapse-item>
        <el-collapse-item title="收获记录" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        </el-collapse-item>
        <el-collapse-item title="加工记录" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        </el-collapse-item>
        <el-collapse-item title="仓储记录" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        </el-collapse-item>
        <el-collapse-item title="出入库记录" name="5">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        </el-collapse-item>
        <el-collapse-item title="疫苗记录" name="6">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        </el-collapse-item>
    </el-collapse>
</template>
<script>
export default {
    name:"plant",
    data(){
        return{
            // activeName: '1'
            plantList:[
                {id:0,path:"",val:"农事活动记录"},
                {id:1,path:"",val:"收获记录"},
                {id:2,path:"",val:"加工记录"},
                {id:3,path:"",val:"存储记录"},
                {id:4,path:"",val:"出入库记录"},
                {id:5,path:"",val:"运输记录"},
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
@Wfull:100%;
@Hfull:100%;
.plant{
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