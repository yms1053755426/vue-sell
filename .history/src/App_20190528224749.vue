<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import { getSeller } from 'api'

export default {
  name: 'app',
  data(){
    return{
      seller:{}
    }
  },
  components: {
    VHeader
  },
  created(){

  }
}
</script>
<style lang="stylus">

</style>
