<template>
    <div class="star" :class="starType">
       <span v-for="(itemClass,index) in itemClasses" :class="itemClass" :key="index" class="star-item"></span>
    </div>
</template>
