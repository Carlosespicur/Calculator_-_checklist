<template>
  <div v-for = "(item, index) in listData" :key="index" class = "itemList">
    <div class = "elemCheckbox">
      <el-checkbox @change = "item.completed = !item.completed" size = "large" :class = "{taskCompleted : item.completed}">{{item.title}}</el-checkbox>
    </div><el-button @click = "item.showDescription = !item.showDescription"> Descripción</el-button>
    
    <el-button @click = "deleteData(index)">Eliminar</el-button>
    <el-card :class="{hidden: !item.showDescription}">
      <p>{{ item.description }}</p>
    </el-card>
  </div>

  <div class = "newItem">
    <el-button @click = "waitingInput = !waitingInput" :class="{hidden: waitingInput}">Agregar nota</el-button>
  </div>
  <div :class = "{hidden: !waitingInput, inputInformation: waitingInput}">
    <div class = "inputs">
      <el-input v-model="input.title" placeholder="Título"/>
      <el-input v-model="input.description" placeholder="Descripción" type="textarea"></el-input>
      <div class = "inputButton">
        <el-button type="success" :icon="Check" @click = "waitingInput = false; addData(input)" circle />
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import {
  Check
} from '@element-plus/icons-vue'

import {ref} from 'vue'
class Data {
  title: string;
  description: string;
  showDescription: boolean;
  completed: boolean;
  constructor(title: string, description: string){
    this.title = title;
    this.description = description;
    this.showDescription = false;
    this.completed = false;
  }
}
let waitingInput = ref(false);
let listData: Ref<Data[]> = ref([])

let input: Ref<Data> = ref(new Data("", ""));
const addData = (info: Data):void => {
  listData.value.push({...info});
  info.title  =  "";
  info.description = "";
}

const deleteData = (index: number):void => {
  listData.value.splice(index, 1);
};

</script>

<style lang="scss">
.hidden{
  display: none;
}
.inputInformation{
  input, textarea{
    display: block;
  }
}
.itemList{
  
  margin:20px;
  text-align: center;
  .elemCheckbox{
    padding-right: 20px;
    display:inline-block;
    
  }
}

.taskCompleted{
  text-decoration: line-through;
}
.inputs{
  margin-top: 2%;
  margin-left: 20%;
  margin-right: 20%;

  .inputButton{
    display: flex;
    justify-content: center;
    margin: 2%;
    
  }
}
.newItem{
  display: flex;
  justify-content: center;
  margin: 2%;
}
</style>
  