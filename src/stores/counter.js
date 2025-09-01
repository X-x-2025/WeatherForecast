import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCounterStore = defineStore('counter', () => {
    const city = ref('广州')
    const changeCity = (data) => {
    city.value = data
}

    return {city,changeCity}


})