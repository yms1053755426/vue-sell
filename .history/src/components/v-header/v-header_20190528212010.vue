<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" alt="" width="64" height="64">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <supportt-ico :size=1 :type="seller.supports[0].type"></supportt-ico>
                </div>
            </div>
        </div>
    </div>
</template>
