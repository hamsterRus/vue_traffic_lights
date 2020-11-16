<template>
  <div class="container" >
    <TrafficLights :time='sec'/>
  </div>
</template>

<script>
import TrafficLights from '@/components/TrafficLights.vue'

export default {
  props: ['sec'],
  name: 'Home',
  components: {
    TrafficLights
  }
}
</script>

<style>
.container{
  margin: 100px auto;
  padding: 0;
  max-width: 1200px;
  display: flex;
  justify-content: center;
}
</style>