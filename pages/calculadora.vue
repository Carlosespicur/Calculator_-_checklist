<template>
    <div class="calculadora">
      <div class = "pantalla">
        <h1>{{ input }}</h1>
      </div>
      <div class="buttons">
        <el-button @click = "updateInput('7')">7</el-button>
        <el-button @click = "updateInput('8')">8</el-button>
        <el-button @click = "updateInput('9')">9</el-button>
        <el-button @click = "symbolValid() ? updateInput(' + '): null">+</el-button>
        <el-button @click = "updateInput('4')">4</el-button>
        <el-button @click = "updateInput('5')">5</el-button>
        <el-button @click = "updateInput('6')">6</el-button>
        <el-button @click = "symbolValid() ? updateInput(' - '): null">-</el-button>
        <el-button @click = "updateInput('1')">1</el-button>
        <el-button @click = "updateInput('2')">2</el-button>
        <el-button @click = "updateInput('3')">3</el-button>
        <el-button @click = "symbolValid() ? updateInput(' * '): null">*</el-button>
        <el-button @click = "updateInput('0')">0</el-button>
        <el-button @click = "resetInput()">AC</el-button>
        <el-button @click = "updateInput('.')">.</el-button>
        <el-button @click = "symbolValid() ? updateInput(' / '): null">/</el-button>
        <el-button @click = "evaluateInput()">=</el-button>
      </div>
    </div>
</template>
  
  <script setup lang="ts">
  import {evaluate} from 'mathjs' // para evaluar una expresión matemática expresada con un string
  import { ref } from 'vue'
  let forceReset = false;
  let input = ref("") // expresión a calcular
  const resetInput = () => (input.value = "");
  const updateInput = (symb: string) => {
    if(forceReset === true){
      resetInput();
      forceReset = false;
    }  
    input.value += symb;

  };
  
  const evaluateInput = () => {
    try{
      let resultado = evaluate(input.value);
      if(!isFinite(resultado) || isNaN(resultado)){
        input.value = "Syntax Error";
      }
      else{ 
        input.value += " = " + resultado;
      }
    }
    catch{
      input.value = "Syntax Error";
    }
    forceReset = true;
  }
  const symbolValid = () => !(input.value.slice(-1) === " ");
  
  </script>
  
  <style scoped lang="scss">
    .calculadora{
      width: 600px;
      font-family: Arial, Helvetica, sans-serif;
      margin: auto;
      
      }
    .pantalla{
      width: 600px;
      border-radius: 20px;
      height: 55px;
      display: flex;
      margin: 20px;
      align-items: center;
      background-color: #EEEEEE;
      color: #222831;
      padding: 5px 10px;
    }
    .buttons{
      display: grid;
      width: 600px;
      grid-template-columns: repeat(4, auto);
      margin: 20px;
    }
    .el-button{
      margin: 20px;
      width: 100%;
      height: 100%;
      font-size: 25px;
    }
</style>

