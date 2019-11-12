<template>
    <div class="body">
        <Left :class="this.$store.state.isleftCon?leftConShow:leftConHide"></Left>
        <Right></Right>
        <CenterMap></CenterMap>
    </div>
</template>
<script>
import Right from '../right/right';
import Left from '../left/left';
import CenterMap from '../center/centerMap'
import Header from '../header/header'
export default {
    name:"Body",
    data(){
        return{
            leftConShow:"leftConShow",
            leftConHide:"leftConHide"
        }
    },
    components:{
        Right,
        CenterMap,
        Header,
        Left
    }
}
</script>
<style scoped>
.main{
    position: relative;
  height: 92vh;
  overflow: hidden!important;
}
.leftConShow{
    position: absolute;
    left: 0;
    height: 100%; 
    width: 17.5rem;
    z-index: 666;
    background-color: #798d95;
    padding: 0 10px;
}
.leftConHide{
    position: absolute;
    left: -19rem;
    height: 100%; 
    width: 17.5rem;
    z-index: 666;
    background-color: #798d95;
    padding: 0 10px;
}
</style>