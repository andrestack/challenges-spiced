import { create } from 'zustand'

const useLightsStore = create((set) => ({
  lights: [],
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
}))

export default useLightsStore