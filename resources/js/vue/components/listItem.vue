<template>
   <div class="item" v-if="(!show && item.completed ? false : true)" >
      <input 
         type="checkbox"
      
         @change="updateCheck(item.id)"
         v-model="item.completed"
         />
      <span :class="[item.completed ? 'completed' : '','itemText']">
         {{item.name}}
      </span>
      <button @click="removeItem(item.id)" class="trashcan">
         <fa icon="trash" />
      </button>
   </div>

</template>

<script setup>
   import axios from "axios";
   import {ref,onMounted, onUpdated}  from "vue";
   const props = defineProps(['item','show'])
   const emit = defineEmits(['updateList'])
 
   // const check = ref((props.item.completed == 1  ? true : false ))
   function removeItem(id){
  
      axios.delete(`api/item/${id}`)
      .then((response)=> {
         if(response.status == 200){
            emit('updateList')
         }
      }).catch(error => {
         console.log(error)
      })
   }

   function updateCheck(id){
      axios.put(`api/item/${id}`,{
         item:props.item
      }).then(response => {
         if(response.status == 200){
            
         }
         
      }).catch(error => {
            console.log(error)
         })
   }

   onMounted(()=>{
      console.log(props.show)
      if(props.item.completed == 1){
            props.item.completed = true
      }
      else{
         props.item.completed = false
      }
   })
   onUpdated(()=>{
      console.log(props.show)
   })
</script>

<style scoped>
   .completed{
      text-decoration: line-through;
      color:#999999;
   }
   .itemText{
      width:100%;
      margin-left:20px;
   }

   .item{
      display:flex;
      justify-content: center;
      align-items:center
   }
   .trashcan{
      background: #e6e6e6;
      border:none;
      color:red;
      outline:none;
   }
</style>