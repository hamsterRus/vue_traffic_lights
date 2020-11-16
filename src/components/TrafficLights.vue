<template>
    <div class="traffic-lights" >
        <Light class="light" color="red" :count="counter"/>
        <Light class="light" color="yellow" :count="counter"/>
        <Light class="light" color="green" :count="counter"/>
    </div>
</template>

<script>
import Light from '@/components/Light.vue'

export default {
  props:['time'], 
  components: {
    Light
  },
  data(){
    return{
      nInterval: null,
      counter: null
    }
  },
  watch:{
    $route(){
      this.$store.dispatch('changeCurrentColor', this.$route.name);
      this.$store.dispatch('changeLight', this.$store.state.currentColor);
      this.changeCount()
    }
  }
  ,
  mounted() {
    this.$store.dispatch('changeCurrentColor', this.$route.name);
    this.$store.dispatch('changeLight', this.$store.state.currentColor);
    this.changeCount()
  },
  methods:{
    changeCount: function () {
      setTimeout(()=>{ 
        this.$router.push(this.$store.state.nextLigth); 
        }, this.time)
      this.counter = this.time / 1000;
      if(this.nInterval) clearInterval(this.nInterval);
      this.nInterval = setInterval(() => {this.counter -= 1;},1000);
    }
  }
}
</script>

<style>
.traffic-lights{
  background-color: grey;
  width: 150px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
}
.light{
  width: 100px;
  height: 100px;
  margin: 10px auto;
  border-radius: 50%;
  display: flex;
  border: 2px solid black;
  justify-content: center;
  align-items: center;
}
</style>