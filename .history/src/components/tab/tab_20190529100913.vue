<template>
    <div class="tab">
        <cube-tab-bar
          :showSlider=true
          v-model="selectedLabel"
          :data="tabs"
          ref="tabBar"
          class="border-bottom-1px"
        ></cube-tab-bar>
        <div class="slide-wrapper">
        <cube-slide
           :loop=false
           :auto-play=false
           :show-dots=false
           :initial-index="index"
           ref="slide"
           @change="onChange"
           @scroll="onScroll"
        >
            <cube-slide-item>
               <goods></goods>
            </cube-slide-item>
            <cube-slide-item>
               <ratings></ratings>
            </cube-slide-item>
            <cube-slide-item>
               <seller></seller>
            </cube-slide-item>
        </cube-slide>
      </div>
    </div>
</template>

<script>
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'

export default {
    name:'tab',
    data(){
        return{
            index:0,
            tabs:[{
                label:'商品'
            },{
                label:'评价',
            },{
                label:'商家',
            }],
            slideOptions:{
                listenScroll:true
            }
        }
    },
    computed:{
        selectedLabel:{
            get(){
                return this.tabs[this.index].label
            },
            set(newVal){
                this.index = this.tabs.findIndex((value)=>{
                    return value.label === newVal
                })
            }
        }
    },
    methods:{
        onChange(current){
            this.index = current
        },
        onScoll(pos){
            console.log(pos.x)
        }
    },
    components:{
        Goods,
        Ratings,
        Seller
    }
}
</script>

<style scoped lang="stylus">
    @import "~common/stylus/variable"

    .tab
        display :flex
        flex-direction:column
        height:100%
        >>> .cube-tab
            padding:10px 0
        .slide-wrapper
            flex:1
            overflow:hidden
</style>


