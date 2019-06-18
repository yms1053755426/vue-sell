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
