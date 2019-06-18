<template>
    <div class="shop-cart-sticky" v-show="visible">
        <shop-cart
          ref="shopCart"
          :selectFoods="selectFoods"
          :deliveryPrice="deliveryPrice"
          :minPrice="minPrice"
        >
        </shop-cart>
    </div>
</template>

<script>
export default {
    name:'shop-cart-sticky',
    data(){
        return{
            visible:false
        }
    },
    props:{
        selectFoods:{
            type:Array,
            default(){
                
            }
        }
    }
}
</script>

