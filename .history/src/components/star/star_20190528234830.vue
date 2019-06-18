<template>
    <div class="star" :class="starType">
       <span v-for="(itemClass,index) in itemClasses" :class="itemClass" :key="index" class="star-item"></span>
    </div>
</template>

<script>
import { SSL_OP_NO_TLSv1_2 } from 'constants';
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'

export default {
    props:{
        size:{
            type:Number
        },
        score:{
            type:Number
        }
    },
    computed:{
        starType(){
            return 'star-' + this.size
        },
        itemClasses(){
            let result = []
            const score = Math.floor(this.score * 2)/2
            const hasDecimal = score % 1 !== 0
            const integer = Math.floor(score)
            for(let i = 0;i<integer;i++){
                result.push(CLS_ON)
            }
            if(hasDecimal){
                result.push(CLS_HALF)
            }
            while(result.length < LENGTH){
                result.push(CLS_OFF)
            }
            return result
        }
    }
}
</script>
