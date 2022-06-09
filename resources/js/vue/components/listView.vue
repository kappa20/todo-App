<template>
   <div v-for="(item,index) in items" :key="index">
      <list-item
         :item="item"
         class="item"
         v-on:updateList="updateList"
         :show="show"
         v-model="show"
      />
      
      
   </div>
   <button @click="show = !show">{{show ? 'Hide Completed' : 'show Completed'}}</button>
</template>

<script setup>
   import {ref} from "vue";
   import listItem from './listItem.vue';
   const props = defineProps(['items'])
   const emit = defineEmits(['updateList'])
   const show = ref(true);
   function updateList(){
      emit("updateList")
   }

</script>

<style scoped>
   .item{
      background: #e6e6e6;
      padding:5px;
      margin-top:5px;
   }
</style>