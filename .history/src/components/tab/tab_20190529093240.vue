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
            }]
        }
    }
}
</script>

