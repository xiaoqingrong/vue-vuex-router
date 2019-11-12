<template>
    <div>
        <Farm v-if="farm"></Farm>
        <Plant v-else></Plant>
    </div>
</template>
<script>
import Farm from './children/farm';
import Plant from './children/plant'
export default {
    name:"land",
    data(){
        return{
            farm:true
        }
    },
    components:{
        Farm,
        Plant
    },
    methods:{
    }
}
</script>
<style scoped lang="less">
</style>