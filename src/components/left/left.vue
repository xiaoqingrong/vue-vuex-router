<template>
    <div :class="this.$store.state.isleftCon?'leftConShow':'leftConHide'">
        <!-- <Land></Land> -->
        <router-view/>
        <div class="pulled" @click="pullLeft">
            <span :class="this.$store.state.isPull?'iconfont icon-mjiantou-copy':'iconfont icon-jikediancanicon13'"></span>
        </div>
    </div>
</template>
<script>
// import Land from './landInfo/land'
export default {
    name:"left",
    data(){
        return{
            farm:true
        }
    },
    components:{
        // Land
    },
    methods:{
        pullLeft(){
            this.$store.dispatch("isPull")
            this.$store.dispatch("isleftCon")
        }
    }
}
</script>
<style scoped lang="less">
@defaultBg:#798d95;
@defaultColor:#ffffff;
@Wfull:100%;
@Hfull:100%;
.leftConShow{
    position: absolute;
    left: 0;
    height: @Hfull; 
    width: 15rem;
    z-index: 666;
    transition: 0.2s;
    background-color: @defaultBg;
    padding: 0 10px;
}
.leftConHide{
    position: absolute;
    left: -16.5rem;
    height: @Hfull; 
    width: 15rem;
    z-index: 666;
    transition: 0.2s;
    background-color:@defaultBg;
    padding: 0 10px;
}
.pulled{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 40vh;
    height: 70px;
    width: 35px;
    right: -50px;
    background-color: @defaultBg;
}
.pulled span{
    color: @defaultColor
}
</style>