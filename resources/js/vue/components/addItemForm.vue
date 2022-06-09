<template>
   <div class="addItem">
       <input type="text" v-model="item.name" @keyup.enter="addItem()"/>
        <fa  
        icon="plus-square"
        :class="[item.name ? 'active' :'inactive' ,'plus']"
        @click="addItem()" />
     
   </div>
</template>

<script setup>
    import axios from "axios";

    import {ref} from "vue";
    const emit = defineEmits(['updateList'])
    let item = ref({name:""})
    
    function addItem(){
        console.log(item.value.name)
        if(item.value.name == ''){
            return ;
        }
        axios.post('/api/item/store',{
            item:item.value
        })
        .then(response => {
            if(response.status == 201){
                item.value.name = "";
                emit("updateList");
            }
        }).catch(error =>{
            console.log(error)
        })

    }
</script>


<style scoped>

    .addItem{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    input{
        background:#f7f7f7;
        border:0px;
        outline:none;
        padding:5px;
        margin-right:10px;
        width:100%;
    }

    .plus{
        font-size:20px;

    }
    .active{
        color:#00CE25;

    }
    .inactive{
        color:#999999;
    }
</style>