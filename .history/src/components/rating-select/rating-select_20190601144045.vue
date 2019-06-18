<template>
    <div class="rating-select">
        <div class="rating-type border-bottom-1px">
            <span class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
            <span class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">{{positive.length}}</span></span>
            <span class="block positive" :class="{'active':selectType===1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
        </div>
        <div class="switch" :class="{'on':onlyContent}">
            <span class="icon-check_circle"></span>
            <span class="text">只看有内容的评价</span>
        </div>
    </div>
</template>

<script>
const POSITIVE = 0
const NEGATIVE = 1
const ALL = 2

export default {
    props:{
        ratings:{
            type:Array,
            default(){
                return []
            }
        },
        selectType:{
            type:Boolean,
            default:false
        },
        onlyContent:{
          type:Boolean,
          default:false
        },
        desc:{
            type:Object,
            default(){
                return{
                    all:'全部',
                    positive:'满意',
                    negative:'不满意'
                }
            }
        }
    },
    computed:{
        positives(){
            return this.ratings.filter((rating)=>{
                return rating.rateType === POSITIVE
            })
        },
        negatives(){
            return this.ratings.filter((rating)=>{
                return rating.rateType === NEGATIVE
            })
        }
    }
}
</script>

