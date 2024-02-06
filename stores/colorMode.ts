export const useColorMode = defineStore('colorMode', {
  state: () => ({ color: 'light' }),
  getters: {
    colorMode: (state) => state.color,
  },
  actions: {
    setColor(newColor: string) {
      this.color = newColor
    },
  },
})
