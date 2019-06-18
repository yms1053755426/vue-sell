<template>
    <cube-scroll class="seller" :options="sellerScrollOptions">
      <div class="seller-content">
          <div class="overview">
              <h1 class="title">{{seller.name}}</h1>
              <div class="desc border-bottom-1px">
                  <star :size="36" :score="seller.score"></star>
                  <span class="text">({{seller.ratingCount}})</span>
                  <span class="text">月售{{seller.sellCount}}单</span>
              </div>
              <ul class="remark">
                  <li class="block">
                      <h2>起送价</h2>
                      <div class="content">
                          <span class="stress">{{seller.minPrice}}</span>元
                      </div>
                  </li>
                  <li class="block">
                      <h2>商家配送</h2>
                      <div class="content">
                          <span class="stress">{{seller.deliveryPrice}}</span>元
                      </div>
                  </li>
                  <li class="block">
                      <h2>平均配送时间</h2>
                      <div class="content">
                          
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    </cube-scroll>
</template>

<script>
export default {
    name:'seller'
}
</script>
<style>

</style>


