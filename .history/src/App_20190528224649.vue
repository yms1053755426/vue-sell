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
  components: {
    VHeader
  }
}
</script>
<style lang="stylus">

</style>
