<template>
    <div class="goosd">
        <div class="scroll-nav-wrapper">
            <cube-scroll-nav
              :side=true
              :data="goods"
              :options="scrollOptions"
              v-if="goods.length"
            >
              <cube-scroll-nav-panel
                v-for="good in goods"
                :key="good.name"
                :label="good.name"
                :title="good.name"
              >
                <ul>
                    <li
                      v-for="food in good.foods"
                      :key="food.name"
                      class="food-item"
                    >
                      <div class="icon">
                          <img width="57" height="57" :src="food.icon" alt="">
                      </div>
                      <div class="content">
                          <h2 class="name">{{food.name}}</h2>
                      </div>
                    </li>
                </ul>
              </cube-scroll-nav-panel>
            </cube-scroll-nav>
        </div>
    </div>
</template>

<script>
export default {
    name:'goods'
}
</script>
<style>

</style>

