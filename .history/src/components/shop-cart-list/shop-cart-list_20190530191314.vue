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
                        </li>
                    </ul>
                </cube-scroll>
              </div>        
            </transition>
        </cube-popup>
    </transition>
</template>           