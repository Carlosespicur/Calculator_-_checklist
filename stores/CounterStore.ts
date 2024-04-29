// stores/counterStore.ts
import { defineStore } from 'pinia'

interface Counter {
  id: string
  name: string
  count: number
}

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counters: [] as Counter[],
  }),
  getters: {
    getCounterById: (state) => {
      return (counterId: string) => state.counters.find(counter => counter.id === counterId);
    }
  },
  actions: {
    addCounter(name: string) {
      const newCounter: Counter = {
        id: Math.floor(Math.random() * 1000000).toString(), // Un id aleatorio
        name,
        count: 0,
      }
      this.counters.push(newCounter)
    },
    incrementCounter(counterId: string) {
      const counter = this.counters.find(counter => counter.id === counterId)
      if (counter) counter.count++
    },
  },
})

