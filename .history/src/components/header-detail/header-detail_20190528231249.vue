<template>
    <transition name="fade">
        <div class="header-detail">
            <div class="detail-wrapper clear-fix">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="star-wrapper">
                        <star :size="48" :score="seller.score"></star>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <ul v-if="seller.supports" class="supports">
                       <li class="support-item" v-for="(item,index) in seller.supports" :key="item.id">
                          <support-ico :size=2 :type="seller.supports[index].type"></support-ico>
                          <span class="text">{{seller.supports[index].description}}</span>
                       </li>
                    </ul>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
