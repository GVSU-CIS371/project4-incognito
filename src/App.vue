<template>

  <div>
    <Beverage
      :isIced="currentTemp === 'Cold'"
      :creamer="currentCreamer"
      :syrup="currentSyrup"
      :beverage="currentBeverage"
    />
    <ul>
      <select v-model="currentTemp">
        <option v-for="temp in temps" :key="temp">
            {{ temp }}
        </option>
      </select>
      <select v-model="currentCreamer">
        <option v-for="creamer in creamers" :key="creamer">
            {{ creamer }}
        </option>
      </select>
      <select v-model="currentSyrup">
        <option v-for="syrup in syrups" :key="syrup">
            {{ syrup }}
        </option>
      </select>    
      <select v-model="currentBeverage">
        <option v-for="baseBeverage in baseBeverages" :key="baseBeverage">
          {{baseBeverage}}
        </option>
      </select>
    </ul>
    <ul>
      <li>
        <input v-model="beverageName" placeholder="Enter name here" />
      </li>
      <li>
        <button @click="saveRecipe">Save Recipe</button>
      </li>
      <li>
        <br></br>
        <span>Saved Recipes: </span>
        <div v-for="recipe in store.recipes" :key="recipe.recipeName">
        <button class="RecipeButtons" @click="showBeverage(recipe)">
          {{ recipe.recipeName }}
        </button>
      </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useSaveRecipeStore } from "../src/saveRecipe.ts";
const store = useSaveRecipeStore();
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
// Define reactive data
const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const currentCreamer = ref("None");
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const currentSyrup = ref("None");
const baseBeverages = ref(["Coffee", "Green Tea", "Black Tea"]);
const currentBeverage = ref("Coffee");
const beverageName = ref("");

function saveRecipe() {
  if (beverageName.value) {
    store.addBeverage(currentTemp.value, currentCreamer.value, currentSyrup.value, currentBeverage.value, beverageName.value);
    beverageName.value = "";
  }
}

function showBeverage(recipe) {
  currentTemp.value = recipe.temperature;
  currentCreamer.value = recipe.creamer;
  currentSyrup.value = recipe.syrup;
  currentBeverage.value = recipe.baseBeverage;
}
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
</style>
