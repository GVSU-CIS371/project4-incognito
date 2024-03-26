import { defineStore } from 'pinia';

export const useSaveRecipeStore = defineStore('SaveRecipeStore', {
    state: () => ({
            recipes: [] as {
                temperature: string,
                creamer: string,
                syrup: string,
                baseBeverage: string,
                recipeName: string
            }[],
        }),
    actions: {
        addBeverage(temperature: string, creamer: string, syrup: string, baseBeverage: string, recipeName: string) {
            const newRecipe = {temperature, creamer, syrup, baseBeverage, recipeName};
            this.recipes.push(newRecipe);
            },
        },
});
