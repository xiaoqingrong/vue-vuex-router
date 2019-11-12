<template>
    <div class="centermap" >
        <div id="mapDiv" class="mapDiv" ref="mapDiv"></div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Button, Radio } from 'iview';
Vue.component('Button',Button);
Vue.component('Radio',Radio);

export default {
    name:'centermap',
    data(){
        return{
            map:"",
            control:"",
            points:"",
            marker:{}
        }
    },
    mounted() {
    setTimeout(this.getPosition(), 1000)
  },
  methods: {
    getPosition() {
        // let map,control,points;
        let zoom = 16;
        let lay;
        let onlyMapLay;
        let imageURL = "http://t0.tianditu.gov.cn/img_w/wmts?" +
            "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
            "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=c3e453ac7eaec16bf594987fe7f8e9e8";
        //创建自定义图层对象
        lay = new T.TileLayer(imageURL, {minZoom: 1, maxZoom: 18});
        let config = {layers: [lay]};
        //初始化地图对象
        this.map = new T.Map("mapDiv", config);
        //设置显示地图的中心点和级别
        this.map.centerAndZoom(new T.LngLat(this.$store.state.userLocation.log, this.$store.state.userLocation.lat), zoom);
        //允许鼠标滚轮缩放地图
        this.map.enableScrollWheelZoom();

        this.points = [];
        this.points.push(new T.LngLat(this.$store.state.userLocation.log-0.0002, this.$store.state.userLocation.lat-0.0007));
        this.points.push(new T.LngLat(this.$store.state.userLocation.log+0.0016, this.$store.state.userLocation.lat+0.0015));
        this.points.push(new T.LngLat(this.$store.state.userLocation.log+0.0006, this.$store.state.userLocation.lat+0.0019));
        this.points.push(new T.LngLat(this.$store.state.userLocation.log-0.0011, this.$store.state.userLocation.lat-0.0002));
        this.points.push(new T.LngLat(this.$store.state.userLocation.log-0.0002, this.$store.state.userLocation.lat-0.0007));
        //创建线对象
        var line = new T.Polyline(this.points,{color:"red"});
        //向地图上添加线
        this.control = new T.Control.Zoom();
        //创建标注对象
        var marker = new T.Marker(new T.LngLat(this.$store.state.userLocation.log, this.$store.state.userLocation.lat));
        //向地图上添加标注
        this.map.addOverLay(marker);
        this.map.addOverLay(line);
        this.map.addControl(this.control)
        marker.addEventListener("click", this.logg);
        this.rightBOTTOM = T_ANCHOR_BOTTOM_RIGHT
        this.control.setPosition(T_ANCHOR_BOTTOM_RIGHT);


        var html = [];
        html.push('<div id="div" style=" height:40px; width:130px;">');
        html.push('<table style=" width:100%;height:100%;">');
        html.push('<tbody>');
        html.push('<tr><td style=" font-size:14px; font-weight:bold;"><center>面积:</center></td><td style=" font-size:14px;">' + ' 亩</td></tr>');
        html.push('<tr><td colspan=2><a href="#" style=" margin-top:8px; font-size:12px; float:right;" onclick="ClearOverLay()">删除</a></td></tr>');
        html.push('</tbody>');
        html.push('</table>');
        html.push('</div>');

        // var ttml = document.createElement("div")
        // var infoWin = ttml.innerHTML(html.join(' '));
        // console.log(infoWin)
        // map.addOverLay(infoWin);







    },
    logg(){
        console.log("ooo")
    }
 
  }
}
</script>
<style scoped>
.centermap{
    height: 100vh;
    background-color: rgb(111, 238, 206);
}
.mapDiv{
    height: 100%;
    width: 100%;
    /* z-index: 999 */
}
.tdt-bottom{
    left: 600px!important;
    right: 500px; 
}
</style>