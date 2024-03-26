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
        <span>Name beverage: </span><input v-model="beverageName" placeholder="enter name here" />
      </li>
      <li>
        <button @click="saveRecipe">Save Recipe</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
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
</style>
