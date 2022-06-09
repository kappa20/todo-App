
<template>
    <div class="todoListContainer">
       <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form v-on:updateList="getList()" />
       </div>
       <list-view :items="items" v-on:updateList="getList()"/>
    </div>

</template>

<script setup>
    import axios from 'axios';
    import {ref,watch} from 'vue';
    import addItemForm from './components/addItemForm.vue';
    import listView from './components/listView.vue';
    import {onMounted,onUpdated} from 'vue';
   
    const items = ref([]);

    
    function getList(){
        axios.get('api/items')
        .then(response =>{
            items.value = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }
   onMounted(()=>{
        getList()
    })
</script>

<style scoped>
.todoListContainer{
    width:350px;
    margin:auto;
}

.heading{
    background:#e6e6e6;
    padding:10px;
}

#title{
    text-align: center;
}
</style>