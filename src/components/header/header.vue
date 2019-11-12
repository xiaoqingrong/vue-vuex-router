<template>
    <div class="headCon">
        <el-row class="container">
            <el-col :span="5">前端大公司</el-col>
            <el-col :span="14">
                <div>
                    <ul class="hdList">
                       <li v-for="(item,i) in hdList" @click="change(i)">
                           <router-link :to="item.path" key={{index}} :class="i==active ? 'activeColor' : 'defaultColor'">{{item.val}}</router-link>
                           <i :class="i==active ? 'liShow' : 'liHide'"></i>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="hdLogo" @mouseover="userItemShow" @mouseout="userItemHide">
                    <div>
                        <div class="usr" v-if="login">
                            <img src="http://sino-resource.oss-cn-beijing.aliyuncs.com/e4853137d5454ad5ac055287f7bf0cb9" alt="">
                        </div>
                        <span>退出</span>
                    </div>
                    <div class="userItem" v-show="userItem">
                        <ul>
                            <li><span class="lt">用户名</span><span class="rt">{{username}}</span></li>
                            <li>服务记录</li>
                            <li>退出</li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex';

export default {
    name:"Header",
    data(){
        return{
            msg:'jecson',
            login:true,
            username:'ooo',
            userItem:false,
            hdList:[
                {path:'/land',val:'js'},
                {path:'/senor',val:'jq'},
                {path:'/goodsInfo',val:'vue+vuex+router'},
                {path:'/orderInfo',val:'react+redux+axios'},
                {path:'/insuranceSup',val:'angular'},
                {path:'/ChattelFinance',val:'node'},
                {path:'/FuturesTrading',val:'uniapp+miniprograme'}
            ],
            active:0,
            isChange:true
        }
    },
    methods:{
        addFun(){
            this.$store.dispatch("addFun");
        },
        reductionFun(){
            var n = 10;
            this.$store.dispatch("reductionFun",n);
        },
        userItemHide(){
            console.log(this.userItem)
            this.userItem = false
        },
        userItemShow(){
            console.log(this.userItem)
            this.userItem = true
        },
        change(i){
            this.active = i;    //本地保存
        }
    }
}
</script>
<style scoped lang="less">
@defaultBg:#798d95;
@defaultColor: #ffffff;
@activeColor:#a4b9a2;
*{
    color: #ffffff;
}
.lt{
    float: left;
}
.rt{
    float: right;
}
.active{
    color: red;
}
.headCon{
    height: 80px;
    background-color: @defaultBg;
    min-width: 1300px;
}
.container{
    height: 100%;
    &>div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &>div{
            height: 100%;
        }
    }
    &>div:nth-child(1){
        color: #a4b9a2;
    }
}
.hdList{
    list-style: none;
    display: flex;
    height: 100%;
    justify-content: center;

    &>li{
        position: relative;
        float: left;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0.7rem;
        font-size: .9rem;
        font-weight: 700;
        text-align: center;

        &>a{
            text-decoration: none;
        }
        &:hover{
            color: #a4b9a2;
        }
    }
}
.liShow{
    position: absolute;
    display: inline-block;
    width: 60%;
    height: 3px;
    left: 20%;
    background-color: @activeColor;
    content: "";
    bottom: 1rem;
    border-radius: .1rem;
    z-index: 10;
    color: @activeColor;
}
.liHide{
    position: absolute;
    display: none;
    width: 60%;
    height: 3px;
    left: 20%;
    background-color: @activeColor;
    content: "";
    bottom: 1rem;
    border-radius: .1rem;
    z-index: 10;
    color: @activeColor;
}
.activeColor{
    color: @activeColor;
}
.defaultColor{
    color: @defaultColor
}
/* 头像 */
.hdLogo {
    width: 60%;
    position: relative;
    margin-left: 40%;
    img{
        height: 40px;
        width: 40px;
    }
    &>div:nth-child(1){
        height: 100%;
        float: right;
        width: 100%;
        overflow: hidden;
    }
    &>div{
        &>span{
            display: inline-block;
            float: right;
            height: 100%;
            display: flex;
            font-size: 14px;
            flex-direction: column;
            justify-content: center;
            margin-right: 4%;
            line-height: 100%;
        }
    }
    .usr{
        float: right;
        height: 100%;
        display: flex;
        font-size: 14px;
        flex-direction: column;
        justify-content: center;
        margin-right: 4%;
        line-height: 100%;
    }
}
.userItem{
    position: absolute;
    right: 14px;
    top: 80px;
    width: 200px;
    background-color: #000000;
    z-index: 777;
    padding: 10px 0;

    li{
        width: 200px;
        overflow: hidden;
        padding: 14px 10px;
        text-align: left;
        font-size: 12px;
    }
    li:nth-child(2):hover{
        background-color: @defaultBg;
    }
    li:nth-child(3):hover{
        background-color: @defaultBg;
    }
}
</style>