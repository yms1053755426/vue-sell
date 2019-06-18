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


