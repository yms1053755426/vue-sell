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
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="buttetin-wrapper">
            <span class="buttetin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
             <img :src="seller.avatar" width="100%" height="100%"> 
        </div>
    </div>
</template>

<script>
import SupportIco from 'components/support-ico/support-ico'
export default {
    name:'v-header',
    props:{
        seller:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        SupportIco
    }
}
</script>

