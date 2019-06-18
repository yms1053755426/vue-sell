<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
        <tab></tab>
    </div> 
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import Goods from 'components/goods/goods'
import seller from 'components/seller/seller'
import Ratings from 'components/ratings/ratings'
import Tab from 'components/tab/tab'
import { getSeller } from 'api'

export default {
  name: 'app',
  data(){
    return{
      seller:{}
    }
  },
  computed:{
     tabs(){
       return[
         {
           label:'商品',
           components:Goods,
           data:{seller:this.seller}
          }
       ]
     }
  },
  created(){
    this._getSeller()
  },
  methods:{
    _getSeller(){
      getSeller().then((seller)=>{
       this.seller = seller
    })
    }
  },
  components: {
    VHeader,
    Tab
  }
}
</script>
<style lang="stylus">
    #app
        .tab-wrapper
          position :fixed
          top:136px
          left:0
          right:0
          bottom:0
</style>
