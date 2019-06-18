<template>
    <transition name="fade">
        <cube-popup
        v-show="visible"
        :mask-closable=true
        :z-index=90
        position="bottom"
        type="shop-cart-list"
        @mask-click="maskClick"
        >
            <transition
              name="move"
            >
              <div v-show="visible">
                <div class="list-header">
                    <h1 class="title">购物车</h1>
                    <span class="empty">清空</span>
                </div>
                <cube-scroll class="list-content" ref="listContent">
                    <ul>
                        <li
                          class="food"
                          v-for="food in selectFoods"
                          :key="food.name"
                        >
                          <span class="name">{{food.name}}</span>
                          <duv class="price">
                              <span>￥{{food.price*food.count}}</span>
                          </duv>
                          <div class="cart-control-wrapper">
                              <cart-control :food="food"></cart-control>
                          </div>
                        </li>
                    </ul>
                </cube-scroll>
              </div>        
            </transition>
        </cube-popup>
    </transition>
</template>

<script>
import CartControl from 'components/cart-control/cart-control'

export default {
   name:'shop-cart-list',
   props:{
       selectFoods:{
           type:Array,
           default(){
               return []
           }
       }
   },
   data(){
       return {
           visible:false
       }
   },
   methods:{
       show(){
           this.visible=true
       }
   } 
}
</script>
