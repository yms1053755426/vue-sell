const EVENT_SHOW ='show'
const EVENT_HIDE = 'hide'

export default {
    data(){
        return{
            visible:false
        }
     },
     methods:{
         show(){
             this.visible = true
         },
         hide(){
             this.visible = false
         }
     },
}