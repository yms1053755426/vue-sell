const ALL =2 

export default{
    data(){
        return{
            onlyContent:true,
            selectType:ALL
        }
      },
      computed:{
        ratings(){
            return this.food.ratings
        },
        computedRatings(){
            let ret = []
            this.ratings.forEach((rating)=>{
              if(this.onlyContent && !rating.text){
                  return
              }
              if(this.selectType===ALL || this.selectType === rating.ratetype){
                ret.push(rating)
              }
            })
            return ret
        }
      },
      created(){
       this.$on(EVENT_SHOW,()=>{
         this.$nextTick(()=>{
        this.$refs.scroll.refresh()
          })
       })
     },
}