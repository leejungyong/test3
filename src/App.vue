<template>
  <div>
    <h1 v-mask.once="time">Hello {{time}}</h1>
    <h1 v-mask="time">Hello {{time}}</h1>
    <h1 v-mask="time">Hel232323lo {{time}}</h1>
    <h1 v-mask="time">Hello {{time}}</h1>
    <button @click="changevalue">changevalue</button>
  </div>
</template>

<script>
import mask  from "./mask";
export default {
  directives:{
    mask
  },
  name: 'App',
  data(){
    return{
      time:1
    }
  },
  created(){
    setTimeout(()=>{
      this.time = 3;
    },3000);
  },
  methods:{
    changevalue(){
      this.time = 10;
    }
  }
}
</script>

<style>

</style>
