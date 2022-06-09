<template>
   <div class="item">
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

      <button>Hide Completed</button>
   </div>

</template>

<script setup>
   import axios from "axios";
   import {ref,onMounted}  from "vue";
   const props = defineProps(['item'])
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
      if(props.item.completed == 1){
            props.item.completed = true
      }
      else{
         props.item.completed = false
      }
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