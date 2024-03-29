<template>
  <div>
    <Beverage
      :isIced="currentTemp === 'Cold'"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
      :beverage="currentBeverage"
    />
    <ul>
      <div class="ingredients"> 
        <select v-model="currentTemp">
          <option v-for="temp in temps" :key="temp">
              {{ temp }}
          </option>
        </select>
      </div>
      <div class="ingredients">
        <select v-model="currentCreamer">
          <option v-for="creamer in creamers" :key="creamer">
              {{ creamer }}
          </option>
        </select>
      </div>
      <div class="ingredients">
        <select v-model="currentSyrup">
          <option v-for="syrup in syrups" :key="syrup">
              {{ syrup }}
          </option>
        </select>  
      </div>  
      <div class="ingredients">
        <select v-model="currentBeverage">
          <option v-for="baseBeverage in baseBeverages" :key="baseBeverage">
            {{baseBeverage}}
          </option>
        </select>
      </div>
    </ul>
    <ul>
    <div class="enterName">
      <li>
        <span>Name Beverage: </span><input v-model="beverageName" placeholder="enter name here" />
      </li>
    </div>
    <div class="saveButton">
      <li>
        <button @click="saveRecipe">Save Recipe</button>
      </li>
      </div>
    </ul>
    <ul>
    <div class="savedList">
      <li>
        <br></br>
        <span>Saved Recipes: </span>
        <div v-for="recipe in store.recipes" :key="recipe.recipeName">
        <button class="RecipeButtons" @click="showBeverage(recipe)">
          {{ recipe.recipeName }}
        </button>
        </div>
      </li>
      </div>
      </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
import { useSaveRecipeStore } from "../src/saveRecipe.ts";
const store = useSaveRecipeStore();
const beverageName = ref("");
function saveRecipe() {
  if (beverageName.value) {
    store.addBeverage(currentTemp.value, currentCreamer.value, currentSyrup.value, currentBeverage.value, beverageName.value);
    beverageName.value = "";
  }
}

interface Recipe {
  temperature: string;
  creamer: string;
  syrup: string;
  baseBeverage: string;
}

function showBeverage(recipe: Recipe) {
  currentTemp.value = recipe.temperature;
  currentCreamer.value = recipe.creamer;
  currentSyrup.value = recipe.syrup;
  currentBeverage.value = recipe.baseBeverage;
}
// Define reactive data
const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const currentCreamer = ref("None");
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const currentSyrup = ref("None");
const baseBeverages = ref(["Coffee", "Green Tea", "Black Tea"]);
const currentBeverage = ref("Coffee");
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  display:flex;
  align-items: center;
  justify-items: center;
  list-style: none;
}
.RecipeButtons{
  transition-duration: 0.4s;
  border-radius: 50%;
  padding: 8px;
  margin-bottom: 5px;
}
.RecipeButtons:hover{
  background-color: black;
  color: white;
}
div.ingredients {
  margin-left: 40px; 
}
div.ingredients select {
  border: none;
  border-radius: 20px; 
  padding: 10px 20px; 
  margin-bottom: 20px;
  appearance: none; 
  background-color: #37343b; 
  color: #ffffff; 
  font-size: 16px; 
  text-align: center;
  cursor: pointer; 
  font-family: Arial, sans-serif;
}
div.ingredients select::-ms-expand {
  display: flex; 
}
div.ingredients select::after {
  content: '\25BC'; 
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  pointer-events: none; 
}
.saveButton{
  margin-bottom: 10px;
  margin-left: 20px;
}
.saveButton button {
  border: none;
  border-radius: 10px; 
  padding: 5px 10px; 
  background-color: #97ae76; 
  color: #ffffff; 
  font-size: 16px; 
  cursor: pointer; 
  font-family: Arial, sans-serif;
}
.enterName {
  font-weight: bold; 
  color:#37342b;
  margin-bottom: 10px; 
  font-size: 20px;
  font-family: Arial, sans-serif;
}
.enterName input {
  margin-left: 5px;
  border: none;
  border-radius: 10px; 
  padding: 5px; 
  background-color: #f0f0f0; 
  font-weight: bold;
  font-size: 16px; 
}
.savedList{
  font-weight: bold;
  color: #37342b;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: Arial, sans-serif;
}
</style>
